import { Resend } from "resend";
import { site } from "@/content/site";
import { contactSubmissionSchema } from "@/lib/contact-validation";

const requestWindowMs = 15 * 60 * 1000;
const requestLimit = 5;
const requestsByIp = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = requestsByIp.get(ip);

  if (!current || current.resetAt <= now) {
    requestsByIp.set(ip, { count: 1, resetAt: now + requestWindowMs });
    return false;
  }

  if (current.count >= requestLimit) {
    return true;
  }

  current.count += 1;
  return false;
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  const parsed = contactSubmissionSchema.safeParse(payload);

  if (!parsed.success) {
    return Response.json({ success: false }, { status: 400 });
  }

  const { website, ...submission } = parsed.data;
  if (website) {
    return Response.json({ success: true });
  }

  if (isRateLimited(getClientIp(request))) {
    return Response.json({ success: false }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_TO;
  const contactFrom = process.env.CONTACT_FROM;

  if (!apiKey || !contactTo || !contactFrom) {
    if (process.env.NODE_ENV === "development") {
      console.info("Contact form submission (Resend is not configured):", submission);
      return Response.json({ success: true });
    }

    console.error("Contact form email is not configured.", {
      hasApiKey: Boolean(apiKey),
      hasContactTo: Boolean(contactTo),
      hasContactFrom: Boolean(contactFrom),
    });
    return Response.json({ success: false }, { status: 503 });
  }

  const { emailFields, emailSubject } = site.contact;
  const emailText = [
    `${emailFields.name}: ${submission.name}`,
    `${emailFields.email}: ${submission.email}`,
    `${emailFields.budget}: ${submission.budget}`,
    "",
    `${emailFields.details}:`,
    submission.details,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: contactFrom,
      to: contactTo,
      replyTo: submission.email,
      subject: emailSubject,
      text: emailText,
    });

    if (error) {
      console.error("Resend could not deliver a contact form submission.", error);
      return Response.json({ success: false }, { status: 502 });
    }
  } catch (error) {
    console.error("Contact form email delivery failed.", error);
    return Response.json({ success: false }, { status: 502 });
  }

  return Response.json({ success: true });
}

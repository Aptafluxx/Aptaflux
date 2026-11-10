import { ContactForm } from "@/components/contact/ContactForm";
import { Container } from "@/components/ui/Container";
import { LocalTime } from "@/components/ui/LocalTime";
import { PageHeader } from "@/components/ui/PageHeader";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: site.contact.metadataTitle,
  description: site.contact.metadataDescription,
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = site;

  return (
    <>
      <PageHeader title="Contact" intro={contact.introduction} />
      <Container>
        <div className="grid gap-14 pb-20 sm:pb-24 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <section aria-label={contact.informationLabel}>
            <h2 className="font-display text-[28px] font-medium leading-tight">
              {contact.informationHeading}
            </h2>
            <a
              className="mt-6 inline-block break-all text-[19px] transition-colors hover:text-ember"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <div className="mt-8 space-y-3 text-[17px] leading-relaxed text-muted">
              <p>{contact.responseTime}</p>
              <p>{contact.timeZoneNote}</p>
              <p>
                {site.localTimeLabel}: <LocalTime />
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-[15px] text-muted">{contact.socialHeading}</h3>
              <nav aria-label={site.socialNavigation} className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {site.socials.map((social) => (
                  <a
                    className="text-[17px] transition-colors hover:text-ember"
                    href={social.href}
                    key={social.label}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {social.label}
                  </a>
                ))}
              </nav>
            </div>
          </section>

          <section aria-label={contact.formLabel}>
            <h2 className="mb-8 font-display text-[28px] font-medium leading-tight">
              {contact.formTitle}
            </h2>
            <ContactForm />
          </section>
        </div>
      </Container>
    </>
  );
}

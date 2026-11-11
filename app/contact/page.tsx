import { ContactForm } from "@/components/contact/ContactForm";
import { LocalTime } from "@/components/ui/LocalTime";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
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
      <Section topRule>
        <div className="grid gap-10 min-[900px]:grid-cols-2 min-[900px]:gap-16">
          <div aria-label={contact.informationLabel} role="region">
            <h2 className="font-display text-h3 font-medium">
              {contact.informationHeading}
            </h2>
            <a
              className="mt-6 inline-block break-all text-body transition-colors hover:text-ember"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <div className="mt-8 space-y-3 text-body leading-relaxed text-muted">
              <p>{contact.responseTime}</p>
              <p>{contact.timeZoneNote}</p>
              <p>
                {site.localTimeLabel}: <LocalTime />
              </p>
            </div>
            <div className="mt-10">
              <h3 className="text-small text-muted">{contact.socialHeading}</h3>
              <nav aria-label={site.socialNavigation} className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {site.socials.map((social) => (
                  <a
                    className="text-body transition-colors hover:text-ember"
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
          </div>

          <div aria-label={contact.formLabel} role="region">
            <h2 className="mb-8 font-display text-h3 font-medium">
              {contact.formTitle}
            </h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}

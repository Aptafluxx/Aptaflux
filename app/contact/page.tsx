import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { CenteredPageHeader } from "@/components/ui/CenteredPageHeader";
import { Section } from "@/components/ui/Section";
import { ContactInformation } from "@/components/contact/ContactInformation";
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
      <CenteredPageHeader
        badge={contact.header.badge}
        titleLineOne={contact.header.titleLineOne}
        titleLineTwo={contact.header.titleLineTwo}
        introduction={contact.introduction}
      />
      <Section aria-label={contact.informationLabel} tone="base">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="order-2 space-y-8 lg:order-1 lg:col-span-5">
            <ContactInformation />
          </div>

          <div className="order-1 lg:order-2 lg:col-span-7">
            <Card className="contact-form-card rounded-[24px] border-accent/30 border-t-4 border-t-accent p-5 hover:translate-y-0 hover:border-accent/30 md:p-8">
              <h2 className="font-body text-[28px] font-extrabold leading-tight tracking-[-0.02em]">
                {contact.formTitle}
              </h2>
              <p className="mt-2 text-[14px] text-muted">
                {contact.requiredFieldsNote}
              </p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

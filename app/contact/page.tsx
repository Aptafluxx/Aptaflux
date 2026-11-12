import { Clock3, Globe2, Mail, Radio, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { LocalTime } from "@/components/ui/LocalTime";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: site.contact.metadataTitle,
  description: site.contact.metadataDescription,
  path: "/contact",
});

export default function ContactPage() {
  const { contact, whatsapp } = site;
  const socials = site.socials.filter(({ href }) => href.length > 0);

  return (
    <>
      <PageHeader
        accent="talk"
        intro={contact.introduction}
        title="Let's talk about your project"
      />
      <Section aria-label={contact.informationLabel} tone="surface">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 lg:col-span-5">
            <h2 className="mb-5 font-body text-h2 font-bold tracking-[-0.02em]">
              {contact.informationHeading}
            </h2>
            <Reveal>
              <Card className="flex items-start gap-4 p-5">
                <IconBadge icon={Mail} />
                <div className="min-w-0">
                  <h3 className="text-small font-semibold">Email</h3>
                  <a
                    className="mt-2 inline-block break-all text-body text-muted transition-colors hover:text-ember"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </div>
              </Card>
            </Reveal>

            {contact.responseTime ? (
              <Reveal>
                <Card className="flex items-start gap-4 p-5">
                  <IconBadge icon={Clock3} />
                  <div>
                    <h3 className="text-small font-semibold">Response time</h3>
                    <p className="mt-2 text-body leading-relaxed text-muted">
                      {contact.responseTime}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ) : null}

            <Reveal>
              <Card className="flex items-start gap-4 p-5">
                <IconBadge icon={Globe2} />
                <div>
                  <h3 className="text-small font-semibold">Time zone</h3>
                  <p className="mt-2 text-body leading-relaxed text-muted">
                    {contact.timeZoneLabel}
                  </p>
                  <p className="mt-1 text-small leading-relaxed text-muted">
                    {contact.currentTimeLabel} <LocalTime />
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal>
              <Card className="flex items-start gap-4 p-5">
                <IconBadge icon={Radio} />
                <div>
                  <h3 className="text-small font-semibold">
                    {contact.remoteFirst}
                  </h3>
                </div>
              </Card>
            </Reveal>

            {whatsapp.href || socials.length > 0 ? (
              <Reveal>
                <Card className="flex items-start gap-4 p-5">
                  <IconBadge icon={MessageCircle} />
                  <div>
                    <h3 className="text-small font-semibold">
                      {contact.socialHeading}
                    </h3>
                    <nav
                      aria-label={site.socialNavigation}
                      className="mt-3 flex flex-wrap gap-x-5 gap-y-2"
                    >
                      {whatsapp.href ? (
                        <a
                          className="text-body text-muted transition-colors hover:text-ember"
                          href={whatsapp.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {whatsapp.label}
                        </a>
                      ) : null}
                      {socials.map((social) => (
                        <a
                          className="text-body text-muted transition-colors hover:text-ember"
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
                </Card>
              </Reveal>
            ) : null}

            <div className="pt-4">
              <h3 className="font-body text-h3 font-bold tracking-[-0.02em]">
                {contact.whatHappensNext.heading}
              </h3>
              <ol className="mt-4 space-y-3">
                {contact.whatHappensNext.steps.map((step, index) => (
                  <li
                    className="flex gap-4 border-t border-line pt-4"
                    key={`${step.title}-${index}`}
                  >
                    <span className="font-body text-small font-bold text-ember">
                      0{index + 1}
                    </span>
                    <div>
                      <p className="font-semibold">{step.title}</p>
                      <p className="mt-1 text-body leading-relaxed text-muted">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-5 sm:p-8">
              <h2 className="mb-8 font-body text-h2 font-bold tracking-[-0.02em]">
                {contact.formTitle}
              </h2>
              <ContactForm />
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

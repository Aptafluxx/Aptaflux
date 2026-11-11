import Link from "next/link";
import { ServiceAutomation } from "@/components/art/ServiceAutomation";
import { ServiceConversion } from "@/components/art/ServiceConversion";
import { ServicePlatform } from "@/components/art/ServicePlatform";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { servicesContent } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: servicesContent.metadataTitle,
  description: homeContent.services.intro,
  path: "/services",
});

export default function ServicesPage() {
  const serviceArt = {
    "conversion-engine": ServiceConversion,
    "business-automation": ServiceAutomation,
    "digital-platforms": ServicePlatform,
  } as const;

  return (
    <>
      <PageHeader title={servicesContent.metadataTitle} intro={homeContent.services.intro} />
      <Section
        aria-label={servicesContent.ariaLabels.services}
        tone="surface"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {servicesContent.services.map((service) => {
            const Illustration = serviceArt[service.slug];
            return (
              <article
                className="flex h-full flex-col rounded-sm border border-line p-5 sm:p-6"
                key={service.slug}
              >
                <Illustration className="mb-4" />
                <p className="text-small font-semibold text-ember">{service.number}</p>
                <h2 className="mt-3 font-display text-h2 font-semibold">
                  {service.name}
                </h2>
                <h3 className="mt-4 font-display text-h3 font-medium">
                  {service.promise}
                </h3>
                <p className="mt-4 text-body leading-relaxed text-muted">
                  {service.scope}
                </p>
                <p className="mt-auto border-t border-line pt-5 text-small text-muted">
                  <span className="font-semibold">{homeContent.services.bestForLabel}: </span>
                  {service.bestFor}
                </p>
                <Link
                  className="mt-6 text-small font-semibold text-ember transition-colors hover:text-text"
                  href={`/services/${service.slug}`}
                >
                  {service.linkLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </Section>

      <Section aria-label={homeContent.capabilities.eyebrow} tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-ember-deep">
              {homeContent.capabilities.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-semibold">
              {homeContent.capabilities.title}
            </h2>
            <p className="mt-6 max-w-[36ch] text-body leading-relaxed text-muted">
              {homeContent.capabilities.closing}
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {servicesContent.capabilities.map((capability) => (
              <div
                className="grid gap-2 border-t border-line py-4 sm:grid-cols-2 sm:gap-6"
                key={capability.name}
              >
                <h3 className="font-semibold">{capability.name}</h3>
                <p className="text-body text-muted">{capability.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

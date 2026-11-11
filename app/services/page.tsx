import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { servicesContent } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: servicesContent.metadataTitle,
  description: servicesContent.metadataDescription,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services" />
      <Section aria-label={servicesContent.ariaLabels.services} topRule>
          {servicesContent.services.map((service) => (
            <article className="py-6" key={service.name}>
              <div className="grid grid-cols-1 gap-5 min-[820px]:grid-cols-12 min-[820px]:gap-0">
                <h2 className="font-display text-h2 font-medium min-[820px]:col-span-5">
                  {service.name}
                </h2>
                <div className="min-[820px]:col-start-7 min-[820px]:col-span-6">
                  <p className="max-w-[55ch] text-body leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2 text-body leading-relaxed text-muted">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Rule className="mt-8 sm:mt-10" />
            </article>
          ))}
      </Section>

      <Section>
          <Reveal>
            <h2 className="mb-8 font-display text-h2 font-semibold md:mb-10">
              {servicesContent.howWeWork.heading}
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
              {servicesContent.howWeWork.steps.map((step) => (
                <article key={step.number}>
                  <p className="font-display text-display-lg leading-none text-ember">
                    {step.number}
                  </p>
                  <h3 className="mt-5 font-display text-h3 font-medium">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-body leading-relaxed text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
      </Section>
      <CtaBand />
    </>
  );
}

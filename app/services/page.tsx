import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
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
      <Container>
        <section aria-label={servicesContent.ariaLabels.services}>
          {servicesContent.services.map((service) => (
            <article className="py-8 sm:py-10" key={service.name}>
              <div className="grid grid-cols-1 gap-5 min-[820px]:grid-cols-12 min-[820px]:gap-0">
                <h2 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.98] tracking-[-0.03em] min-[820px]:col-span-5">
                  {service.name}
                </h2>
                <div className="min-[820px]:col-start-7 min-[820px]:col-span-6">
                  <p className="max-w-[55ch] text-[19px] leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2 text-[17px] leading-relaxed text-muted">
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <Rule className="mt-8 sm:mt-10" />
            </article>
          ))}
        </section>

        <section className="py-16 sm:py-24">
          <Reveal>
            <h2 className="mb-10 font-display text-[clamp(40px,6vw,96px)] font-semibold leading-[0.95] tracking-[-0.03em] sm:mb-14">
              {servicesContent.howWeWork.heading}
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
              {servicesContent.howWeWork.steps.map((step) => (
                <article key={step.number}>
                  <p className="font-display text-[64px] leading-none text-ember">
                    {step.number}
                  </p>
                  <h3 className="mt-5 font-display text-[28px] font-medium leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-muted">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>
      </Container>
      <CtaBand />
    </>
  );
}

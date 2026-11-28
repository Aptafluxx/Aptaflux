import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceAutomation } from "@/components/art/ServiceAutomation";
import { ServiceConversion } from "@/components/art/ServiceConversion";
import { ServicePlatform } from "@/components/art/ServicePlatform";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

const FeaturedWork = dynamic(
  () =>
    import("@/components/sections/FeaturedWork").then(
      (module) => module.FeaturedWork,
    ),
  { loading: () => <div aria-hidden="true" className="min-h-24 bg-card" /> },
);

const serviceArt = {
  "conversion-engine": ServiceConversion,
  "business-automation": ServiceAutomation,
  "digital-platforms": ServicePlatform,
} as const;

export function HomeSections() {
  const { services, process, faq } = homeContent;

  return (
    <>
      <Section
        aria-label={services.eyebrow}
        eyebrow={services.eyebrow}
        intro={services.intro}
        title={services.title}
        tone="alt"
      >
        <div className="grid auto-rows-fr items-stretch gap-5 lg:grid-cols-3">
          {services.solutions.map((solution, index) => {
            const Illustration = serviceArt[solution.slug];

            return (
              <Reveal className="h-full" delay={index * 0.06} key={solution.slug}>
                <Link
                  aria-label={`Explore ${solution.name}`}
                  className="group block h-full rounded-lg focus-visible:outline-offset-4"
                  href={`/services/${solution.slug}`}
                >
                  <Card className="flex h-full flex-col p-5 sm:p-6">
                    <div className="mb-6 flex h-[180px] items-center justify-center overflow-hidden rounded-md bg-bg px-4">
                      <Illustration className="!h-full max-h-[180px] w-full" />
                    </div>
                    <p className="text-small font-semibold text-brand">
                      {solution.number}
                    </p>
                    <p className="mt-2 text-body font-semibold">{solution.name}</p>
                    <h3 className="mt-3 font-body text-h3 font-bold tracking-[-0.02em]">
                      {solution.promise}
                    </h3>
                    <p className="mt-3 text-small leading-relaxed text-muted">
                      {solution.shortDescription}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-6 text-small font-semibold text-brand transition-colors group-hover:text-fg">
                      Explore {solution.name}
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                        size={16}
                      />
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <FeaturedWork />

      <Section
        aria-label={process.eyebrow}
        eyebrow={process.eyebrow}
        title={process.title}
        tone="raised"
      >
        <ProcessSteps steps={process.steps} />
      </Section>

      <Section aria-label={faq.eyebrow} tone="alt">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-brand">
              {faq.eyebrow}
            </p>
            <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
              {faq.title}
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-8">
            <FAQAccordion items={faq.items} />
          </div>
        </div>
      </Section>
    </>
  );
}

import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Clock,
  Globe,
  Layers,
  Link2,
  MousePointerClick,
  PenTool,
  Repeat,
  Server,
  Smartphone,
  Smile,
  Target,
  Timer,
  TrendingUp,
  Users,
  Workflow,
  Eye,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WhyChecklist } from "@/components/art/WhyChecklist";
import { ServiceAutomation } from "@/components/art/ServiceAutomation";
import { ServiceConversion } from "@/components/art/ServiceConversion";
import { ServicePlatform } from "@/components/art/ServicePlatform";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { LazyMarquee } from "@/components/ui/LazyMarquee";
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

const problemIcons = [MousePointerClick, Clock, Layers] as const;
const outcomeIcons = [Users, Timer, Smile, TrendingUp] as const;
const capabilityIcons = [Globe, Smartphone, PenTool, Bot, Server, Workflow] as const;
const whyIcons = [Target, PenTool, Link2, Eye, Repeat] as const;
function IconCard({
  icon: Icon,
  title,
  text,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <Reveal className="h-full" delay={delay}>
      <Card className="h-full">
        <IconBadge icon={Icon} />
        <h3 className="mt-5 font-body text-h3 font-bold tracking-[-0.02em]">
          {title}
        </h3>
        <p className="mt-3 text-body leading-relaxed text-muted">{text}</p>
      </Card>
    </Reveal>
  );
}

export function HomeSections() {
  const {
    problem,
    outcomes,
    services,
    capabilities,
    technologies,
    process,
    why,
    faq,
  } = homeContent;

  return (
    <>
      <Section
        aria-label={problem.eyebrow}
        className="pb-8 md:pb-12 lg:pb-14"
        eyebrow={problem.eyebrow}
        intro={problem.intro}
        title={problem.title}
        tone="raised"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {problem.points.map((point, index) => (
            <Reveal className="h-full" delay={index * 0.06} key={point.title}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <IconBadge icon={problemIcons[index]} />
                  <span className="font-body text-small font-bold text-brand">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-body text-h3 font-bold tracking-[-0.02em]">
                  {point.title}
                </h3>
                <p className="mt-3 text-body leading-relaxed text-muted">
                  {point.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        aria-label={outcomes.eyebrow}
        eyebrow={outcomes.eyebrow}
        title={outcomes.title}
        tone="base"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.points.map((point, index) => (
            <IconCard
              delay={index * 0.06}
              icon={outcomeIcons[index]}
              key={point.title}
              text={point.text}
              title={point.title}
            />
          ))}
        </div>
      </Section>

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
                    <p className="mt-3 text-body leading-relaxed text-muted">
                      {solution.scope}
                    </p>
                    <div className="mt-auto border-t border-line pt-5">
                      <p className="text-small font-semibold text-muted">
                        {services.bestForLabel}
                      </p>
                      <p className="mt-2 min-h-[4.8rem] text-body leading-relaxed">
                        {solution.bestFor}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-brand transition-colors group-hover:text-fg">
                        Explore {solution.name}
                        <ArrowRight
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                          size={16}
                        />
                      </span>
                    </div>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-body">
          <span>{services.unsure} </span>
          <Link
            className="font-semibold text-brand underline decoration-brand underline-offset-4 transition-colors hover:text-fg"
            href="/contact"
          >
            {services.contactLink}
          </Link>
        </p>
      </Section>

      <Section
        aria-label={capabilities.eyebrow}
        className="pb-8 md:pb-12 lg:pb-14"
        tone="raised"
      >
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-brand">
            {capabilities.eyebrow}
          </p>
          <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
            {capabilities.title}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.rows.map((row, index) => (
            <Reveal className="h-full" delay={index * 0.06} key={row.name}>
              <Card className="h-full p-6">
                <IconBadge icon={capabilityIcons[index]} />
                <h3 className="mt-4 font-body text-h3 font-bold tracking-[-0.02em]">
                  {row.name}
                </h3>
                <p className="mt-2 text-body leading-relaxed text-muted">
                  {row.benefit}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        aria-label={technologies.title}
        className="overflow-hidden"
        fullBleedContent
        title={technologies.title}
        tone="base"
      >
        <div className="tech-marquee-viewport">
          <LazyMarquee />
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

      <Section aria-label={why.eyebrow} tone="base">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-brand">
              {why.eyebrow}
            </p>
            <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
              {why.title}
            </h2>
            <WhyChecklist />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {why.points.map((point, index) => (
              <Reveal className={`h-full ${index === 4 ? "sm:col-span-2" : ""}`} delay={index % 2 * 0.06} key={point.name}>
                <Card className="h-full p-5">
                  <IconBadge icon={whyIcons[index]} />
                  <p className="mt-4 text-body leading-relaxed">
                    <strong className="font-bold">{point.name}:</strong>{" "}
                    <span className="text-muted">{point.text}</span>
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section aria-label={faq.eyebrow} tone="alt">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-brand">
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

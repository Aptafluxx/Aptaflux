import dynamic from "next/dynamic";
import Link from "next/link";
import {
  Bot,
  Code2,
  Clock,
  Compass,
  Globe,
  Layers,
  Link2,
  MousePointerClick,
  PenTool,
  Repeat,
  Rocket,
  Search,
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
  { loading: () => <div aria-hidden="true" className="min-h-24 bg-surface" /> },
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
const processIcons = [Search, Compass, Code2, Rocket] as const;

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
        eyebrow={problem.eyebrow}
        intro={problem.intro}
        title={problem.title}
        tone="cream"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {problem.points.map((point, index) => (
            <Reveal className="h-full" delay={index * 0.06} key={point.title}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-4">
                  <IconBadge icon={problemIcons[index]} />
                  <span className="font-body text-small font-bold text-ember-deep">
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
        <div className="mx-auto mt-14 max-w-4xl text-center">
          <div className="mx-auto mb-6 h-1 w-14 rounded-full bg-ember" />
          <p className="font-body text-h2 font-bold leading-tight tracking-[-0.02em]">
            {problem.closing}
          </p>
        </div>
      </Section>

      <Section
        aria-label={outcomes.eyebrow}
        eyebrow={outcomes.eyebrow}
        title={outcomes.title}
        tone="navy"
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
        tone="surface"
      >
        <div className="grid auto-rows-fr items-stretch gap-5 lg:grid-cols-3">
          {services.solutions.map((solution, index) => {
            const Illustration = serviceArt[solution.slug];

            return (
              <Reveal className="h-full" delay={index * 0.06} key={solution.slug}>
                <Link
                  aria-label={`${solution.linkLabel}: ${solution.name}`}
                  className="group block h-full rounded-lg focus-visible:outline-offset-4"
                  href={`/services/${solution.slug}`}
                >
                  <Card className="flex h-full flex-col p-5 sm:p-6">
                    <div className="mb-6 flex h-[180px] items-center justify-center overflow-hidden rounded-md bg-bg px-4">
                      <Illustration className="!h-full max-h-[180px] w-full" />
                    </div>
                    <p className="text-small font-semibold text-ember">
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
                      <p className="mt-2 text-body leading-relaxed">
                        {solution.bestFor}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-ember transition-colors group-hover:text-text">
                      {solution.linkLabel}
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <p className="mt-8 text-body">
          <span>{services.unsure} </span>
          <Link
            className="font-semibold text-ember underline decoration-ember underline-offset-4 transition-colors hover:text-text"
            href="/contact"
          >
            {services.contactLink}
          </Link>
        </p>
      </Section>

      <Section aria-label={capabilities.eyebrow} tone="cream">
        <div className="mb-8 max-w-3xl">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-ember-deep">
            {capabilities.eyebrow}
          </p>
          <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
            {capabilities.title}
          </h2>
        </div>
        <div className="space-y-4">
          <div className="grid items-stretch gap-4 md:grid-cols-12">
            {capabilities.rows.slice(0, 2).map((row, offset) => {
              const index = offset;
              return (
                <Reveal
                  className={`h-full md:col-span-6 ${index === 0 ? "lg:col-span-7" : "lg:col-span-5"}`}
                  delay={index * 0.06}
                  key={row.name}
                >
                  <Card className="relative h-full overflow-hidden p-6">
                    <div className={index === 0 ? "lg:max-w-[58%]" : ""}>
                      <IconBadge icon={capabilityIcons[index]} />
                      <h3 className="mt-4 font-body text-h3 font-bold tracking-[-0.02em]">
                        {row.name}
                      </h3>
                      <p className="mt-2 text-body leading-relaxed text-muted">
                        {row.benefit}
                      </p>
                    </div>
                    {index === 0 ? (
                      <div aria-hidden="true" className="absolute bottom-6 right-6 hidden w-[34%] rounded-md bg-bg p-3 lg:block">
                        <div className="flex gap-2 border-b border-line pb-2">
                          <i className="h-2 w-2 rounded-full bg-ember" />
                          <i className="h-2 w-2 rounded-full bg-text/40" />
                          <i className="h-2 w-2 rounded-full bg-text/20" />
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          <span className="h-8 rounded-sm bg-surface" />
                          <span className="h-8 rounded-sm bg-ember/80" />
                          <span className="h-8 rounded-sm bg-surface" />
                        </div>
                      </div>
                    ) : null}
                  </Card>
                </Reveal>
              );
            })}
          </div>
          <div className="grid items-stretch gap-4 md:grid-cols-12">
            {capabilities.rows.slice(2, 5).map((row, offset) => {
              const index = offset + 2;
              return (
                <Reveal
                  className="h-full md:col-span-6 lg:col-span-4"
                  delay={offset * 0.06}
                  key={row.name}
                >
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
              );
            })}
          </div>
          {capabilities.rows.slice(5).map((row) => (
            <Reveal className="h-full" key={row.name}>
              <Card className="flex h-full flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <IconBadge icon={capabilityIcons[5]} />
                  <div>
                    <h3 className="font-body text-h3 font-bold tracking-[-0.02em]">
                      {row.name}
                    </h3>
                    <p className="mt-2 text-body leading-relaxed text-muted">
                      {row.benefit}
                    </p>
                  </div>
                </div>
                <div aria-hidden="true" className="flex min-w-[180px] items-center gap-2 rounded-md bg-bg p-4 sm:w-[34%]">
                  <span className="rounded-sm bg-surface p-2 text-ember"><Workflow size={20} /></span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="grid gap-2">
                    <i className="h-3 w-8 rounded-sm bg-surface" />
                    <i className="h-3 w-8 rounded-sm bg-ember" />
                  </span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="rounded-sm bg-surface p-2 text-ember"><Bot size={20} /></span>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 border-t border-line pt-6 font-body text-h3 font-bold tracking-[-0.02em]">
          {capabilities.closing}
        </p>
      </Section>

      <Section
        aria-label={technologies.title}
        className="overflow-hidden py-14 md:py-20 lg:py-24"
        title={technologies.title}
        tone="navy"
      >
        <LazyMarquee />
      </Section>

      <FeaturedWork />

      <Section
        aria-label={process.eyebrow}
        eyebrow={process.eyebrow}
        title={process.title}
        tone="cream"
      >
        <div className="relative grid gap-8 before:absolute before:left-5 before:top-5 before:h-[calc(100%-2.5rem)] before:w-px before:bg-line sm:grid-cols-2 sm:before:hidden lg:grid-cols-4">
          {process.steps.map((step, index) => {
            const Icon = processIcons[index];

            return (
              <Reveal               className="relative z-10" delay={index * 0.06} key={step.number}>
                <p className="font-body text-small font-bold text-ember-deep">
                  {step.number}
                </p>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ember-deep">
                    <Icon aria-hidden="true" size={20} />
                </div>
                <h3 className="mt-4 font-body text-h3 font-bold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-2 text-body leading-relaxed text-muted">
                  {step.text}
                </p>
              </Reveal>
            );
          })}
          <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-[3.625rem] z-0 hidden h-px bg-line lg:block" />
        </div>
      </Section>

      <Section aria-label={why.eyebrow} tone="navy">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-ember">
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

      <Section aria-label={faq.eyebrow} tone="surface">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-wide text-ember">
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

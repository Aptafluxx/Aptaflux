import type { Metadata } from "next";
import Link from "next/link";
import {
  Bot,
  Code2,
  Compass,
  FileText,
  Globe,
  Rocket,
  Search,
  Server,
  Smartphone,
  Workflow,
} from "lucide-react";
import { ServiceAutomation } from "@/components/art/ServiceAutomation";
import { ServiceConversion } from "@/components/art/ServiceConversion";
import { ServicePlatform } from "@/components/art/ServicePlatform";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { LazyMarquee } from "@/components/ui/LazyMarquee";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { servicesContent } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: servicesContent.metadataTitle,
  description: homeContent.services.intro,
  path: "/services",
});

const serviceArt = {
  "conversion-engine": ServiceConversion,
  "business-automation": ServiceAutomation,
  "digital-platforms": ServicePlatform,
} as const;

const capabilityIcons = [Globe, Smartphone, FileText, Bot, Server, Workflow];
const processIcons = [Search, Compass, Code2, Rocket];
const capabilitySpans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-12",
];

export default function ServicesPage() {
  const { services, capabilities } = homeContent;

  return (
    <>
      <PageHeader
        accent="solutions"
        eyebrow={services.eyebrow}
        intro={services.intro}
        title="Solutions for ambitious businesses"
      />

      <Section aria-label={servicesContent.ariaLabels.services} tone="alt">
        <div className="grid auto-rows-fr items-stretch gap-5 lg:grid-cols-3">
          {services.solutions.map((solution, index) => {
            const Illustration = serviceArt[solution.slug];
            return (
              <Reveal
                className="h-full"
                delay={index * 0.06}
                key={solution.slug}
              >
                <Link
                  aria-label={`${solution.linkLabel}: ${solution.name}`}
                  className="group block h-full rounded-lg focus-visible:outline-offset-4"
                  href={`/services/${solution.slug}`}
                >
                  <Card className="flex h-full flex-col p-5 sm:p-6">
                    <div className="mb-6 flex h-44 items-center justify-center overflow-hidden rounded-md bg-bg px-4">
                      <Illustration className="!h-full max-h-44 w-full" />
                    </div>
                    <p className="text-small font-semibold text-brand">
                      {solution.number}
                    </p>
                    <p className="mt-2 text-body font-semibold">
                      {solution.name}
                    </p>
                    <h2 className="mt-3 font-body text-h3 font-bold tracking-[-0.02em]">
                      {solution.promise}
                    </h2>
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
                    <span className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-brand transition-colors group-hover:text-fg">
                      {solution.linkLabel}
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        aria-label={servicesContent.comparison.title}
        title={servicesContent.comparison.title}
        tone="raised"
      >
        <div className="hidden lg:block">
          <table className="w-full table-fixed border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[16%] border-b border-line p-4 text-small font-semibold" />
                {servicesContent.services.map((service) => (
                  <th
                    className="border-b border-line p-4 font-body text-h3 font-bold tracking-[-0.02em]"
                    key={service.slug}
                    scope="col"
                  >
                    {service.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  label: servicesContent.comparison.rowLabels[0],
                  values: servicesContent.services.map((service) => service.bestFor),
                },
                {
                  label: servicesContent.comparison.rowLabels[1],
                  values: servicesContent.services.map((service) =>
                    service.deliverables.join(", "),
                  ),
                },
                {
                  label: servicesContent.comparison.rowLabels[2],
                  values: servicesContent.services.map((service) => service.goodFirstStep),
                },
              ].map((row) => (
                <tr key={row.label}>
                  <th className="border-b border-line p-4 text-small font-semibold" scope="row">
                    {row.label}
                  </th>
                  {row.values.map((value, index) => (
                    <td
                      className="border-b border-line p-4 align-top text-body leading-relaxed text-muted"
                      key={servicesContent.services[index].slug}
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <th className="p-4" scope="row" />
                {servicesContent.services.map((service) => (
                  <td className="p-4" key={service.slug}>
                    <Link
                      className="font-semibold text-brand underline-offset-4 hover:underline"
                      href={`/services/${service.slug}`}
                    >
                      {servicesContent.comparison.linkLabel} →
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid gap-4 lg:hidden">
          {servicesContent.services.map((service) => (
            <Card className="p-5 sm:p-6" key={service.slug}>
              <h3 className="font-body text-h3 font-bold tracking-[-0.02em]">
                {service.name}
              </h3>
              {[
                {
                  label: servicesContent.comparison.rowLabels[0],
                  value: service.bestFor,
                },
                {
                  label: servicesContent.comparison.rowLabels[1],
                  value: service.deliverables.join(", "),
                },
                {
                  label: servicesContent.comparison.rowLabels[2],
                  value: service.goodFirstStep,
                },
              ].map((row) => (
                <div className="mt-4 border-t border-line pt-4" key={row.label}>
                  <p className="text-small font-semibold">{row.label}</p>
                  <p className="mt-2 text-body leading-relaxed text-muted">
                    {row.value}
                  </p>
                </div>
              ))}
              <Link
                className="mt-5 inline-block font-semibold text-brand underline-offset-4 hover:underline"
                href={`/services/${service.slug}`}
              >
                {servicesContent.comparison.linkLabel} →
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        aria-label={capabilities.eyebrow}
        eyebrow={capabilities.eyebrow}
        intro={capabilities.closing}
        title={capabilities.title}
        tone="raised"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
          {capabilities.rows.map((capability, index) => {
            const Icon = capabilityIcons[index];
            return (
              <Reveal
                className={`h-full ${capabilitySpans[index]}`}
                delay={index * 0.04}
                key={capability.name}
              >
                <Card className="h-full p-5 sm:p-6">
                  <IconBadge icon={Icon} />
                  <h3 className="mt-4 font-body text-h3 font-bold tracking-[-0.02em]">
                    {capability.name}
                  </h3>
                  <p className="mt-2 text-body leading-relaxed text-muted">
                    {capability.benefit}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        aria-label={homeContent.process.eyebrow}
        eyebrow={homeContent.process.eyebrow}
        title={homeContent.process.title}
        tone="raised"
      >
        <div className="relative grid gap-8 before:absolute before:left-5 before:top-5 before:h-[calc(100%-2.5rem)] before:w-px before:bg-line sm:grid-cols-2 sm:before:hidden lg:grid-cols-4">
          {homeContent.process.steps.map((step, index) => {
            const Icon = processIcons[index];
            return (
              <Reveal className="relative z-10" delay={index * 0.06} key={step.number}>
                <p className="font-body text-small font-bold text-brand">
                  {step.number}
                </p>
                <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-raised text-brand">
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
          <div
            aria-hidden="true"
            className="absolute left-[8%] right-[8%] top-[3.625rem] z-0 hidden h-px bg-line lg:block"
          />
        </div>
      </Section>

      <Section
        aria-label={homeContent.technologies.title}
        className="overflow-hidden"
        fullBleedContent
        title={homeContent.technologies.title}
        tone="base"
      >
        <div className="tech-marquee-viewport">
          <LazyMarquee />
        </div>
      </Section>

      <Section aria-label={homeContent.faq.eyebrow} tone="alt">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-brand">
              {homeContent.faq.eyebrow}
            </p>
            <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
              {homeContent.faq.title}
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-8">
            <FAQAccordion items={homeContent.faq.items.slice(1, 5)} />
          </div>
        </div>
      </Section>
      <CtaBand {...servicesContent.cta} />
    </>
  );
}

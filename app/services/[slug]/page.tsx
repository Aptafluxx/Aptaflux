import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Bell,
  Bot,
  CalendarCheck,
  Code2,
  Compass,
  FileText,
  Globe,
  LayoutDashboard,
  Mail,
  Rocket,
  Search,
  Workflow,
} from "lucide-react";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { servicesContent } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const processIcons = [Search, Compass, Code2, Rocket];
const deliverableIcons = [
  [Globe, FileText, Search, Mail, CalendarCheck, LayoutDashboard],
  [Bot, Workflow, ArrowUpRight, LayoutDashboard, Bell, CalendarCheck],
  [FileText, LayoutDashboard, Bell, Workflow, ArrowUpRight, CalendarCheck],
] as const;

export function generateStaticParams() {
  return servicesContent.services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: ServicePageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = servicesContent.services.find((item) => item.slug === slug);

  if (!service) {
    return { title: servicesContent.metadataTitle };
  }

  return createPageMetadata({
    title: service.name,
    description: service.promise,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage(props: ServicePageProps) {
  const { slug } = await props.params;
  const serviceIndex = servicesContent.services.findIndex(
    (item) => item.slug === slug,
  );
  const service = servicesContent.services[serviceIndex];

  if (!service) {
    notFound();
  }

  const relatedServices = servicesContent.services.filter(
    (item) => item.slug !== service.slug,
  );
  const relatedLines = service.processLines;
  const atAGlance = (
    <Card className="p-5 sm:p-6">
      <h2 className="font-body text-h3 font-bold tracking-[-0.02em]">
        At a glance
      </h2>
      <div className="mt-5 border-t border-line pt-4">
        <p className="text-small font-semibold">{homeContent.services.bestForLabel}</p>
        <p className="mt-2 text-body leading-relaxed text-muted">
          {service.bestFor}
        </p>
      </div>
      <div className="mt-5 border-t border-line pt-4">
        <p className="text-small font-semibold">What you get</p>
        <ul className="mt-2 space-y-2 text-body leading-relaxed text-muted">
          {service.deliverables.slice(0, 3).map((deliverable) => (
            <li className="flex gap-2" key={deliverable}>
              <span aria-hidden="true" className="text-brand">•</span>
              <span>{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 border-t border-line pt-4">
        <p className="text-small font-semibold">Typical engagement</p>
        <p className="mt-2 text-body leading-relaxed text-muted">
          {service.typicalEngagement}
        </p>
      </div>
    </Card>
  );

  return (
    <>
      <PageHeader
        accent={service.name.split(" ")[0]}
        breadcrumb={
          <Breadcrumbs
            current={service.name}
            parent="Services"
            parentHref="/services"
          />
        }
        eyebrow={service.number}
        intro={
          <>
            <p>{service.promise}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Book a Discovery Call</Button>
              <Button href="/services" variant="ghost">
                All services
              </Button>
            </div>
          </>
        }
        title={service.name}
        visual={atAGlance}
      />

      <Section
        aria-label="What's included"
        eyebrow={service.name}
        title="What's included"
        tone="alt"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((deliverable, index) => {
            const Icon = deliverableIcons[serviceIndex][index];
            return (
              <Reveal className="h-full" delay={index * 0.04} key={deliverable}>
                <Card className="h-full p-5 sm:p-6">
                  <IconBadge icon={Icon} />
                  <h3 className="mt-5 font-body text-h3 font-bold tracking-[-0.02em]">
                    {deliverable}
                  </h3>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        aria-label="How it works"
        eyebrow={homeContent.process.eyebrow}
        title="How it works"
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
                  {relatedLines[index]}
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
        aria-label="Technology"
        eyebrow={service.name}
        title="Technology"
        tone="base"
      >
        <ul className="flex flex-wrap gap-3">
          {service.technologies.map((technology) => (
            <li
              className="rounded-full border border-line px-4 py-2 text-body text-muted"
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        aria-label="Related solutions"
        eyebrow="Related solutions"
        title="Related solutions"
        tone="alt"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {relatedServices.map((related) => (
            <Link
              className="group rounded-lg focus-visible:outline-offset-4"
              href={`/services/${related.slug}`}
              key={related.slug}
            >
              <Card className="h-full p-5 sm:p-6">
                <p className="text-small font-semibold text-brand">
                  {related.number}
                </p>
                <h3 className="mt-3 font-body text-h3 font-bold tracking-[-0.02em] transition-colors group-hover:text-brand">
                  {related.name}
                </h3>
                <p className="mt-3 text-body leading-relaxed text-muted">
                  {related.promise}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section aria-label="Frequently asked questions" tone="alt">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-brand">
              FAQ
            </p>
            <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
              Questions about {service.name}
            </h2>
          </div>
          <div className="space-y-4 lg:col-span-8">
            <FAQAccordion items={service.faq} />
          </div>
        </div>
      </Section>
      <CtaBand {...servicesContent.cta} />
    </>
  );
}

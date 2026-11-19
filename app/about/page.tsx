import type { Metadata } from "next";
import Link from "next/link";
import {
  Bluetooth,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  Layers3,
  MessageSquareText,
  Smartphone,
  Target,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ProjectCard } from "@/components/work/ProjectCard";
import { TechnologyChip } from "@/components/work/ProjectMeta";
import { Card } from "@/components/ui/Card";
import { CenteredPageHeader } from "@/components/ui/CenteredPageHeader";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about";
import { servicesContent } from "@/content/services";
import { site } from "@/content/site";
import { work, workPageContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: aboutContent.metadataTitle,
  description: aboutContent.metadataDescription,
  path: "/about",
});

const serviceIcons: Record<
  (typeof servicesContent.services)[number]["slug"],
  LucideIcon
> = {
  "conversion-engine": Globe,
  "business-automation": Workflow,
  "digital-platforms": Smartphone,
};

const glanceIcons = [BriefcaseBusiness, Layers3, Code2] as const;
const principleIcons = [Target, MessageSquareText, Wrench] as const;
const toolkitIcons = [Smartphone, Globe, Database, Bluetooth] as const;

export default function AboutPage() {
  const projectCount = work.length;
  const websiteCount = work.filter((project) => project.kind === "website").length;
  const mobileAppCount = work.filter((project) => project.kind === "mobile").length;
  const glanceItems = [
    {
      value: String(projectCount),
      label: aboutContent.glance.projectLabel,
      detail: `${websiteCount} ${
        websiteCount === 1
          ? aboutContent.glance.website
          : aboutContent.glance.websites
      }, ${mobileAppCount} ${
        mobileAppCount === 1
          ? aboutContent.glance.mobileApp
          : aboutContent.glance.mobileApps
      }`,
    },
    {
      ...aboutContent.glance.solutions,
    },
    {
      ...aboutContent.glance.toolkit,
    },
  ];

  return (
    <>
      <CenteredPageHeader
        badge={aboutContent.header.badge}
        titleLineOne={aboutContent.header.titleLineOne}
        titleLineTwo={aboutContent.header.titleLineTwo}
        introduction={aboutContent.header.introduction}
      />

      <Section aria-label={aboutContent.story.eyebrow} tone="base">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-brand">
              {aboutContent.story.eyebrow}
            </p>
            <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
              {aboutContent.story.title}
            </h2>
            <div className="mt-6 space-y-4">
              {aboutContent.story.paragraphs.map((paragraph) => (
                <p
                  className="text-body leading-relaxed text-muted"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Card className="rounded-[20px] border-accent/30 border-t-4 border-t-accent p-5 sm:p-6">
              <h3 className="font-body text-h3 font-bold tracking-[-0.02em]">
                {aboutContent.glance.heading}
              </h3>
              <div className="mt-5 divide-y divide-line">
                {glanceItems.map((item, index) => {
                  const Icon = glanceIcons[index];

                  return (
                    <div className="flex gap-4 py-5 first:pt-0 last:pb-0" key={item.label}>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                        <Icon aria-hidden="true" size={20} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-body text-[28px] font-extrabold leading-tight tracking-[-0.03em]">
                          {item.value}
                        </p>
                        <p className="mt-1 text-[14px] text-muted">
                          {item.label}
                        </p>
                        {"detail" in item ? (
                          <p className="mt-1 text-[14px] text-muted">
                            {item.detail}
                          </p>
                        ) : "sub" in item ? (
                          <p className="mt-1 text-[14px] text-muted">
                            {item.sub}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        aria-label={aboutContent.services.eyebrow}
        eyebrow={aboutContent.services.eyebrow}
        title={aboutContent.services.title}
        tone="alt"
      >
        <div className="grid auto-rows-fr items-stretch gap-5 lg:grid-cols-3">
          {servicesContent.services.map((service, index) => {
            const Icon = serviceIcons[service.slug];

            return (
              <Reveal className="h-full" delay={index * 0.06} key={service.slug}>
                <Link
                  aria-label={`${aboutContent.services.linkLabel}: ${service.name}`}
                  className="group block h-full rounded-lg focus-visible:outline-offset-4"
                  href={`/services/${service.slug}`}
                >
                  <Card className="flex h-full flex-col p-5 sm:p-6">
                    <IconBadge icon={Icon} />
                    <h3 className="mt-5 font-body text-h3 font-bold tracking-[-0.02em]">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-body leading-relaxed text-muted">
                      {service.promise}
                    </p>
                    <span className="mt-auto pt-6 text-small font-semibold text-brand transition-colors group-hover:text-fg">
                      {aboutContent.services.linkLabel}
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        aria-label={aboutContent.principles.eyebrow}
        eyebrow={aboutContent.principles.eyebrow}
        title={aboutContent.principles.title}
        tone="base"
      >
        <div className="grid auto-rows-fr gap-5 md:grid-cols-3">
          {aboutContent.principles.items.map((principle, index) => (
            <Reveal
              className="h-full"
              delay={index * 0.06}
              key={principle.title}
            >
              <Card className="h-full p-5 sm:p-6">
                <IconBadge icon={principleIcons[index]} />
                <h3 className="mt-5 text-[18px] font-bold">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {principle.text}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        aria-label={aboutContent.process.eyebrow}
        eyebrow={aboutContent.process.eyebrow}
        title={aboutContent.process.title}
        tone="alt"
      >
        <ProcessSteps steps={aboutContent.process.steps} />
      </Section>

      <Section
        aria-label={aboutContent.toolkit.eyebrow}
        eyebrow={aboutContent.toolkit.eyebrow}
        title={aboutContent.toolkit.title}
        tone="base"
      >
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aboutContent.toolkit.groups.map((group, index) => (
            <Reveal className="h-full" delay={index * 0.06} key={group.title}>
              <Card className="h-full p-5 sm:p-6">
                <IconBadge icon={toolkitIcons[index]} />
                <h3 className="mt-5 font-body text-h3 font-bold tracking-[-0.02em]">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.technologies.map((technology) => (
                    <li key={technology}>
                      <TechnologyChip technology={technology} />
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        aria-label={aboutContent.selectedWork.eyebrow}
        eyebrow={aboutContent.selectedWork.eyebrow}
        title={aboutContent.selectedWork.title}
        tone="alt"
      >
        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {work
            .filter((project) => project.featured)
            .slice(0, 3)
            .map((project, index) => (
              <ProjectCard index={index} key={project.slug} project={project} />
            ))}
        </div>
        <Link
          className="mt-8 inline-flex font-semibold text-brand underline decoration-brand underline-offset-4 transition-colors hover:text-fg"
          href={aboutContent.selectedWork.href}
        >
          {aboutContent.selectedWork.linkLabel}
        </Link>
      </Section>

      <div className="home-page-panels">
        <CtaBand
          eyebrow={workPageContent.closing.eyebrow}
          title={workPageContent.closing.title}
          text={workPageContent.closing.text}
          buttonLabel={workPageContent.closing.primaryLabel}
          href="/contact"
          secondaryButtonLabel={workPageContent.closing.secondaryLabel}
          secondaryHref={workPageContent.closing.secondaryHref}
          email={site.email}
          replyNote={workPageContent.closing.replyNote}
          steps={site.contact.whatHappensNext.steps}
          stepsHeading={site.contact.whatHappensNext.heading}
        />
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  CircleAlert,
  Compass,
  Layers3,
  Monitor,
  Target,
  TrendingUp,
} from "lucide-react";
import { notFound } from "next/navigation";
import { artComponents } from "@/components/art";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { DotGrid } from "@/components/ui/DotGrid";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { DeviceFrame } from "@/components/work/DeviceFrame";
import { ProjectCard } from "@/components/work/ProjectCard";
import { ProjectGallery } from "@/components/work/ProjectGallery";
import { TechnologyChip } from "@/components/work/ProjectMeta";
import { site } from "@/content/site";
import { work, workPageContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";

type WorkPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: WorkPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = work.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Portfolio" };
  }

  return {
    ...createPageMetadata({
      title: project.name,
      description: project.summary,
      path: `/portfolio/${project.slug}`,
    }),
    openGraph: {
      ...createPageMetadata({
        title: project.name,
        description: project.summary,
      }).openGraph,
      type: "article",
    },
  };
}

export default async function ProjectPage(props: WorkPageProps) {
  const { slug } = await props.params;
  const project = work.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const labels = workPageContent.projectLabels;
  const galleryItems = (project.images?.gallery ?? []).reduce<
    { src: string; title: string; text: string }[]
  >((items, image, index) => {
    if (!existsSync(path.join(process.cwd(), "public", image))) {
      return items;
    }
    const caption = project.galleryCaptions?.[index];
    if (!caption) {
      return items;
    }
    items.push({ src: image, ...caption });
    return items;
  }, []);
  const sameKindProjects = work.filter(
    (item) => item.slug !== project.slug && item.kind === project.kind,
  );
  const moreProjects = [
    ...sameKindProjects,
    ...work.filter(
      (item) =>
        item.slug !== project.slug &&
        !sameKindProjects.some((sameKind) => sameKind.slug === item.slug),
    ),
  ].slice(0, 3);
  const storyItems = [
    { label: labels.challenge, text: project.challenge, icon: Target },
    { label: labels.approach, text: project.approach, icon: Compass },
    {
      label: labels.results,
      text: project.results.join(" "),
      icon: TrendingUp,
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden border-b border-accent/25 bg-band/22 pb-14 pt-[calc(72px+40px)] md:pb-14 md:pt-[calc(var(--navbar-bottom,72px)+40px)]">
        <DotGrid className="opacity-60" />
        <Container className="relative z-10">
          <Breadcrumbs
            current={project.name}
            parent="Portfolio"
            parentHref="/portfolio"
          />
          <div className="mt-8 flex flex-wrap gap-2 text-small text-muted">
            <span className="rounded-full border border-line px-3 py-1">
              {project.category}
            </span>
            <span className="rounded-full border border-line px-3 py-1">
              {project.platform}
            </span>
            <span className="rounded-full border border-line px-3 py-1">
              {labels.portfolioProject}
            </span>
          </div>
          <h1 className="mt-6 max-w-4xl font-body text-display-xl font-extrabold tracking-[-0.04em]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-[62ch] text-body leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[2px] border border-brand bg-brand px-5 py-3 text-small font-semibold text-brand-fg transition-colors hover:bg-brand-hover"
                href={project.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {labels.liveDemo} <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            ) : null}
            <Button href="/portfolio" variant="ghost">
              {labels.allWork}
            </Button>
          </div>
        </Container>
      </section>

      <Section aria-label={labels.projectCover} className="py-8 md:py-12">
        <div className="relative mx-auto w-full max-w-5xl aspect-[16/9] overflow-hidden rounded-[24px] border border-accent/25 bg-band p-4 [container-type:size] sm:p-8">
          <div
            aria-hidden="true"
            className="project-cover-dot-grid absolute inset-0"
          />
          {project.images?.cover ? (
            <DeviceFrame
              device={project.kind === "mobile" ? "phone" : "laptop"}
              mobileAlt={`${project.name} on mobile`}
              mobileImage={
                project.kind === "website" ? project.images.mobile : undefined
              }
            >
              <Image
                alt={`${project.name} cover`}
                className="h-full w-full object-cover object-top"
                fill
                priority
                sizes="(min-width: 1024px) 85vw, 95vw"
                src={project.images.cover}
              />
            </DeviceFrame>
          ) : project.cover === "ProjectCover" ? (
            <artComponents.ProjectCover project={project} />
          ) : (
            <DeviceFrame device="laptop">
              <artComponents.EmberFig />
            </DeviceFrame>
          )}
        </div>
      </Section>

      <Section aria-label={labels.projectOverview} tone="alt">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <h2 className="font-body text-h2 font-bold tracking-[-0.03em]">
              {labels.projectOverview}
            </h2>
            <p className="mt-5 max-w-[65ch] text-body leading-relaxed text-muted">
              {project.summary}
            </p>
            <h3 className="mt-10 font-body text-h3 font-bold">
              {labels.servicesBehind}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <Link
                  className="inline-flex items-center gap-1 rounded-full border border-line px-3 py-2 text-small text-muted transition-colors hover:border-accent hover:text-accent"
                  href={
                    project.kind === "website"
                      ? "/services/conversion-engine"
                      : "/services/digital-platforms"
                  }
                  key={service}
                >
                  {service} <ArrowUpRight aria-hidden="true" size={14} />
                </Link>
              ))}
            </div>
          </div>
          <Card className="h-fit p-5 lg:sticky lg:top-24">
            <div className="space-y-5">
              {[
                {
                  label: labels.category,
                  value: project.category,
                  icon: Layers3,
                },
                {
                  label: labels.platform,
                  value: project.platform,
                  icon: Monitor,
                },
                ...(project.year
                  ? [
                      {
                        label: labels.year,
                        value: project.year,
                        icon: TrendingUp,
                      },
                    ]
                  : []),
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div className="flex gap-3" key={item.label}>
                    <IconBadge icon={Icon} />
                    <div>
                      <p className="text-small text-muted">{item.label}</p>
                      <p className="mt-1 text-body">{item.value}</p>
                    </div>
                  </div>
                );
              })}
              <div className="flex gap-3">
                <IconBadge icon={Layers3} />
                <div>
                  <p className="text-small text-muted">{labels.stack}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <TechnologyChip
                        key={technology}
                        technology={technology}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {project.liveUrl ? (
                <div className="flex gap-3">
                  <IconBadge icon={ArrowUpRight} />
                  <div>
                    <p className="text-small text-muted">{labels.liveDemo}</p>
                    <a
                      className="mt-1 inline-flex items-center gap-1 text-body font-semibold text-brand"
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {labels.liveDemo}{" "}
                      <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </Card>
        </div>
      </Section>

      {project.features && project.features.length > 0 ? (
        <Section aria-label={labels.keyFeatures}>
          <div className="max-w-3xl">
            <p className="text-eyebrow font-semibold uppercase tracking-[0.12em] text-brand">
              {labels.whatWeBuilt}
            </p>
            <h2 className="mt-3 font-body text-h2 font-bold tracking-[-0.03em]">
              {labels.keyFeatures}
            </h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <Card className="flex items-start gap-4 p-5" key={feature}>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                  <Check aria-hidden="true" size={20} />
                </span>
                <p className="pt-1 text-[16px] leading-relaxed">{feature}</p>
              </Card>
            ))}
          </div>
        </Section>
      ) : null}

      <Section aria-label={labels.projectStory} tone="raised">
        {project.story ? (
          <>
            <div className="relative mb-8 grid gap-3 md:grid-cols-3 lg:mb-6 lg:gap-4">
              <div
                aria-hidden="true"
                className="absolute left-[16.666%] right-[16.666%] top-5 hidden h-0.5 bg-accent/30 md:block lg:hidden"
              />
              {[
                { number: "01", label: labels.challenge },
                { number: "02", label: labels.approach },
                { number: "03", label: labels.results },
              ].map((item) => (
                <div
                  className="relative z-10 flex min-w-0 items-center gap-3"
                  key={item.number}
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-[rgb(var(--section-background))] text-small font-bold text-accent lg:border-accent/40 lg:bg-card lg:text-[13px]">
                    {item.number}
                  </span>
                  <span className="font-body text-[16px] font-bold lg:shrink-0 lg:whitespace-nowrap lg:text-[15px] lg:font-semibold">
                    {item.label}
                  </span>
                  {item.number !== "03" ? (
                    <span
                      aria-hidden="true"
                      className="hidden h-px min-w-0 flex-1 bg-accent/30 lg:block lg:-mr-4"
                    />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Reveal className="h-full" delay={0}>
                <Card className="h-full border-accent/30 border-t-4 border-t-accent p-5 sm:p-6">
                  <IconBadge icon={Target} />
                  <h2 className="mt-5 line-clamp-2 text-[20px] font-bold leading-tight">
                    {project.story.challenge.headline}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.story.challenge.points.map((point) => (
                      <li className="flex items-start gap-2 text-[15px] leading-relaxed" key={point}>
                        <CircleAlert aria-hidden="true" className="mt-0.5 shrink-0 text-accent/70" size={17} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
              <Reveal className="h-full" delay={0.06}>
                <Card className="h-full border-accent/30 border-t-4 border-t-accent p-5 sm:p-6">
                  <IconBadge icon={Compass} />
                  <h2 className="mt-5 line-clamp-2 text-[20px] font-bold leading-tight">
                    {project.story.approach.headline}
                  </h2>
                  <ol className="mt-4 space-y-4">
                    {project.story.approach.steps.map((step, index) => (
                      <li className="flex items-start gap-3" key={step.title}>
                        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-small font-bold text-accent">
                          {index + 1}
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[15px] font-bold">{step.title}</span>
                          <span className="mt-0.5 block text-[14px] leading-relaxed text-muted">
                            {step.text}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </Card>
              </Reveal>
              <Reveal className="h-full" delay={0.12}>
                <Card className="h-full border-accent/30 border-t-4 border-t-accent p-5 sm:p-6">
                  <IconBadge icon={TrendingUp} />
                  <h2 className="mt-5 line-clamp-2 text-[20px] font-bold leading-tight">
                    {project.story.outcome.headline}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {project.story.outcome.points.map((point) => (
                      <li className="flex items-start gap-2 text-[15px] leading-relaxed" key={point}>
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-brand-fg">
                          <Check aria-hidden="true" size={13} strokeWidth={2.5} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </div>
          </>
        ) : (
          <div className="grid gap-4 md:grid-cols-3">
            {storyItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="h-full" delay={index * 0.06} key={item.label}>
                  <Card className="h-full border-accent/30 border-t-4 border-t-accent p-5 sm:p-6">
                    <IconBadge icon={Icon} />
                    <h2 className="mt-5 font-body text-h3 font-bold tracking-[-0.02em]">
                      {item.label}
                    </h2>
                    {index === 2 ? (
                      <ul className="mt-3 space-y-3 text-body leading-relaxed text-muted">
                        {project.results.map((result, resultIndex) => (
                          <li key={`${result}-${resultIndex}`}>{result}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-body leading-relaxed text-muted">
                        {item.text}
                      </p>
                    )}
                  </Card>
                </Reveal>
              );
            })}
          </div>
        )}
      </Section>

      {galleryItems.length > 0 ? (
        <ProjectGallery
          items={galleryItems}
          kind={project.kind}
          liveUrl={project.liveUrl}
          projectName={project.name}
        />
      ) : null}

      <Section aria-label={labels.moreProjects}>
        <h2 className="font-body text-h2 font-bold tracking-[-0.03em]">
          {labels.moreProjects}
        </h2>
        <div className="mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreProjects.map((moreProject, index) => (
            <div key={moreProject.slug}>
              <ProjectCard index={index} project={moreProject} />
            </div>
          ))}
        </div>
        <Link
          className="mt-8 inline-flex text-small font-semibold text-brand"
          href="/portfolio"
        >
          {labels.backToAllWork} →
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

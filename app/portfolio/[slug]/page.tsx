import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
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
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { DeviceFrame } from "@/components/work/DeviceFrame";
import { GalleryImage } from "@/components/work/GalleryImage";
import { ProjectCard } from "@/components/work/ProjectCard";
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

export async function generateMetadata(props: WorkPageProps): Promise<Metadata> {
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
    { label: labels.results, text: project.results.join(" "), icon: TrendingUp },
  ];

  return (
    <>
      <section className="pb-10 pt-[calc(72px+40px)] md:pb-16 md:pt-[calc(var(--navbar-bottom,72px)+48px)]">
        <Container>
          <Breadcrumbs current={project.name} parent="Portfolio" parentHref="/portfolio" />
          <div className="mt-8 flex flex-wrap gap-2 text-small text-muted">
            <span className="rounded-full border border-line px-3 py-1">{project.category}</span>
            <span className="rounded-full border border-line px-3 py-1">{project.platform}</span>
            <span className="rounded-full border border-line px-3 py-1">{labels.portfolioProject}</span>
          </div>
          <h1 className="mt-6 max-w-4xl font-body text-display-xl font-extrabold tracking-[-0.04em]">
            {project.name}
          </h1>
          <p className="mt-5 max-w-[62ch] text-body leading-relaxed text-muted">{project.summary}</p>
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
            <Button href="/portfolio" variant="ghost">{labels.allWork}</Button>
          </div>
        </Container>
      </section>

      <Section aria-label={labels.projectCover}>
        <div className="relative aspect-[16/10] overflow-visible rounded-lg bg-[rgb(var(--bg))] sm:aspect-[16/9]">
          <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-80" />
          {project.images?.cover ? (
            <DeviceFrame
              device={project.kind === "mobile" ? "phone" : "laptop"}
              mobileAlt={`${project.name} on mobile`}
              mobileImage={project.kind === "website" ? project.images.mobile : undefined}
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
            <DeviceFrame device="laptop"><artComponents.EmberFig /></DeviceFrame>
          )}
        </div>
      </Section>

      <Section aria-label={labels.projectOverview} tone="alt">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div>
            <h2 className="font-body text-h2 font-bold tracking-[-0.03em]">{labels.projectOverview}</h2>
            <p className="mt-5 max-w-[65ch] text-body leading-relaxed text-muted">{project.summary}</p>
            <h3 className="mt-10 font-body text-h3 font-bold">{labels.servicesBehind}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <Link
                  className="rounded-full border border-line px-3 py-2 text-small text-muted transition-colors hover:border-brand hover:text-brand"
                  href={project.kind === "website" ? "/services/conversion-engine" : "/services/digital-platforms"}
                  key={service}
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
          <Card className="h-fit p-5 lg:sticky lg:top-24">
            <div className="space-y-5">
              {[
                { label: labels.category, value: project.category, icon: Layers3 },
                { label: labels.platform, value: project.platform, icon: Monitor },
                ...(project.year ? [{ label: labels.year, value: project.year, icon: TrendingUp }] : []),
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
                      <TechnologyChip key={technology} technology={technology} />
                    ))}
                  </div>
                </div>
              </div>
              {project.liveUrl ? (
                <div className="flex gap-3">
                  <IconBadge icon={ArrowUpRight} />
                  <div>
                    <p className="text-small text-muted">{labels.liveDemo}</p>
                    <a className="mt-1 inline-flex items-center gap-1 text-body font-semibold text-brand" href={project.liveUrl} rel="noopener noreferrer" target="_blank">
                      {labels.liveDemo} <ArrowUpRight aria-hidden="true" size={15} />
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </Card>
        </div>
      </Section>

      <Section aria-label={labels.projectStory} tone="raised">
        <div className="grid gap-4 md:grid-cols-3">
          {storyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="h-full" delay={index * 0.06} key={item.label}>
                <Card className="h-full p-5 sm:p-6">
                  <IconBadge icon={Icon} />
                  <h2 className="mt-5 font-body text-h3 font-bold tracking-[-0.02em]">{item.label}</h2>
                  {index === 2 ? (
                    <ul className="mt-3 space-y-3 text-body leading-relaxed text-muted">
                      {project.results.map((result, resultIndex) => <li key={`${result}-${resultIndex}`}>{result}</li>)}
                    </ul>
                  ) : (
                    <p className="mt-3 text-body leading-relaxed text-muted">{item.text}</p>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>
        {project.facts ? (
          <div className="mt-8 flex flex-wrap gap-8 border-y border-line py-6">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-body text-h2 font-bold">{fact.value}</p>
                <p className="text-small text-muted">{fact.label}</p>
              </div>
            ))}
          </div>
        ) : null}
      </Section>

      {project.images?.gallery?.some((image) => image.trim().length > 0) ? (
        <Section aria-label={workPageContent.ariaLabels.projectGallery}>
          <div className="grid grid-cols-1 gap-5 min-[820px]:grid-cols-12">
            {project.images.gallery
              .filter((image) => image.trim().length > 0)
              .slice(0, 3)
              .map((image, index) => (
                <GalleryImage
                  alt={`${project.name} gallery image ${index + 1}`}
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-card p-4 sm:p-8 ${index === 1 ? "min-[820px]:col-span-5" : "min-[820px]:col-span-7"}`}
                  image={image}
                  key={`${image}-${index}`}
                  sizes="(min-width: 820px) 50vw, 100vw"
                />
              ))}
          </div>
        </Section>
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
        <Link className="mt-8 inline-flex text-small font-semibold text-brand" href="/portfolio">
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


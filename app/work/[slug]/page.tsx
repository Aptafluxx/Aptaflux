import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Target, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";
import { artComponents } from "@/components/art";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { DeviceFrame } from "@/components/work/DeviceFrame";
import { DotGrid } from "@/components/ui/DotGrid";
import { work, workPageContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";

type WorkPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: WorkPageProps): Promise<Metadata> {
  const { slug } = await props.params;
  const project = work.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Work" };
  }

  return {
    ...createPageMetadata({
      title: project.name,
      description: project.summary,
      path: `/work/${project.slug}`,
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

  const nextProject = work.find((item) => item.slug === project.next);
  if (!nextProject) {
    throw new Error(`The next project "${project.next}" does not exist.`);
  }

  const Artwork = artComponents[project.cover];
  const labels = workPageContent.projectLabels;
  const metadataItems = [
    { label: labels.category, value: project.category },
    { label: labels.services, value: project.services.join(", ") },
    { label: labels.stack, value: project.stack.join(", ") },
  ];
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
      <PageHeader
        accent={project.name.split(" ").at(-1)}
        breadcrumb={
          <Breadcrumbs
            current={project.name}
            parent="Work"
            parentHref="/work"
          />
        }
        eyebrow={
          <span className="inline-flex rounded-full border border-line px-3 py-1 text-small normal-case tracking-normal text-muted">
            {labels.type}
          </span>
        }
        intro={project.summary}
        title={project.name}
      />

      <Section aria-label={workPageContent.ariaLabels.projectDetails} tone="surface">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {metadataItems.map((item) => (
            <div className="border-t border-line pt-4" key={item.label}>
              <p className="text-small leading-relaxed text-muted">{item.label}</p>
              <p className="mt-2 text-body leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section aria-label="Project cover">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#0F1A27] sm:aspect-[16/9]">
          <DotGrid className="opacity-80" />
          <DeviceFrame device="laptop">
            <Artwork />
          </DeviceFrame>
        </div>
      </Section>

      <Section aria-label={workPageContent.ariaLabels.projectStory} tone="cream">
        <div className="grid gap-4 md:grid-cols-3">
          {storyItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal className="h-full" delay={index * 0.06} key={item.label}>
                <Card className="h-full p-5 sm:p-6">
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
      </Section>

      {project.gallery && project.gallery.length > 0 ? (
        <Section aria-label={workPageContent.ariaLabels.projectGallery}>
          <div className="grid grid-cols-1 gap-5 min-[820px]:grid-cols-12">
            {project.gallery.slice(0, 3).map((art, index) => {
              const GalleryArt = artComponents[art];
              return (
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg bg-surface p-4 sm:p-8 ${
                    index === 1
                      ? "min-[820px]:col-span-5"
                      : "min-[820px]:col-span-7"
                  }`}
                  key={`${art}-${index}`}
                >
                  <GalleryArt />
                </div>
              );
            })}
          </div>
        </Section>
      ) : null}

      <Section>
        <Link
          className="group block border-y border-line py-6"
          href={`/work/${nextProject.slug}`}
        >
          <p className="text-small text-muted">{labels.nextProject}</p>
          <p className="mt-3 font-body text-display-lg font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:text-ember">
            {nextProject.name}
          </p>
        </Link>
      </Section>
      <CtaBand />
    </>
  );
}

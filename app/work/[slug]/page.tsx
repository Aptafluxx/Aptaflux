import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { ArtworkFrame } from "@/components/work/ArtworkFrame";
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

  const labels = workPageContent.projectLabels;
  const metadataItems = [
    {
      label: labels.type,
      value: project.type === "portfolio" ? labels.type : project.client,
    },
    { label: labels.category, value: project.category },
    { label: labels.services, value: project.services.join(", ") },
    { label: labels.stack, value: project.stack.join(", ") },
  ];
  const storyItems = [
    { label: labels.challenge, text: project.challenge },
    { label: labels.approach, text: project.approach },
  ];

  return (
    <>
      <PageHeader title={project.name} intro={project.summary} />

      <Section
        aria-label={workPageContent.ariaLabels.projectDetails}
      >
        <div className="grid grid-cols-2 border-y border-line min-[820px]:grid-cols-4">
          {metadataItems.map((item, index) => (
            <div
              className={`py-4 sm:py-5 ${
                index % 2 === 1 ? "border-l border-line pl-4 sm:pl-7" : ""
              } ${
                index >= 2
                  ? "border-t border-line min-[820px]:border-t-0"
                  : ""
              } ${
                index >= 2
                  ? "min-[820px]:border-l min-[820px]:pl-7"
                  : "min-[820px]:border-l-0 min-[820px]:pl-0"
              }`}
              key={item.label}
            >
              <p className="text-small leading-relaxed text-muted">{item.label}</p>
              <p className="mt-2 text-body leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <ArtworkFrame
          art={project.cover}
          className="min-[820px]:aspect-[16/9]"
        />
      </Section>

      <Section aria-label={workPageContent.ariaLabels.projectStory} topRule>
        {storyItems.map((item) => (
          <article className="grid grid-cols-1 gap-5 py-6 min-[820px]:grid-cols-12 min-[820px]:gap-0" key={item.label}>
            <h2 className="font-display text-h3 font-medium min-[820px]:col-span-3">
              {item.label}
            </h2>
            <p className="max-w-[60ch] text-body leading-relaxed min-[820px]:col-start-5 min-[820px]:col-span-7">
              {item.text}
            </p>
            <div className="col-span-full mt-8 min-[820px]:mt-10">
              <Rule />
            </div>
          </article>
        ))}
        {project.results.length > 0 ? (
          <article className="grid grid-cols-1 gap-5 py-6 min-[820px]:grid-cols-12 min-[820px]:gap-0">
            <h2 className="font-display text-h3 font-medium min-[820px]:col-span-3">
              {labels.results}
            </h2>
            <ul className="max-w-[60ch] space-y-6 min-[820px]:col-start-5 min-[820px]:col-span-7">
              {project.results.map((result, index) => (
                <li key={`${result}-${index}`}>
                  <p className="text-body leading-relaxed">{result}</p>
                </li>
              ))}
            </ul>
            <div className="col-span-full mt-8 min-[820px]:mt-10">
              <Rule />
            </div>
          </article>
        ) : null}
      </Section>

      {project.gallery && project.gallery.length > 0 ? (
        <Section aria-label={workPageContent.ariaLabels.projectGallery}>
          <div className="grid grid-cols-1 gap-5 min-[820px]:grid-cols-12">
            {project.gallery.slice(0, 3).map((art, index) => (
              <ArtworkFrame
                art={art}
                className={
                  index === 1
                    ? "min-[820px]:col-span-5"
                    : "min-[820px]:col-span-7"
                }
                key={`${art}-${index}`}
              />
            ))}
          </div>
        </Section>
      ) : null}

      <Section>
        <Link
          className="group block border-y border-line py-6"
          href={`/work/${nextProject.slug}`}
        >
          <p className="text-small text-muted">{labels.nextProject}</p>
          <p className="mt-3 font-display text-display-lg font-medium transition-colors duration-300 group-hover:text-ember">
            {nextProject.name}
          </p>
        </Link>
      </Section>
      <CtaBand />
    </>
  );
}

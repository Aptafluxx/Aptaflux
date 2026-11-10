import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Rule } from "@/components/ui/Rule";
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
    { label: labels.client, value: project.client },
    { label: labels.services, value: project.services.join(", ") },
    { label: labels.stack, value: project.stack.join(", ") },
    { label: labels.year, value: project.year },
  ];
  const storyItems = [
    { label: labels.challenge, text: project.challenge },
    { label: labels.approach, text: project.approach },
  ];

  return (
    <>
      <PageHeader title={project.name} intro={project.summary} />

      <Container>
        <section
          aria-label={workPageContent.ariaLabels.projectDetails}
          className="grid grid-cols-2 border-y border-line min-[820px]:grid-cols-4"
        >
          {metadataItems.map((item, index) => (
            <div
              className={`py-5 sm:py-7 ${
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
              <p className="text-[15px] leading-relaxed text-muted">{item.label}</p>
              <p className="mt-2 text-[17px] leading-relaxed">{item.value}</p>
            </div>
          ))}
        </section>

        <div className="py-10 sm:py-14">
          <ArtworkFrame
            art={project.cover}
            className="min-[820px]:aspect-[16/9]"
          />
        </div>

        <section aria-label={workPageContent.ariaLabels.projectStory}>
          {storyItems.map((item) => (
            <article className="grid grid-cols-1 gap-5 py-8 sm:py-10 min-[820px]:grid-cols-12 min-[820px]:gap-0" key={item.label}>
              <h2 className="font-display text-[28px] font-medium leading-tight min-[820px]:col-span-3">
                {item.label}
              </h2>
              <p className="max-w-[60ch] text-[19px] leading-relaxed min-[820px]:col-start-5 min-[820px]:col-span-7">
                {item.text}
              </p>
              <div className="col-span-full mt-8 min-[820px]:mt-10">
                <Rule />
              </div>
            </article>
          ))}
          <article className="grid grid-cols-1 gap-5 py-8 sm:py-10 min-[820px]:grid-cols-12 min-[820px]:gap-0">
            <h2 className="font-display text-[28px] font-medium leading-tight min-[820px]:col-span-3">
              {labels.results}
            </h2>
            <ul className="max-w-[60ch] space-y-6 min-[820px]:col-start-5 min-[820px]:col-span-7">
              {project.results.map((result, index) => (
                <li key={`${result.label}-${index}`}>
                  {result.value ? (
                    <>
                      <p className="font-display text-[clamp(40px,6vw,56px)] leading-none text-ember">
                        {result.value}
                      </p>
                      <p className="mt-2 text-[19px] leading-relaxed">
                        {result.label}
                      </p>
                    </>
                  ) : (
                    <p className="text-[19px] leading-relaxed">{result.label}</p>
                  )}
                </li>
              ))}
            </ul>
            <div className="col-span-full mt-8 min-[820px]:mt-10">
              <Rule />
            </div>
          </article>
        </section>

        {project.gallery && project.gallery.length > 0 ? (
          <section
            aria-label={workPageContent.ariaLabels.projectGallery}
            className="py-10 sm:py-14"
          >
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
          </section>
        ) : null}
      </Container>

      <Container>
        <Link
          className="group block border-y border-line py-8 sm:py-12"
          href={`/work/${nextProject.slug}`}
        >
          <p className="text-[15px] text-muted">{labels.nextProject}</p>
          <p className="mt-3 font-display text-[clamp(48px,9vw,150px)] font-medium leading-[0.95] tracking-[-0.03em] transition-colors duration-300 group-hover:text-ember">
            {nextProject.name}
          </p>
        </Link>
      </Container>
      <CtaBand />
    </>
  );
}

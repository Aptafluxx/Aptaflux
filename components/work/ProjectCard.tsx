import Image from "next/image";
import Link from "next/link";
import { artComponents } from "@/components/art";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceFrame } from "@/components/work/DeviceFrame";
import { homeContent } from "@/content/home";
import { workPageContent, type WorkProject } from "@/content/work";

type ProjectCardProps = {
  index?: number;
  project: WorkProject;
};

function ProjectCover({ project, priority = false }: { project: WorkProject; priority?: boolean }) {
  return (
    <div className="relative aspect-[16/10] overflow-visible rounded-lg bg-[rgb(var(--bg))]">
      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-0 transition-transform duration-300 ease-out group-hover:scale-[1.03]">
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
              priority={priority}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
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
      <span className="absolute left-3 top-3 rounded-full border border-line bg-card/90 px-2.5 py-1 text-small text-muted">
        {workPageContent.projectLabels.portfolioProject}
      </span>
    </div>
  );
}

export function ProjectCard({ index = 0, project }: ProjectCardProps) {
  return (
    <Reveal className="h-full" delay={index * 0.06}>
      <Link
        aria-label={`${homeContent.work.projectLink}: ${project.name}`}
        className="group block h-full rounded-lg focus-visible:outline-offset-4"
        href={`/work/${project.slug}`}
        prefetch={false}
      >
        <Card className="flex h-full flex-col p-5 sm:p-6">
          <ProjectCover priority={index === 0} project={project} />
          <div className="mt-4 flex items-center justify-between gap-3">
            <p className="truncate text-small text-muted">{project.category}</p>
            {project.year ? <p className="shrink-0 text-small text-muted">{project.year}</p> : null}
          </div>
          <h2 className="mt-2 font-body text-work-title font-bold tracking-[-0.02em] transition-colors group-hover:text-brand">
            {project.name}
          </h2>
          <p className="mt-2 line-clamp-3 text-body leading-relaxed text-muted">
            {project.summary}
          </p>
          <ul className="mt-auto flex flex-wrap gap-2 pt-5">
            {project.stack.map((tag) => (
              <li className="rounded-full border border-line px-2.5 py-1 text-small text-muted" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <span className="mt-5 flex items-center justify-between border-t border-line pt-4 text-small font-semibold text-brand">
            {homeContent.work.projectLink}
          </span>
        </Card>
      </Link>
    </Reveal>
  );
}

export function SpotlightProjectCard({ project }: { project: WorkProject }) {
  return (
    <Reveal>
      <Link
        className="group grid overflow-hidden rounded-lg border border-line bg-card md:grid-cols-[1.1fr_0.9fr]"
        href={`/work/${project.slug}`}
        prefetch={false}
      >
        <div className="min-h-[260px] p-4 sm:p-6">
          <ProjectCover project={project} />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap gap-2 text-small text-muted">
            <span className="rounded-full bg-brand px-3 py-1 text-brand-fg">
              {workPageContent.projectLabels.featuredProject}
            </span>
            <span className="rounded-full border border-line px-3 py-1">
              {project.category}
            </span>
          </div>
          <h2 className="mt-5 font-body text-h2 font-bold tracking-[-0.03em] transition-colors group-hover:text-brand">
            {project.name}
          </h2>
          <p className="mt-3 text-body leading-relaxed text-muted">{project.summary}</p>
          {project.facts ? (
            <div className="mt-6 flex flex-wrap gap-6 border-y border-line py-4">
              {project.facts.map((fact) => (
                <div key={fact.label}>
                  <p className="font-body text-h3 font-bold">{fact.value}</p>
                  <p className="text-small text-muted">{fact.label}</p>
                </div>
              ))}
            </div>
          ) : null}
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <li className="rounded-full border border-line px-2.5 py-1 text-small text-muted" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          <span className="mt-6 text-small font-semibold text-brand">
            {workPageContent.projectLabels.readCaseStudy}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

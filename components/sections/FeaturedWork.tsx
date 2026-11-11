import Link from "next/link";
import { artComponents } from "@/components/art";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { DeviceFrame } from "@/components/work/DeviceFrame";
import { homeContent } from "@/content/home";
import { work } from "@/content/work";

export function FeaturedWork() {
  const content = homeContent.work;

  return (
    <Section
      aria-label={content.eyebrow}
      eyebrow={content.eyebrow}
      title={content.title}
      tone="navy"
    >
      <div className="grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {work
          .filter((project) => project.featured)
          .map((project, index) => {
            const Artwork = artComponents[project.cover];

            return (
              <Reveal className="h-full" delay={index * 0.06} key={project.slug}>
                <Link
                  aria-label={`${content.projectLink}: ${project.name}`}
                  className="group block h-full rounded-lg focus-visible:outline-offset-4"
                  href={`/work/${project.slug}`}
                  prefetch={false}
                >
                  <Card className="flex h-full flex-col p-5 sm:p-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-surface">
                      <div aria-hidden="true" className="dot-grid absolute inset-0 opacity-80" />
                      <DeviceFrame device={project.slug === "ember-fig" ? "laptop" : "phone"}>
                        <Artwork />
                      </DeviceFrame>
                      {project.type === "portfolio" ? (
                        <span className="absolute right-3 top-3 rounded-full border border-line bg-bg/90 px-2.5 py-1 text-small text-text">
                          {content.portfolioBadge}
                        </span>
                      ) : null}
                      <span className="absolute bottom-3 right-3 translate-y-2 rounded-full bg-ember px-4 py-2 text-small font-semibold text-bg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        {content.projectLink}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-small text-muted">{project.category}</p>
                    </div>
                    <h3 className="mt-2 font-body text-work-title font-bold tracking-[-0.02em] transition-colors group-hover:text-ember">
                      {project.name}
                    </h3>
                    <p className="mt-2 flex-1 text-body leading-relaxed text-muted">
                      {project.summary}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <li
                          className="rounded-full border border-line px-2.5 py-1 text-small text-muted"
                          key={tag}
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 text-small font-semibold text-ember">
                      {content.projectLink}
                    </span>
                  </Card>
                </Link>
              </Reveal>
            );
          })}
      </div>
    </Section>
  );
}

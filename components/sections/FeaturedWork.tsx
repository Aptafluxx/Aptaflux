import Link from "next/link";
import { artComponents } from "@/components/art";
import { Section } from "@/components/ui/Section";
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
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {work
          .filter((project) => project.featured)
          .map((project) => {
            const Artwork = artComponents[project.cover];

            return (
              <article className="min-w-0" key={project.slug}>
                <Link
                  aria-label={`${content.projectLink}: ${project.name}`}
                  className="group block"
                  href={`/work/${project.slug}`}
                  prefetch={false}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-sm bg-surface p-4 sm:p-6">
                    <Artwork />
                  </div>
                  <div className="mt-5 flex min-h-7 items-start justify-between gap-3">
                    <p className="text-small text-muted">{project.category}</p>
                    {project.type === "portfolio" ? (
                      <span className="rounded-sm border border-line px-2 py-1 text-small text-muted">
                        {content.portfolioBadge}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 font-display text-work-title font-semibold transition-colors group-hover:text-ember">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-body leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1">
                    {project.stack.map((tag) => (
                      <li
                        className="text-small text-muted after:content-['·'] after:pl-2 last:after:content-none"
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-4 inline-block text-small font-semibold text-ember">
                    {content.projectLink}
                  </span>
                </Link>
              </article>
            );
          })}
      </div>
    </Section>
  );
}

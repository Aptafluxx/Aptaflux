import { ProjectCard } from "@/components/work/ProjectCard";
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
      tone="base"
    >
      <div className="grid auto-rows-fr gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {work
          .filter((project) => project.featured)
          .map((project, index) => (
            <ProjectCard index={index} key={project.slug} project={project} />
          ))}
      </div>
    </Section>
  );
}

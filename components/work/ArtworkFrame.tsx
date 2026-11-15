import { artComponents } from "@/components/art";
import type { WorkProject } from "@/content/work";

type ArtworkFrameProps = {
  project: WorkProject;
  className?: string;
};

export function ArtworkFrame({ project, className = "" }: ArtworkFrameProps) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-[2px] bg-card p-4 sm:p-8 ${className}`}
    >
      <div className="h-full w-full">
        {project.cover === "ProjectCover" ? (
          <artComponents.ProjectCover project={project} />
        ) : (
          <artComponents.EmberFig />
        )}
      </div>
    </div>
  );
}

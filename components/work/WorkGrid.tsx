"use client";

import { useMemo, useState } from "react";
import { ProjectCard, SpotlightProjectCard } from "@/components/work/ProjectCard";
import { work, workPageContent } from "@/content/work";

const filters = ["All", "Websites", "Mobile apps"] as const;
type ProjectFilter = (typeof filters)[number];

function matchesFilter(filter: Exclude<ProjectFilter, "All">, project: (typeof work)[number]) {
  return filter === "Websites" ? project.kind === "website" : project.kind === "mobile";
}

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? work
        : work.filter((project) => matchesFilter(activeFilter, project)),
    [activeFilter],
  );
  const spotlightProjects = filteredProjects.filter((project) => project.spotlight);
  const gridProjects = filteredProjects.filter((project) => !project.spotlight);

  return (
    <>
      <div aria-label="Filter portfolio projects" className="flex flex-wrap gap-2" role="group">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter}
            className={`min-h-11 rounded-full border px-4 py-2 text-small transition-colors ${
              activeFilter === filter
                ? "border-brand bg-brand text-brand-fg"
                : "border-line text-muted hover:border-brand hover:text-fg"
            }`}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}{" "}
            {filter === "All"
              ? work.length
              : work.filter((project) => matchesFilter(filter, project)).length}
          </button>
        ))}
      </div>
      <p aria-atomic="true" aria-live="polite" className="mt-4 text-small text-muted">
        {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
      </p>
      {spotlightProjects.length > 0 ? (
        <div className="mt-8 space-y-5">
          {spotlightProjects.map((project) => (
            <SpotlightProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : null}
      <div
        className={`mt-8 grid auto-rows-fr gap-5 sm:grid-cols-2 ${
          gridProjects.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"
        }`}
      >
        {gridProjects.map((project, index) => (
          <ProjectCard index={index} key={project.slug} project={project} />
        ))}
      </div>
      <p className="mt-10 border-t border-line pt-6 text-body leading-relaxed text-muted">
        {workPageContent.projectLabels.portfolioNote}
      </p>
    </>
  );
}

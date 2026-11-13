"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/work/ProjectCard";
import { work } from "@/content/work";

const filters = ["All", "Web", "Mobile", "AI and automation"] as const;
type ProjectFilter = (typeof filters)[number];

function matchesFilter(
  filter: Exclude<ProjectFilter, "All">,
  project: (typeof work)[number],
) {
  if (filter === "Web") {
    return (
      project.stack.includes("Next.js") ||
      project.services.some((service) =>
        ["Web Development", "Responsive Design", "UI/UX"].includes(service),
      )
    );
  }
  if (filter === "Mobile") {
    return (
      project.stack.includes("Flutter") ||
      project.services.includes("Mobile Development") ||
      project.services.includes("Flutter")
    );
  }
  return project.services.some((service) =>
    ["AI Integration", "Business Automation"].includes(service),
  );
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

  return (
    <>
      <div
        aria-label="Filter portfolio projects"
        className="flex flex-wrap gap-2"
        role="group"
      >
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
            {filter}
          </button>
        ))}
      </div>
      <p aria-atomic="true" aria-live="polite" className="mt-4 text-small text-muted">
        {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
      </p>
      <div className="mt-6 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            index={index}
            key={project.slug}
            project={project}
            showPortfolioBadge
          />
        ))}
      </div>
    </>
  );
}

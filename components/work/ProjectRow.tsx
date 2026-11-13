"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useState, type PointerEvent } from "react";
import { ArtworkFrame } from "@/components/work/ArtworkFrame";
import { workPageContent, type WorkProject } from "@/content/work";
import { durations, easing } from "@/lib/motion";

type ProjectRowProps = {
  project: WorkProject;
};

export function ProjectRow({ project }: ProjectRowProps) {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const springConfig = { damping: 24, stiffness: 180, mass: 0.6 };
  const previewX = useSpring(-500, springConfig);
  const previewY = useSpring(-500, springConfig);

  const updatePreviewPosition = (event: PointerEvent<HTMLAnchorElement>) => {
    if (
      shouldReduceMotion ||
      event.pointerType !== "mouse" ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    previewX.set(Math.min(event.clientX + 24, window.innerWidth - 384));
    previewY.set(Math.min(event.clientY + 24, window.innerHeight - 288));
  };

  const preview =
    portalRoot && !shouldReduceMotion
      ? createPortal(
          <motion.div
            aria-hidden="true"
            className="cursor-preview pointer-events-none fixed left-0 top-0 z-50 w-[360px]"
            style={{ x: previewX, y: previewY }}
            animate={{ opacity: isPreviewVisible ? 1 : 0 }}
            transition={{ duration: durations.medium, ease: easing }}
          >
            <ArtworkFrame art={project.cover} />
          </motion.div>,
          portalRoot,
        )
      : null;

  return (
    <Link
      className="group relative block py-6 md:py-8"
      href={`/work/${project.slug}`}
      prefetch={false}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && !shouldReduceMotion) {
          setPortalRoot(document.body);
          setIsPreviewVisible(true);
          updatePreviewPosition(event);
        }
      }}
      onPointerMove={updatePreviewPosition}
      onPointerLeave={() => setIsPreviewVisible(false)}
    >
      <div className="grid gap-5 min-[820px]:grid-cols-[minmax(0,1fr)_360px] min-[820px]:items-end">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="font-display text-project-title font-medium transition-colors duration-300 group-hover:text-brand">
            {project.name}
            </h2>
            {project.type === "portfolio" ? (
              <span className="rounded-sm border border-line px-2 py-1 text-small text-muted">
                {workPageContent.projectLabels.type}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-small text-muted">{project.category}</p>
          <p className="mt-3 max-w-[65ch] text-body leading-relaxed text-muted">
            {project.summary}
          </p>
          <div className="mt-5 min-[820px]:hidden">
            <ArtworkFrame art={project.cover} />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-right text-small leading-relaxed text-muted">
          <p>{project.stack.join(", ")}</p>
          <p className="text-brand">{workPageContent.projectLabels.projectLink}</p>
        </div>
      </div>
      {preview}
    </Link>
  );
}

"use client";

import { motion, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useState, type PointerEvent } from "react";
import { Container } from "@/components/ui/Container";
import { ArtworkFrame } from "@/components/work/ArtworkFrame";
import type { WorkProject } from "@/content/work";
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
      className="group relative block py-8 sm:py-10"
      href={`/work/${project.slug}`}
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
      <Container className="grid gap-5 min-[820px]:grid-cols-12 min-[820px]:items-end">
        <div className="min-w-0 min-[820px]:col-span-8">
          <h2 className="font-display text-[clamp(40px,8vw,130px)] font-medium leading-[0.95] tracking-[-0.03em] transition-colors duration-300 group-hover:text-ember">
            {project.name}
          </h2>
          <div className="mt-5 min-[820px]:hidden">
            <ArtworkFrame art={project.cover} />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[15px] leading-relaxed text-muted min-[820px]:col-span-4 min-[820px]:items-end min-[820px]:text-right">
          <p>{project.services.join(", ")}</p>
          <p>{project.year}</p>
        </div>
      </Container>
      {preview}
    </Link>
  );
}

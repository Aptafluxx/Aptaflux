"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";

type GalleryItem = {
  src: string;
  title: string;
  text: string;
};

type ProjectGalleryProps = {
  items: GalleryItem[];
  kind: "website" | "mobile";
  projectName: string;
  liveUrl?: string;
};

const transition = { duration: 0.22, ease: "easeOut" as const };

export function ProjectGallery({
  items,
  kind,
  projectName,
  liveUrl,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const openerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();
  const activeItem = items[activeIndex];
  const stageId = `project-gallery-stage-${projectName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const setIndex = useCallback((nextIndex: number) => {
    const next = (nextIndex + items.length) % items.length;
    setDirection(next >= activeIndex ? 1 : -1);
    setActiveIndex(next);
  }, [activeIndex, items.length]);

  const move = useCallback((delta: number) => {
    setIndex(activeIndex + delta);
  }, [activeIndex, setIndex]);

  useEffect(() => {
    const next = items[(activeIndex + 1) % items.length];
    if (next) {
      const image = new window.Image();
      image.src = next.src;
    }
  }, [activeIndex, items]);

  useEffect(() => {
    if (!lightboxOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        move(-1);
      } else if (event.key === "ArrowRight") {
        move(1);
      } else if (event.key === "Tab") {
        const focusable = document.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) {
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [lightboxOpen, move]);

  const tabItems = useMemo(() => items.map((item, index) => ({ ...item, index })), [items]);
  const motionProps = reducedMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, x: direction * 8 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction * -8 },
      };

  const handleTabKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    } else if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    } else if (event.key === "Home") {
      event.preventDefault();
      setIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setIndex(items.length - 1);
    }
  };

  const openLightbox = () => {
    openerRef.current = document.activeElement as HTMLButtonElement;
    setLightboxOpen(true);
  };

  return (
    <section aria-label="Project screens" className="py-16 md:py-24">
      <Container>
        <div className="mb-8">
          <p className="text-eyebrow font-semibold uppercase tracking-[0.12em] text-brand">Screens</p>
          <h2 className="mt-3 font-body text-[clamp(1.75rem,3vw,2.5rem)] font-bold tracking-[-0.03em]">
            Inside the project
          </h2>
          <p className="mt-3 text-body text-muted">Selected screens from {projectName}.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div
          aria-orientation="vertical"
          className="project-gallery-tabs order-2 flex min-w-0 gap-3 overflow-x-auto pb-2 lg:order-1 lg:block lg:space-y-3 lg:overflow-visible lg:pb-0"
          role="tablist"
        >
          {tabItems.map((item) => {
            const isActive = item.index === activeIndex;
            return (
              <button
                aria-controls={stageId}
                aria-selected={isActive}
                className={`relative flex min-w-max shrink-0 snap-start items-center gap-2 whitespace-nowrap rounded-full border px-[14px] py-2 text-left transition-colors lg:w-full lg:min-w-0 lg:items-start lg:gap-3 lg:rounded-xl lg:p-3 lg:whitespace-normal ${
                  isActive
                    ? "border-accent bg-accent text-brand-fg lg:border-accent/40 lg:bg-card lg:text-fg"
                    : "border-line hover:border-accent/50 lg:border-transparent"
                }`}
                id={`${stageId}-tab-${item.index}`}
                key={item.src}
                onClick={() => setIndex(item.index)}
                onKeyDown={handleTabKeyDown}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                {isActive ? <span className="absolute inset-y-2 left-0 hidden w-[3px] rounded-full bg-accent lg:block" /> : null}
                <span className="flex size-auto shrink-0 items-center justify-center rounded-none bg-transparent text-small font-bold text-inherit lg:size-8 lg:rounded-full lg:bg-accent/15 lg:text-accent">
                  {String(item.index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="block text-[16px] font-bold">{item.title}</span>
                  <span className="mt-1 hidden line-clamp-2 text-small leading-relaxed text-muted lg:block">{item.text}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="order-1 min-w-0 lg:order-2">
          <div
            aria-labelledby={`${stageId}-tab-${activeIndex}`}
            className="relative w-full max-w-full overflow-hidden rounded-[24px] border border-accent/25 bg-band p-3 lg:p-7"
            id={stageId}
            onTouchEnd={(event) => {
              if (touchStart === null) return;
              const distance = event.changedTouches[0].clientX - touchStart;
              if (Math.abs(distance) > 40) move(distance > 0 ? -1 : 1);
              setTouchStart(null);
            }}
            onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
            role="tabpanel"
            tabIndex={0}
          >
            <div aria-hidden="true" className="project-gallery-dot-grid absolute inset-0" />
            {kind === "website" ? (
              <div className="relative z-10 min-w-0 w-full max-w-full overflow-hidden rounded-[14px] border border-band-fg/15 bg-band-fg shadow-xl">
                <div className="flex h-9 items-center gap-1.5 border-b border-band-fg/15 bg-band-fg px-3">
                  <span className="size-2 rounded-full bg-fg/30" />
                  <span className="size-2 rounded-full bg-fg/30" />
                  <span className="size-2 rounded-full bg-fg/30" />
                  <span className="mx-auto max-w-[55%] truncate rounded-full bg-fg/5 px-4 py-1 text-[11px] text-muted">
                    {liveUrl ? new URL(liveUrl).host : projectName}
                  </span>
                </div>
                <div className="relative min-w-0 w-full max-w-full aspect-[16/10] overflow-hidden">
                  <AnimatePresence initial={false} mode="wait">
                    <motion.div
                      className="absolute inset-0 min-w-0 w-full max-w-full"
                      key={activeItem.src}
                      transition={reducedMotion ? { duration: 0 } : transition}
                      {...motionProps}
                    >
                      <Image
                        alt={`${projectName}: ${activeItem.title}`}
                        className="object-cover object-top"
                        fill
                        sizes="(min-width:1024px) 60vw, 100vw"
                        src={activeItem.src}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            ) : (
              <div className="relative z-10 flex min-h-[360px] items-center justify-center gap-5 py-5 sm:min-h-[460px]">
                {items.map((item, index) => (
                  <button
                    aria-label={`${item.title}${index === activeIndex ? ", active" : ""}`}
                    className={`relative h-[330px] aspect-[9/19.5] shrink-0 overflow-hidden rounded-[28px] border-4 border-fg bg-bg transition-[transform,opacity,box-shadow] sm:h-[420px] ${
                      index === activeIndex ? "z-10 opacity-100 shadow-2xl" : "scale-[.88] opacity-60"
                    }`}
                    key={item.src}
                    onClick={() => (index === activeIndex ? openLightbox() : setIndex(index))}
                    type="button"
                  >
                    <Image
                      alt={`${projectName}: ${item.title}`}
                      className="object-cover object-top"
                      fill
                      sizes="(min-width:1024px) 18vw, 45vw"
                      src={item.src}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="mt-5 flex max-w-full flex-wrap items-center justify-between gap-4">
            <p className="min-w-0 flex-1 text-body">
              <strong>{activeItem.title}</strong>
              <span className="text-muted"> — {activeItem.text}</span>
            </p>
            <div className="flex shrink-0 items-center gap-2">
              <button aria-label="Previous screen" className="flex size-10 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent" onClick={() => move(-1)} type="button">
                <ArrowLeft aria-hidden="true" size={17} />
              </button>
              <button
                aria-label="Enlarge screen"
                className="project-gallery-zoom inline-flex items-center gap-1 text-small font-semibold text-fg transition-colors hover:text-accent focus-visible:text-accent"
                onClick={openLightbox}
                ref={openerRef}
                type="button"
              >
                <ZoomIn aria-hidden="true" size={15} />
                <span className="project-gallery-zoom-pointer">Click to enlarge</span>
                <span className="project-gallery-zoom-touch">Tap to enlarge</span>
              </button>
              <span className="hidden text-small text-muted sm:inline">{activeIndex + 1} / {items.length}</span>
              <button aria-label="Next screen" className="flex size-10 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent" onClick={() => move(1)} type="button">
                <ArrowRight aria-hidden="true" size={17} />
              </button>
            </div>
          </div>
        </div>
        </div>
      </Container>

      <AnimatePresence>
        {lightboxOpen ? (
          <motion.div
            animate={{ opacity: 1 }}
            aria-label={`${projectName} screens`}
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgb(6_13_16_/_0.88)] p-4 backdrop-blur-md"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setLightboxOpen(false);
            }}
            role="dialog"
            transition={reducedMotion ? { duration: 0 } : { duration: 0.18 }}
          >
            <button aria-label="Close lightbox" className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-band-fg/30 text-band-fg hover:bg-band-fg/10" onClick={() => setLightboxOpen(false)} ref={closeRef} type="button">
              <X aria-hidden="true" size={20} />
            </button>
            <div className="flex max-h-[92vh] max-w-[92vw] flex-col items-center gap-4">
              <div className={`relative ${kind === "mobile" ? "h-[76vh] aspect-[9/19.5]" : "h-auto aspect-[16/10] w-[min(92vw,1100px)]"}`}>
                <Image alt={`${projectName}: ${activeItem.title}`} className="object-contain" fill sizes="92vw" src={activeItem.src} />
              </div>
              <div className="flex w-full items-center justify-between gap-4 text-band-fg">
                <p><strong>{activeItem.title}</strong> — {activeItem.text}</p>
                <span className="shrink-0 text-small">{activeIndex + 1} / {items.length}</span>
              </div>
              <div className="flex gap-2">
                <button aria-label="Previous screen" className="flex size-10 items-center justify-center rounded-full border border-band-fg/30 hover:bg-band-fg/10" onClick={() => move(-1)} type="button"><ChevronLeft size={18} /></button>
                <button aria-label="Next screen" className="flex size-10 items-center justify-center rounded-full border border-band-fg/30 hover:bg-band-fg/10" onClick={() => move(1)} type="button"><ChevronRight size={18} /></button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

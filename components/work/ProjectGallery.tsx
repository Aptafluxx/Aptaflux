"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ZoomIn } from "lucide-react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/work/Lightbox";

type GalleryItem = {
  src: string;
  title: string;
  text: string;
  description?: string;
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
  const [zoomed, setZoomed] = useState(false);
  const [direction, setDirection] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [carouselPosition, setCarouselPosition] = useState({
    scrollLeft: 0,
    maxScroll: 0,
  });
  const carouselRef = useRef<HTMLDivElement>(null);
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
    setZoomed(true);
  };

  const updateCarouselPosition = useCallback(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const nextPosition = {
      scrollLeft: carousel.scrollLeft,
      maxScroll: Math.max(0, carousel.scrollWidth - carousel.clientWidth),
    };
    setCarouselPosition((current) =>
      Math.abs(current.scrollLeft - nextPosition.scrollLeft) < 1 &&
      Math.abs(current.maxScroll - nextPosition.maxScroll) < 1
        ? current
        : nextPosition,
    );
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (kind !== "mobile" || !carousel) return;
    const frame = window.requestAnimationFrame(updateCarouselPosition);
    const observer = new ResizeObserver(updateCarouselPosition);
    observer.observe(carousel);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [items.length, kind, updateCarouselPosition]);

  const scrollCarousel = (delta: -1 | 1) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const screen = carousel.querySelector<HTMLElement>("[data-gallery-screen]");
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;
    carousel.scrollBy({
      left: delta * ((screen?.getBoundingClientRect().width ?? 230) + gap),
      behavior: reducedMotion ? "auto" : "smooth",
    });
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

        {kind === "mobile" ? (
          <div className="rounded-3xl bg-[rgb(var(--bg-alt))] p-4 sm:p-6">
            <div
              aria-label={`${projectName} screenshots`}
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={updateCarouselPosition}
              ref={carouselRef}
              role="region"
            >
              {items.map((item, index) => {
                const hasGenericTitle = /^screen\s+\d+$/i.test(item.title);
                const captionTitle = hasGenericTitle ? undefined : item.title;
                const description = item.description ?? item.text;
                const alt = [captionTitle, description].filter(Boolean).join(". ");

                return (
                  <motion.figure
                    className="w-[230px] flex-none snap-start sm:w-[260px]"
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    key={item.src}
                    transition={{
                      duration: reducedMotion ? 0 : 0.35,
                      delay: reducedMotion ? 0 : index * 0.04,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <button
                      aria-label={
                        captionTitle
                          ? `Open ${captionTitle}, screen ${index + 1} of ${items.length}`
                          : `Open screen ${index + 1} of ${items.length}`
                      }
                      className="relative block aspect-[390/844] w-full overflow-hidden rounded-[30px] border-[3px] border-line bg-card p-1 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      data-gallery-screen
                      onClick={() => {
                        setIndex(index);
                        openLightbox();
                      }}
                      type="button"
                    >
                      <Image
                        alt={alt}
                        className="rounded-[24px] object-cover"
                        fill
                        loading={index < 2 ? "eager" : "lazy"}
                        sizes="(min-width: 640px) 260px, 230px"
                        src={item.src}
                      />
                    </button>
                    {captionTitle || description ? (
                      <figcaption className="mt-3 space-y-1 text-center">
                        {captionTitle ? (
                          <span className="block text-small font-semibold text-fg">
                            {captionTitle}
                          </span>
                        ) : null}
                        {description ? (
                          <span className="block text-small text-muted">
                            {description}
                          </span>
                        ) : null}
                      </figcaption>
                    ) : null}
                  </motion.figure>
                );
              })}
            </div>
            <div className="mt-4 flex items-center gap-3">
              {carouselPosition.maxScroll > 1 ? (
                <button
                  aria-label="Previous screen"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-card text-fg transition-colors hover:border-accent hover:text-accent disabled:opacity-40"
                  disabled={carouselPosition.scrollLeft <= 1}
                  onClick={() => scrollCarousel(-1)}
                  type="button"
                >
                  <ArrowLeft aria-hidden="true" size={17} />
                </button>
              ) : null}
              <div
                aria-label="Gallery scroll progress"
                aria-valuemax={100}
                aria-valuemin={0}
                aria-valuenow={
                  carouselPosition.maxScroll > 0
                    ? Math.round(
                        (carouselPosition.scrollLeft /
                          carouselPosition.maxScroll) *
                          100,
                      )
                    : 100
                }
                className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-line"
                role="progressbar"
              >
                <div
                  className="h-full origin-left rounded-full bg-accent transition-transform duration-150"
                  style={{
                    transform: `scaleX(${
                      carouselPosition.maxScroll > 0
                        ? Math.min(
                            1,
                            carouselPosition.scrollLeft /
                              carouselPosition.maxScroll,
                          )
                        : 1
                    })`,
                  }}
                />
              </div>
              {carouselPosition.maxScroll > 1 ? (
                <button
                  aria-label="Next screen"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-card text-fg transition-colors hover:border-accent hover:text-accent disabled:opacity-40"
                  disabled={
                    carouselPosition.scrollLeft >=
                    carouselPosition.maxScroll - 1
                  }
                  onClick={() => scrollCarousel(1)}
                  type="button"
                >
                  <ArrowRight aria-hidden="true" size={17} />
                </button>
              ) : null}
            </div>
          </div>
        ) : (
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
              </div>
              <div className="mt-5 flex max-w-full flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-4">
                <p className="min-w-0 w-full flex-none text-body lg:flex-1">
                  <strong>{activeItem.title}</strong>
                  {activeItem.text ? (
                    <span className="text-muted"> — {activeItem.text}</span>
                  ) : null}
                </p>
                <div className="flex w-full items-center justify-between gap-3 lg:w-auto lg:shrink-0 lg:justify-start lg:gap-2">
                  <button
                    aria-label="Enlarge screen"
                    className="project-gallery-zoom order-1 inline-flex items-center gap-1 text-small font-semibold text-fg transition-colors hover:text-accent focus-visible:text-accent lg:order-2"
                    onClick={openLightbox}
                    type="button"
                  >
                    <ZoomIn aria-hidden="true" size={15} />
                    <span className="project-gallery-zoom-pointer">Click to enlarge</span>
                    <span className="project-gallery-zoom-touch">Tap to enlarge</span>
                  </button>
                  <div className="order-2 flex items-center gap-2 lg:contents">
                    <button aria-label="Previous screen" className="flex size-10 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent lg:order-1" onClick={() => move(-1)} type="button">
                      <ArrowLeft aria-hidden="true" size={17} />
                    </button>
                    <span className="hidden text-small text-muted sm:inline lg:order-3">{activeIndex + 1} / {items.length}</span>
                    <button aria-label="Next screen" className="flex size-10 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent lg:order-4" onClick={() => move(1)} type="button">
                      <ArrowRight aria-hidden="true" size={17} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>

      {zoomed ? (
        <Lightbox
          items={items}
          index={activeIndex}
          projectName={projectName}
          onClose={() => setZoomed(false)}
          onIndexChange={setIndex}
        />
      ) : null}
    </section>
  );
}

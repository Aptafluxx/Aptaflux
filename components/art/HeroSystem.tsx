"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Mail, Workflow } from "lucide-react";

const floatFrames = [0, -6, 0, 6, 0];
const cardFill =
  "bg-[color-mix(in_srgb,rgb(var(--band))_72%,rgb(var(--accent)))]";
const cardShadow = "shadow-[0_12px_30px_rgb(var(--band)/0.25)]";

export function HeroSystem() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-label="Illustration of a website, a mobile app and an automated workflow connected together"
      className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] border border-accent/25 bg-band p-5 max-md:max-h-[260px]"
      role="img"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,rgb(var(--accent)/0.10),transparent_68%)]" />
        <svg
          className="absolute inset-0 z-0 h-full w-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 160 90"
        >
          <path
            d="M106 28 C107 26 108 26 109 27"
            stroke="rgb(var(--line))"
            strokeWidth="0.65"
          />
          <path
            d="M74 55 C83 61 93 68 103 72"
            stroke="rgb(var(--line))"
            strokeWidth="0.65"
          />
          <path
            d="M154 74 C155 73 156 72 157 72"
            stroke="rgb(var(--line))"
            strokeWidth="0.65"
          />
          <circle cx="106" cy="28" fill="rgb(var(--accent))" r="0.85" />
          <circle cx="109" cy="27" fill="rgb(var(--accent))" r="0.85" />
          <circle cx="74" cy="55" fill="rgb(var(--accent))" r="0.85" />
          <circle cx="103" cy="72" fill="rgb(var(--accent))" r="0.85" />
          <circle cx="154" cy="74" fill="rgb(var(--accent))" r="0.85" />
          <circle cx="157" cy="72" fill="rgb(var(--accent))" r="0.85" />
          {!reduceMotion ? (
            <motion.circle
              animate={{
                cx: [
                  106, 107, 109, 125, 140, 154, 155, 157, 130, 103, 93, 83, 74,
                  82, 94, 106,
                ],
                cy: [
                  28, 26, 27, 40, 56, 74, 73, 72, 72, 72, 66, 60, 55, 60, 66,
                  28,
                ],
              }}
              className="max-md:hidden"
              fill="rgb(var(--accent))"
              r="1.25"
              transition={{
                duration: 7,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          ) : (
            <circle cx="106" cy="28" fill="rgb(var(--accent))" r="1.25" />
          )}
        </svg>

        <motion.div
          animate={reduceMotion ? undefined : { y: floatFrames }}
          className={`absolute left-[5%] top-[8%] z-10 h-[53%] w-[61%] rounded-[18px] border border-line ${cardFill} p-3 ${cardShadow} sm:p-4`}
          transition={
            reduceMotion
              ? undefined
              : {
                  delay: -1,
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-1.5 border-b border-line pb-2">
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="size-1.5 rounded-full bg-muted/75" />
              <span className="size-1.5 rounded-full bg-muted/55" />
              <span className="ml-auto h-1.5 w-1/4 rounded-full bg-muted/55" />
            </div>
            <div className="mt-3 h-2.5 w-[58%] rounded-full bg-fg/80 sm:mt-4 sm:h-3" />
            <div className="mt-2 h-1.5 w-[78%] rounded-full bg-muted/80" />
            <div className="mt-1.5 h-1.5 w-[62%] rounded-full bg-muted/65" />
            <div className="mt-auto h-3.5 w-14 rounded-full bg-accent sm:h-4 sm:w-16" />
          </div>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: floatFrames }}
          className={`absolute right-[4%] top-[12%] z-30 h-[70%] w-[28%] rounded-[20px] border border-line ${cardFill} p-2.5 ${cardShadow} sm:p-3`}
          transition={
            reduceMotion
              ? undefined
              : {
                  delay: -3,
                  duration: 7,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        >
          <div className="flex h-full flex-col items-center">
            <div className="h-1.5 w-8 rounded-full bg-fg/65" />
            <div className="mt-4 flex w-full flex-col gap-3 sm:mt-5 sm:gap-4">
              {[0, 1, 2].map((row) => (
                <div className="flex items-center gap-1.5" key={row}>
                  <span className="size-3 shrink-0 rounded-full bg-accent/85 sm:size-3.5" />
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="h-1.5 w-full rounded-full bg-fg/70" />
                    <span className="h-1 w-2/3 rounded-full bg-muted/75" />
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-auto h-1.5 w-1/2 rounded-full bg-muted/55" />
          </div>
        </motion.div>

        <motion.div
          animate={reduceMotion ? undefined : { y: floatFrames }}
          className={`absolute bottom-[5%] right-[2%] z-20 h-[15%] w-[44%] rounded-[14px] border border-line ${cardFill} p-1 ${cardShadow} sm:p-2`}
          transition={
            reduceMotion
              ? undefined
              : {
                  delay: -2,
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        >
          <div className="relative flex h-full items-center justify-between">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full"
              fill="none"
              viewBox="0 0 100 30"
            >
              <path
                d="M21 15 H40 M60 15 H79"
                stroke="rgb(var(--line))"
                strokeWidth="1.5"
              />
            </svg>
            <div className={`z-10 flex size-5 items-center justify-center rounded-lg border border-line ${cardFill} text-accent sm:size-7`}>
              <Mail aria-hidden="true" size={14} />
            </div>
            <div className={`z-10 flex size-5 items-center justify-center rounded-lg border border-line ${cardFill} text-accent sm:size-7`}>
              <Workflow aria-hidden="true" size={14} />
            </div>
            <div className={`z-10 flex size-5 items-center justify-center rounded-lg border border-line ${cardFill} text-accent sm:size-7`}>
              <Check aria-hidden="true" size={14} strokeWidth={2.5} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

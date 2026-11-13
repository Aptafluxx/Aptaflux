"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { Rule } from "@/components/ui/Rule";
import { easing, durations, reveal } from "@/lib/motion";

type PageHeaderProps = {
  accent?: string;
  breadcrumb?: ReactNode;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  titleClassName?: string;
  title: string;
  visual?: ReactNode;
};

export function PageHeader({
  accent,
  breadcrumb,
  eyebrow,
  intro,
  titleClassName,
  title,
  visual,
}: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const accentStart = accent
    ? title.toLowerCase().indexOf(accent.toLowerCase())
    : -1;
  const accentEnd = accentStart + (accent?.length ?? 0);

  return (
    <Section className="!pb-12 !pt-28 md:!pb-16 md:!pt-36">
      <div
        className={
          visual ? "grid items-start gap-10 lg:grid-cols-12 lg:gap-12" : ""
        }
      >
        <div className={visual ? "lg:col-span-7" : ""}>
          {breadcrumb ? <div className="mb-5">{breadcrumb}</div> : null}
          {eyebrow ? (
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-brand">
              {eyebrow}
            </p>
          ) : null}
          <motion.h1
            className={`${titleClassName ?? "max-w-[18ch]"} font-body text-[clamp(2.25rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em]`}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={reveal}
            transition={{
              duration: shouldReduceMotion ? 0 : durations.medium,
              ease: easing,
            }}
          >
            {accentStart >= 0 ? (
              <>
                {title.slice(0, accentStart)}
                <em className="font-display font-medium italic text-brand">
                  {title.slice(accentStart, accentEnd)}
                </em>
                {title.slice(accentEnd)}
              </>
            ) : (
              title
            )}
          </motion.h1>
          {intro ? (
            <motion.div
              className="mt-6 max-w-[60ch] text-body leading-relaxed text-muted md:mt-8"
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              variants={reveal}
              transition={{
                duration: shouldReduceMotion ? 0 : durations.medium,
                ease: easing,
                delay: shouldReduceMotion ? 0 : 0.12,
              }}
            >
              {intro}
            </motion.div>
          ) : null}
        </div>
        {visual ? <div className="lg:col-span-5">{visual}</div> : null}
      </div>
      <Rule className="mt-10 md:mt-12" />
    </Section>
  );
}

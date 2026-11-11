"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Section } from "@/components/ui/Section";
import { easing, durations, reveal } from "@/lib/motion";

type PageHeaderProps = {
  intro?: ReactNode;
  title: string;
};

export function PageHeader({ intro, title }: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="!pb-10 !pt-14 md:!pt-28">
        <h1 className="font-display text-display-lg font-semibold">
          {title.split("\n").map((line, index) => (
            <span key={`${line}-${index}`} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                custom={index}
                initial={shouldReduceMotion ? false : "hidden"}
                animate="visible"
                variants={reveal}
                transition={{
                  duration: shouldReduceMotion ? 0 : durations.medium,
                  ease: easing,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        {intro ? (
          <motion.div
            className="mt-6 max-w-xl text-body leading-relaxed text-muted sm:ml-auto sm:mt-8"
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            variants={reveal}
            transition={{
              duration: shouldReduceMotion ? 0 : durations.medium,
              ease: easing,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
          >
            {intro}
          </motion.div>
        ) : null}
    </Section>
  );
}

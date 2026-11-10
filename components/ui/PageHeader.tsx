"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { easing, durations, reveal } from "@/lib/motion";

type PageHeaderProps = {
  intro?: ReactNode;
  title: string;
};

export function PageHeader({ intro, title }: PageHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="flex min-h-[65vh] flex-col justify-end pb-20 pt-24 sm:pb-24 sm:pt-[120px]">
      <Container>
        <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] font-semibold leading-[0.88] tracking-[-0.03em]">
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
            className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:ml-auto sm:mt-12 sm:text-lg"
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
      </Container>
    </section>
  );
}

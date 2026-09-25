"use client";

import { motion } from "framer-motion";
import { Section, Eyebrow } from "./ui";

const steps = [
  {
    n: "01",
    title: "Discovery & Architecture",
    body: "Mapping requirements and defining scalable clean architecture before a line of production code is written.",
  },
  {
    n: "02",
    title: "UI/UX Prototyping",
    body: "Visualizing the user journey and system workflows, so structural decisions get validated before they're expensive to change.",
  },
  {
    n: "03",
    title: "Agile Engineering",
    body: "Iterative technical development with rigorous milestone reviews, keeping scope and quality visible throughout the build.",
  },
  {
    n: "04",
    title: "Deployment & Handoff",
    body: "QA testing, cloud infrastructure setup, and app store deployment, delivered with documentation your team can operate.",
  },
];

export default function Process() {
  return (
    <Section id="process" className="py-24 md:py-32">
      <Eyebrow>Agency Methodology</Eyebrow>
      <h2 className="max-w-[560px] text-[32px] md:text-[38px] leading-[1.15] tracking-tightest font-semibold text-ink">
        A fixed process, applied to every engagement.
      </h2>

      <div className="mt-16 max-w-[720px]">
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex gap-6 border-t border-line py-8 first:border-none first:pt-0"
          >
            <span className="w-10 shrink-0 text-[14px] font-medium text-accent tabular-nums">
              {step.n}
            </span>
            <div>
              <h3 className="text-[18px] font-medium text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.65] text-ink-dim max-w-[520px]">
                {step.body}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

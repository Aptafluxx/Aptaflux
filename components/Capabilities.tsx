"use client";

import { Smartphone, BrainCircuit, Cloud, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { Section, Eyebrow } from "./ui";

const capabilities = [
  {
    icon: Smartphone,
    title: "Mobile Platforms",
    body: "Cross-platform engineering with Flutter and Clean Architecture, built to hold up as your codebase and team grow.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent AI",
    body: "Custom conversational agents and workflow automation via Agentic AI, integrated into the systems your team already runs on.",
  },
  {
    icon: Cloud,
    title: "Web & Cloud",
    body: "Secure, scalable backend infrastructure built on Node.js and Firebase, engineered for uptime under real production load.",
  },
  {
    icon: LayoutGrid,
    title: "UI/UX Design",
    body: "User-centric workflow mapping for complex software systems, turning multi-step processes into interfaces people don't have to think about.",
  },
];

export default function Capabilities() {
  return (
    <Section id="services" className="py-24 md:py-32">
      <Eyebrow>Core Capabilities</Eyebrow>
      <h2 className="max-w-[560px] text-[32px] md:text-[38px] leading-[1.15] tracking-tightest font-semibold text-ink">
        Four disciplines, one team, applied to how your business actually runs.
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="bg-canvas p-8 md:p-10"
          >
            <cap.icon className="text-accent" size={26} strokeWidth={1.5} />
            <h3 className="mt-6 text-[19px] font-medium text-ink">
              {cap.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.65] text-ink-dim">
              {cap.body}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

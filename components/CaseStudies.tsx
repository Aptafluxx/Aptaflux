"use client";

import { motion } from "framer-motion";
import { Section, Eyebrow } from "./ui";
import { DoctorHuntArt, DripsWaterArt, TaskFlowArt } from "./CaseStudyArt";

const studies = [
  {
    tag: "Healthcare Logistics",
    name: "Doctor Hunt",
    summary:
      "A healthcare booking platform where scheduling conflicts and patient no-shows were eating into clinic revenue.",
    detail:
      "We rebuilt the booking core around optimized database querying, so multi-clinic availability resolves in real time instead of polling. The result is a complex healthcare booking system that stays fast as the provider list grows, with architectural decisions made specifically to keep query cost flat under load.",
    Art: DoctorHuntArt,
  },
  {
    tag: "Automated Commerce",
    name: "Drips Water App",
    summary:
      "A recurring water delivery service that needed to take orders without a phone line or a dispatcher on call.",
    detail:
      "We handled Google Cloud credentials management end to end and integrated a Dialogflow AI chatbot directly into the ordering flow, so customers place and modify recurring orders through conversation instead of a form. Order volume that used to require a human now routes itself.",
    Art: DripsWaterArt,
  },
  {
    tag: "Secure Utility Platforms",
    name: "Task Flow",
    summary:
      "A multi-user utility platform where one team's data was leaking visibility into another's.",
    detail:
      "We implemented isolated per-user data boundaries, real-time synchronization across devices, and Firebase authentication hardened against the access patterns that caused the original leak. Every account now operates in its own verified space by construction, not by convention.",
    Art: TaskFlowArt,
  },
];

export default function CaseStudies() {
  return (
    <Section id="case-studies" className="py-24 md:py-32">
      <Eyebrow>Case Studies</Eyebrow>
      <h2 className="max-w-[560px] text-[32px] md:text-[38px] leading-[1.15] tracking-tightest font-semibold text-ink">
        Systems we've engineered, and the decisions behind them.
      </h2>

      <div className="mt-16 flex flex-col gap-24 md:gap-32">
        {studies.map((study, i) => {
          const reversed = i % 2 === 1;
          return (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 ${
                reversed ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-[4px] border border-line">
                <study.Art />
              </div>
              <div>
                <p className="text-[13px] font-medium text-accent">
                  {study.tag}
                </p>
                <h3 className="mt-3 text-[26px] font-semibold tracking-tightest text-ink">
                  {study.name}
                </h3>
                <p className="mt-4 text-[16px] leading-[1.6] text-ink-dim">
                  {study.summary}
                </p>
                <p className="mt-4 text-[15px] leading-[1.65] text-ink-faint">
                  {study.detail}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

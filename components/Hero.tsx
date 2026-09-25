"use client";

import { motion } from "framer-motion";
import { PrimaryButton, SecondaryButton } from "./ui";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden pt-[72px]">
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-[0.18] blur-[110px]"
        style={{ background: "radial-gradient(circle, #013b46, transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-page relative pt-24 pb-28 md:pt-32 md:pb-36"
      >
        <motion.p variants={item} className="text-[13px] text-accent font-medium mb-6">
          Software engineering for teams that need to ship
        </motion.p>

        <motion.h1
          variants={item}
          className="max-w-[820px] text-[42px] leading-[1.08] tracking-tightest font-semibold text-ink sm:text-[54px] md:text-[64px]"
        >
          Engineering scalable mobile, web, and AI solutions for modern businesses.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-[540px] text-[17px] leading-[1.6] text-ink-dim"
        >
          We build scalable cross-platform apps, web dashboards, and custom AI
          tools for businesses.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <PrimaryButton href="#contact">Request an Estimate</PrimaryButton>
          <SecondaryButton href="#case-studies">View Solutions</SecondaryButton>
        </motion.div>
      </motion.div>
    </div>
  );
}

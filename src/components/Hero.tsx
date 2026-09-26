"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto text-center">
          <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Engineering scalable mobile, web, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#013b46]">
              AI solutions
            </span>{" "}
            for modern businesses.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            We build scalable cross-platform apps, web dashboards, and custom AI tools designed to drive enterprise efficiency and growth.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#contact" className="w-full sm:w-auto bg-[#013b46] hover:bg-[#012a32] text-white px-8 py-3.5 rounded-md text-base font-medium transition-all shadow-lg shadow-[#013b46]/20 flex justify-center items-center">
              Request an Estimate <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#case-studies" className="w-full sm:w-auto border border-slate-700 hover:bg-slate-800 text-white px-8 py-3.5 rounded-md text-base font-medium transition-all flex justify-center items-center">
              View Solutions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
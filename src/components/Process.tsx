"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "../utils/animations";

export default function Process() {
  const steps = [
    { title: "Discovery & Architecture", desc: "Mapping core business requirements and defining scalable, clean technical architectures." },
    { title: "UI/UX Prototyping", desc: "Visualizing the user journey and drafting system workflows before writing a single line of code." },
    { title: "Agile Engineering", desc: "Iterative technical development punctuated with rigorous milestone reviews and code quality checks." },
    { title: "Deployment & Handoff", desc: "Comprehensive QA testing, cloud infrastructure provisioning, and seamless app store/server deployment." },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Agency Methodology</h2>
          <p className="text-slate-400 max-w-2xl text-lg">A systematic approach to delivering enterprise-grade software.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-slate-900 border border-slate-800 p-8 rounded-xl relative overflow-hidden">
              <div className="text-5xl font-extrabold text-slate-800 mb-6 absolute -top-2 -right-2 opacity-50">
                0{idx + 1}
              </div>
              <CheckCircle2 className="h-6 w-6 text-[#013b46] mb-4 relative z-10" />
              <h3 className="text-lg font-bold text-white mb-3 relative z-10">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
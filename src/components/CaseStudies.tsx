"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutTemplate } from "lucide-react";
import { fadeUp } from "../utils/animations";

export default function CaseStudies() {
  const cases = [
    {
      title: "Healthcare Logistics: Doctor Hunt",
      desc: "Architected a scalable healthcare booking system. Engineered optimized database querying and real-time availability sync to handle high-concurrency patient traffic.",
      tags: ["Flutter", "Node.js", "System Architecture"],
    },
    {
      title: "Automated Commerce: Drips Water App",
      desc: "Streamlined complex B2C order flows by integrating Google Cloud credentials management and a Dialogflow AI chatbot to automate customer support and routing.",
      tags: ["Agentic AI", "Google Cloud", "UI/UX"],
    },
    {
      title: "Secure Utility Platforms: Task Flow",
      desc: "Developed an enterprise-grade utility application featuring isolated per-user data handling, real-time state synchronization, and robust Firebase authentication.",
      tags: ["Firebase", "Web App", "Security"],
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Solutions Showcase</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Proven architectures engineered for scale and security.
          </p>
        </motion.div>

        <div className="space-y-20">
          {cases.map((study, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className={`flex flex-col gap-10 lg:items-center ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="w-full lg:w-1/2 aspect-[4/3] bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                <LayoutTemplate className="h-16 w-16 text-slate-700 relative z-10" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{study.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{study.desc}</p>
                <div className="flex flex-wrap gap-3">
                  {study.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-800 text-teal-400 text-sm font-medium rounded-full border border-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
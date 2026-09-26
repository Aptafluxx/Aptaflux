"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, BrainCircuit, Cloud, LayoutTemplate } from "lucide-react";
import { fadeUp, staggerContainer } from "../utils/animations";

export default function Capabilities() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8 text-teal-400" />,
      title: "Mobile Platforms",
      desc: "Cross-platform engineering with Flutter and Clean Architecture for native-grade performance.",
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-teal-400" />,
      title: "Intelligent AI",
      desc: "Custom conversational agents and workflow automation driven by advanced Agentic AI.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-teal-400" />,
      title: "Web & Cloud",
      desc: "Secure, scalable backend infrastructure and web platforms built on Node.js and Firebase.",
    },
    {
      icon: <LayoutTemplate className="h-8 w-8 text-teal-400" />,
      title: "UI/UX Design",
      desc: "User-centric workflow mapping and interface design tailored for complex software systems.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            We bridge the gap between complex business requirements and robust technical execution.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, idx) => (
            <motion.div key={idx} variants={fadeUp} className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-teal-900 transition-colors group">
              <div className="bg-[#013b46]/20 p-3 rounded-lg inline-block mb-6 group-hover:bg-[#013b46]/40 transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{svc.title}</h3>
              <p className="text-slate-400 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
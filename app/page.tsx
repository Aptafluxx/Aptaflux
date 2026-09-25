"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Smartphone,
  BrainCircuit,
  Cloud,
  LayoutTemplate,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

// --- COMPONENTS ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="text-2xl font-bold text-white tracking-tight"
            >
              Aptaflux
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#case-studies"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Case Studies
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Process
            </a>
            <a
              href="#contact"
              className="bg-[#013b46] hover:bg-[#012a32] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all shadow-lg shadow-[#013b46]/20"
            >
              Book Discovery Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white"
            >
              Services
            </a>
            <a
              href="#case-studies"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white"
            >
              Case Studies
            </a>
            <a
              href="#process"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white"
            >
              Process
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#013b46]"
            >
              Book Discovery Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
          >
            Engineering scalable mobile, web, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-[#013b46]">
              AI solutions
            </span>{" "}
            for modern businesses.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            We build scalable cross-platform apps, web dashboards, and custom AI
            tools designed to drive enterprise efficiency and growth.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto bg-[#013b46] hover:bg-[#012a32] text-white px-8 py-3.5 rounded-md text-base font-medium transition-all shadow-lg shadow-[#013b46]/20 flex justify-center items-center"
            >
              Request an Estimate <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#case-studies"
              className="w-full sm:w-auto border border-slate-700 hover:bg-slate-800 text-white px-8 py-3.5 rounded-md text-base font-medium transition-all flex justify-center items-center"
            >
              View Solutions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TrustBanner = () => {
  const technologies = [
    "Google Cloud",
    "Firebase",
    "Node.js",
    "Flutter",
    "Agentic AI",
  ];

  return (
    <div className="border-y border-slate-800 bg-slate-900/50 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">
          Core Infrastructure & Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {technologies.map((tech, idx) => (
            <span key={idx} className="text-xl font-bold text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Capabilities = () => {
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Core Capabilities
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            We bridge the gap between complex business requirements and robust
            technical execution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((svc, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-teal-900 transition-colors group"
            >
              <div className="bg-[#013b46]/20 p-3 rounded-lg inline-block mb-6 group-hover:bg-[#013b46]/40 transition-colors">
                {svc.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {svc.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CaseStudies = () => {
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Solutions Showcase
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Proven architectures engineered for scale and security.
          </p>
        </motion.div>

        <div className="space-y-20">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp}
              className={`flex flex-col gap-10 lg:items-center ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              {/* Image Placeholder */}
              <div className="w-full lg:w-1/2 aspect-[4/3] bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                <LayoutTemplate className="h-16 w-16 text-slate-700 relative z-10" />
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {study.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {study.desc}
                </p>
                <div className="flex flex-wrap gap-3">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-800 text-teal-400 text-sm font-medium rounded-full border border-slate-700"
                    >
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
};

const Process = () => {
  const steps = [
    {
      title: "Discovery & Architecture",
      desc: "Mapping core business requirements and defining scalable, clean technical architectures.",
    },
    {
      title: "UI/UX Prototyping",
      desc: "Visualizing the user journey and drafting system workflows before writing a single line of code.",
    },
    {
      title: "Agile Engineering",
      desc: "Iterative technical development punctuated with rigorous milestone reviews and code quality checks.",
    },
    {
      title: "Deployment & Handoff",
      desc: "Comprehensive QA testing, cloud infrastructure provisioning, and seamless app store/server deployment.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agency Methodology
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            A systematic approach to delivering enterprise-grade software.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-slate-900 border border-slate-800 p-8 rounded-xl relative overflow-hidden"
            >
              <div className="text-5xl font-extrabold text-slate-800 mb-6 absolute -top-2 -right-2 opacity-50">
                0{idx + 1}
              </div>
              <CheckCircle2 className="h-6 w-6 text-[#013b46] mb-4 relative z-10" />
              <h3 className="text-lg font-bold text-white mb-3 relative z-10">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed relative z-10">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start a Project
          </h2>
          <p className="text-slate-400 text-lg">
            Tell us about your technical requirements and business goals.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-slate-950 p-8 md:p-10 rounded-2xl border border-slate-800 shadow-2xl"
        >
          {/* Replace "YOUR_ACCESS_KEY" with an actual Web3Forms access key to enable zero-backend emails */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <input
              type="hidden"
              name="access_key"
              value="fa9de5d7-72c7-450c-8fc7-17ed7b609d8d"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#013b46] focus:border-transparent transition-all"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#013b46] focus:border-transparent transition-all"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                name="company"
                id="company"
                className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#013b46] focus:border-transparent transition-all"
                placeholder="Acme Corp"
              />
            </div>

            <div>
              <label
                htmlFor="scope"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Project Scope
              </label>
              <select
                name="scope"
                id="scope"
                required
                defaultValue=""
                className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#013b46] focus:border-transparent transition-all appearance-none"
              >
                <option value="" disabled>
                  Select a scope...
                </option>
                <option value="Mobile App">Mobile App</option>
                <option value="Web Platform">Web Platform</option>
                <option value="AI Integration">AI Integration</option>
                <option value="Full Stack">Full Stack</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="details"
                className="block text-sm font-medium text-slate-300 mb-2"
              >
                Project Details
              </label>
              <textarea
                name="details"
                id="details"
                rows={4}
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-md px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#013b46] focus:border-transparent transition-all"
                placeholder="Briefly describe your goals, timeline, and current infrastructure..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#013b46] hover:bg-[#012a32] text-white font-bold py-4 px-8 rounded-md transition-all shadow-lg shadow-[#013b46]/20 flex justify-center items-center"
            >
              Send to Aptaflux
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-tight">
          Aptaflux
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium">
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:aptaflux@gmail.com"
            className="text-slate-400 hover:text-white transition-colors"
          >
            aptaflux@gmail.com
          </a>
        </div>

        <div className="text-slate-600 text-sm">
          &copy; {currentYear} Aptaflux. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// --- MAIN PAGE LAYOUT ---

export default function AptafluxLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-[#013b46] selection:text-white font-sans">
      <Navbar />
      <Hero />
      <TrustBanner />
      <Capabilities />
      <CaseStudies />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}

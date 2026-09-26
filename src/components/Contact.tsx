"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

export default function Contact() {
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
}

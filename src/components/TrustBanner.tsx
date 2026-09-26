import React from "react";

export default function TrustBanner() {
  const technologies = ["Google Cloud", "Firebase", "Node.js", "Flutter", "Agentic AI"];

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
}
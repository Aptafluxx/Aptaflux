import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-bold text-white tracking-tight">Aptaflux</div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm font-medium">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
          <a href="mailto:aptaflux@gmail.com" className="text-slate-400 hover:text-white transition-colors">aptaflux@gmail.com</a>
        </div>

        <div className="text-slate-600 text-sm">
          &copy; {currentYear} Aptaflux. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
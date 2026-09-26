"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white tracking-tight">
              Aptaflux
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Services
            </a>
            <a href="#case-studies" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#process" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Process
            </a>
            <a href="#contact" className="bg-[#013b46] hover:bg-[#012a32] text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all shadow-lg shadow-[#013b46]/20">
              Book Discovery Call
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white">
              Services
            </a>
            <a href="#case-studies" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white">
              Case Studies
            </a>
            <a href="#process" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white">
              Process
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-[#013b46]">
              Book Discovery Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
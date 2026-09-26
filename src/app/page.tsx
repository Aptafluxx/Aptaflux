// app/page.tsx
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import TrustBanner from "@/src/components/TrustBanner";
import Capabilities from "@/src/components/Capabilities";
import CaseStudies from "@/src/components/CaseStudies";
import Process from "@/src/components/Process";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

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
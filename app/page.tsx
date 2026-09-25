import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import InfraBanner from "@/components/InfraBanner";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <InfraBanner />
      <Capabilities />
      <CaseStudies />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  );
}

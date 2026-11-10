import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { Testimonial } from "@/components/sections/Testimonial";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: homeContent.metadataTitle,
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBar />
      <FeaturedWork />
      <ServicesTeaser />
      <Testimonial />
      <CtaBand />
    </>
  );
}

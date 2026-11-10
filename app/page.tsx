import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Hero } from "@/components/sections/Hero";
import { ProofBar } from "@/components/sections/ProofBar";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { Testimonial } from "@/components/sections/Testimonial";
import { homeContent } from "@/content/home";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  absoluteTitle: true,
  title: site.brand,
  description: homeContent.metadataDescription,
  path: "/",
});

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://aptaflux.com",
    email: site.email,
    sameAs: site.socials.map(({ href }) => href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <ProofBar />
      <FeaturedWork />
      <ServicesTeaser />
      <Testimonial />
      <CtaBand />
    </>
  );
}

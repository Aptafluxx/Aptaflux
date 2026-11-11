import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Hero } from "@/components/sections/Hero";
import { HomeSections } from "@/components/sections/HomeSections";
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
    sameAs: site.socials
      .filter(({ href }) => href.length > 0)
      .map(({ href }) => href),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeContent.faq.items.map(({ question, answer }) => ({
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <HomeSections />
      <CtaBand />
    </>
  );
}

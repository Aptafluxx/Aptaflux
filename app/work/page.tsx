import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { WorkGrid } from "@/components/work/WorkGrid";
import { homeContent } from "@/content/home";
import { workPageContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: workPageContent.metadataTitle,
  description: workPageContent.metadataDescription,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        accent="work"
        eyebrow={homeContent.work.eyebrow}
        intro={workPageContent.introduction}
        title="Our work"
      />
      <Section aria-label={workPageContent.ariaLabels.projects} tone="surface">
        <WorkGrid />
        <p className="mt-10 border-t border-line pt-6 text-body leading-relaxed text-muted">
          {workPageContent.projectLabels.portfolioNote}
        </p>
      </Section>
      <CtaBand {...workPageContent.cta} />
    </>
  );
}

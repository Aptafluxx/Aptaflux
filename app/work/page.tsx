import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WorkGrid } from "@/components/work/WorkGrid";
import { site } from "@/content/site";
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
      <section className="py-16 text-center md:py-24">
        <Container>
          <span className="inline-flex rounded-full border border-line px-3 py-1 text-small font-semibold text-brand">
            {workPageContent.pageHeading.badge}
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-body text-display-xl font-extrabold tracking-[-0.04em]">
            {workPageContent.pageHeading.title}
            <br />
            <span className="text-brand">{workPageContent.pageHeading.accent}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-body leading-relaxed text-muted">
            {workPageContent.introduction}
          </p>
        </Container>
      </section>
      <Section aria-label={workPageContent.ariaLabels.projects} tone="alt">
        <WorkGrid />
      </Section>
      <CtaBand
        {...workPageContent.cta}
        steps={site.contact.whatHappensNext.steps}
        stepsHeading={site.contact.whatHappensNext.heading}
      />
    </>
  );
}

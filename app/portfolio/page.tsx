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
  path: "/portfolio",
});

export default function WorkPage() {
  return (
    <>
      <section className="pb-16 pt-[calc(72px+40px)] text-center md:pb-24 md:pt-[calc(var(--navbar-bottom,72px)+48px)]">
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
      <div className="home-page-panels">
        <CtaBand
          eyebrow={workPageContent.closing.eyebrow}
          title={workPageContent.closing.title}
          text={workPageContent.closing.text}
          buttonLabel={workPageContent.closing.primaryLabel}
          href="/contact"
          secondaryButtonLabel={workPageContent.closing.secondaryLabel}
          secondaryHref={workPageContent.closing.secondaryHref}
          email={site.email}
          replyNote={workPageContent.closing.replyNote}
          steps={site.contact.whatHappensNext.steps}
          stepsHeading={site.contact.whatHappensNext.heading}
        />
      </div>
    </>
  );
}

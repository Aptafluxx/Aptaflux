import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { CenteredPageHeader } from "@/components/ui/CenteredPageHeader";
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
      <CenteredPageHeader
        badge={workPageContent.pageHeading.badge}
        titleLineOne={workPageContent.pageHeading.title}
        titleLineTwo={workPageContent.pageHeading.accent}
        introduction={workPageContent.introduction}
      />
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

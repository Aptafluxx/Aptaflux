import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProjectRow } from "@/components/work/ProjectRow";
import { PageHeader } from "@/components/ui/PageHeader";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { work, workPageContent } from "@/content/work";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: workPageContent.metadataTitle,
  description: workPageContent.metadataDescription,
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Work" intro={workPageContent.introduction} />
      <Section aria-label={workPageContent.ariaLabels.projects} topRule>
        {work.map((project) => (
          <div key={project.slug}>
            <ProjectRow project={project} />
            <Rule />
          </div>
        ))}
      </Section>
      <CtaBand />
    </>
  );
}

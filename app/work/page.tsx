import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProjectRow } from "@/components/work/ProjectRow";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Rule } from "@/components/ui/Rule";
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
      <section aria-label={workPageContent.ariaLabels.projects} className="pb-8">
        <Container>
          <Rule />
        </Container>
        {work.map((project) => (
          <div key={project.slug}>
            <ProjectRow project={project} />
            <Container>
              <Rule />
            </Container>
          </div>
        ))}
      </section>
      <CtaBand />
    </>
  );
}

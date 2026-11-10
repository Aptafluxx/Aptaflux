import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { ProjectRow } from "@/components/work/ProjectRow";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Rule } from "@/components/ui/Rule";
import { work, workPageContent } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
};

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

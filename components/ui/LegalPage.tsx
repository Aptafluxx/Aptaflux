import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: readonly {
    title: string;
    paragraphs: readonly string[];
  }[];
};

export function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <>
      <PageHeader
        eyebrow={eyebrow}
        intro={description}
        title={title}
      />
      <Section tone="alt">
        <article className="mx-auto max-w-[720px]">
          <p className="mb-8 text-small text-muted">{lastUpdated}</p>
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-body text-h3 font-bold tracking-[-0.02em]">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      className="text-body leading-relaxed text-muted"
                      key={paragraph}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </Section>
    </>
  );
}

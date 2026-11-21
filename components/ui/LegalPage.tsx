import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: readonly {
    title: string;
    paragraphs: readonly (
      | string
      | {
          before: string;
          linkLabel: string;
          href: string;
          after?: string;
        }
    )[];
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
        showRule={false}
        title={title}
      />
      <Section tone="alt">
        <article className="max-w-[720px]">
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
                      key={
                        typeof paragraph === "string"
                          ? paragraph
                          : `${section.title}-${paragraph.linkLabel}`
                      }
                    >
                      {typeof paragraph === "string" ? (
                        paragraph
                      ) : (
                        <>
                          {paragraph.before}
                          <a
                            className="font-medium text-brand underline decoration-brand/40 underline-offset-4 hover:decoration-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                            href={paragraph.href}
                          >
                            {paragraph.linkLabel}
                          </a>
                          {paragraph.after}
                        </>
                      )}
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

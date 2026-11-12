import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: aboutContent.metadataTitle,
  description: aboutContent.metadataDescription,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        accent="ahead"
        eyebrow={aboutContent.eyebrow}
        intro={aboutContent.metadataDescription}
        title={aboutContent.heading}
        titleClassName="max-w-[22ch]"
      />

      <Section aria-label={aboutContent.ariaLabels.story} tone="surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
              {aboutContent.story.title}
            </h2>
            <div className="mt-6 space-y-4">
              {aboutContent.story.paragraphs.map((paragraph) => (
                <p
                  className="text-body leading-relaxed text-muted"
                  key={paragraph}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">
              {aboutContent.beliefs.title}
            </h2>
            <div className="mt-6">
              {aboutContent.beliefs.principles.map((principle, index) => (
                <Reveal delay={index * 0.06} key={principle.title}>
                  <div className="grid gap-3 border-t border-line py-5 sm:grid-cols-[3rem_1fr] sm:gap-5">
                    <p className="font-body text-small font-bold text-ember">
                      0{index + 1}
                    </p>
                    <div>
                      <h3 className="font-body text-h3 font-bold tracking-[-0.02em]">
                        {principle.title}
                      </h3>
                      <p className="mt-2 text-body leading-relaxed text-muted">
                        {principle.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        aria-label={aboutContent.ariaLabels.howWeWork}
        title={aboutContent.ariaLabels.howWeWork}
        tone="navy"
      >
        <div>
          {aboutContent.howWeWork.principles.map((principle, index) => (
            <Reveal delay={index * 0.06} key={principle.title}>
              <div className="grid gap-3 border-t border-line py-5 sm:grid-cols-[4rem_1fr_1.2fr] sm:items-start sm:gap-6">
                <p className="font-body text-small font-bold text-ember">
                  0{index + 1}
                </p>
                <h3 className="font-body text-h3 font-bold tracking-[-0.02em]">
                  {principle.title}
                </h3>
                <p className="text-body leading-relaxed text-muted">
                  {principle.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <CtaBand {...aboutContent.cta} />
    </>
  );
}

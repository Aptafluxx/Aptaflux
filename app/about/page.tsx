import Image from "next/image";
import { Portrait } from "@/components/art/Portrait";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHeader } from "@/components/ui/PageHeader";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: aboutContent.metadataTitle,
  description: aboutContent.metadataDescription,
  path: "/about",
});

export default function AboutPage() {
  const { founder } = aboutContent;

  return (
    <>
      <PageHeader title="About" />
      <Section>
          <p className="max-w-[22ch] font-display text-display-lg font-medium">
            {aboutContent.manifesto}
          </p>
      </Section>

      <Section
          aria-label={aboutContent.ariaLabels.values}
          topRule
        >
          {aboutContent.values.map((value) => (
            <article
              className="grid grid-cols-1 gap-3 py-5 sm:grid-cols-2 sm:gap-8"
              key={value.name}
            >
              <h2 className="font-display text-h3 font-medium">
                {value.name}
              </h2>
              <p className="max-w-[55ch] text-body leading-relaxed text-muted">
                {value.description}
              </p>
              <div className="col-span-full pt-4">
                <Rule />
              </div>
            </article>
          ))}
      </Section>

      <Section
        aria-label={aboutContent.ariaLabels.founder}
      >
        <div className="grid grid-cols-1 gap-8 min-[820px]:grid-cols-12 min-[820px]:gap-0">
          <div className="aspect-[4/5] overflow-hidden rounded-[2px] bg-surface min-[820px]:col-span-4">
            {founder.portraitImage ? (
              <Image
                alt={founder.portraitAlt}
                className="h-full w-full object-cover"
                height={1000}
                src={founder.portraitImage}
                width={800}
              />
            ) : (
              <Portrait />
            )}
          </div>
          <div className="min-[820px]:col-start-6 min-[820px]:col-span-6 min-[820px]:pt-8">
            <p className="text-body leading-relaxed">{founder.note}</p>
            <p className="mt-8 font-display text-h3 leading-tight">
              {founder.name}
            </p>
            <p className="mt-1 text-small text-muted">{founder.role}</p>
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  );
}

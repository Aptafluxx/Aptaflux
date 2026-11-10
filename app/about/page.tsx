import Image from "next/image";
import { Portrait } from "@/components/art/Portrait";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Rule } from "@/components/ui/Rule";
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
      <Container>
        <section className="py-8 sm:py-12">
          <p className="max-w-[22ch] font-display text-[clamp(32px,4.8vw,72px)] font-medium leading-[1.05] tracking-[-0.03em]">
            {aboutContent.manifesto}
          </p>
        </section>

        <section
          aria-label={aboutContent.ariaLabels.values}
          className="py-8 sm:py-12"
        >
          {aboutContent.values.map((value) => (
            <article
              className="grid grid-cols-1 gap-3 py-6 sm:grid-cols-2 sm:gap-8"
              key={value.name}
            >
              <h2 className="font-display text-[28px] font-medium leading-tight">
                {value.name}
              </h2>
              <p className="max-w-[55ch] text-[17px] leading-relaxed text-muted">
                {value.description}
              </p>
              <div className="col-span-full pt-4">
                <Rule />
              </div>
            </article>
          ))}
        </section>

        <section
          aria-label={aboutContent.ariaLabels.founder}
          className="grid grid-cols-1 gap-8 py-12 sm:py-16 min-[820px]:grid-cols-12 min-[820px]:gap-0"
        >
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
            <p className="text-[19px] leading-relaxed">{founder.note}</p>
            <p className="mt-8 font-display text-[24px] leading-tight">
              {founder.name}
            </p>
            <p className="mt-1 text-[15px] text-muted">{founder.role}</p>
          </div>
        </section>
      </Container>
      <CtaBand />
    </>
  );
}

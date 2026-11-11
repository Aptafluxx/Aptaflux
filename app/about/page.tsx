import Image from "next/image";
import {
  Eye,
  Link2,
  PenTool,
  Target,
} from "lucide-react";
import { HeroComposition } from "@/components/art/HeroComposition";
import { Portrait } from "@/components/art/Portrait";
import { CtaBand } from "@/components/sections/CtaBand";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: aboutContent.metadataTitle,
  description: aboutContent.metadataDescription,
  path: "/about",
});

const valueIcons = [Target, PenTool, Link2, Eye] as const;
const valuePoints = homeContent.why.points.slice(0, 4);

export default function AboutPage() {
  const { founder } = aboutContent;

  return (
    <>
      {/* TODO(copy): Replace this composed heading with approved copy. */}
      <PageHeader
        accent="ahead"
        eyebrow={homeContent.why.eyebrow}
        intro={aboutContent.metadataDescription}
        title="Built to move your business ahead"
      />

      <Section
        aria-label="Our story and mission"
        title="Our story and mission"
        tone="surface"
      >
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="max-w-[58ch] text-body leading-relaxed text-muted">
              {aboutContent.manifesto}
            </p>
          </div>
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[6/5] overflow-hidden rounded-lg bg-bg p-4 sm:p-8">
              <div aria-hidden="true" className="dot-grid absolute inset-0" />
              <div className="relative h-full w-full">
                <HeroComposition />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section
        aria-label="Why Aptaflux"
        eyebrow={homeContent.why.eyebrow}
        title={homeContent.why.title}
        tone="cream"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {valuePoints.map((point, index) => {
            const Icon = valueIcons[index];
            return (
              <Reveal className="h-full" delay={index * 0.06} key={point.name}>
                <Card className="h-full p-5 sm:p-6">
                  <IconBadge icon={Icon} />
                  <p className="mt-4 text-body leading-relaxed">
                    <strong className="font-bold">{point.name}:</strong>{" "}
                    <span className="text-muted">{point.text}</span>
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        aria-label="How we work"
        title="How we work"
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

      <Section
        aria-label="The people behind Aptaflux"
        title="The people behind Aptaflux"
        tone="surface"
      >
        <Card className="grid gap-6 p-5 sm:p-8 md:grid-cols-12 md:items-center md:gap-10">
          {founder.portraitImage || founder.portraitAlt ? (
            <div className="aspect-[4/5] overflow-hidden rounded-md bg-bg md:col-span-4">
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
          ) : null}
          <div className="md:col-span-7 md:col-start-6">
            {founder.note ? (
              <p className="max-w-[58ch] text-body leading-relaxed text-muted">
                {founder.note}
              </p>
            ) : null}
            {founder.name ? (
              <p className="mt-8 font-body text-h3 font-bold">
                {founder.name}
              </p>
            ) : null}
            {founder.role ? (
              <p className="mt-1 text-small text-muted">{founder.role}</p>
            ) : null}
          </div>
        </Card>
      </Section>
      <CtaBand />
    </>
  );
}

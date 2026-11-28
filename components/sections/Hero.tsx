import { Button } from "@/components/ui/Button";
import { DotGrid } from "@/components/ui/DotGrid";
import { HeroSystem } from "@/components/art/HeroSystem";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { Globe, PenTool, Server, Smartphone } from "lucide-react";

const capabilityIcons = [Globe, Smartphone, PenTool, Server] as const;

export function Hero() {
  const { hero } = homeContent;
  const titleParts = hero.title.split(/(digital opportunities\.)/i);

  return (
    <Section className="relative overflow-hidden !pt-28 md:!pt-32" tone="base">
      <DotGrid className="dot-grid-hero" />
      <Reveal className="relative z-10 pt-2.5">
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-6">
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-wide text-brand">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-[15ch] font-body text-display-xl font-extrabold tracking-[-0.03em] lg:max-w-none lg:text-[3rem]">
              {titleParts.map((part, index) =>
                /digital opportunities\./i.test(part) ? (
                  <span className="block not-italic tracking-normal text-brand lg:whitespace-nowrap" key={index}>
                    {part}
                  </span>
                ) : (
                  <span key={index}>{part}</span>
                ),
              )}
            </h1>
            <p className="mt-6 max-w-[55ch] text-body leading-relaxed text-muted">
              {hero.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">{hero.primaryAction}</Button>
              <Button href="/services" variant="ghost">
                {hero.secondaryAction}
              </Button>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2 lg:flex-nowrap">
              {hero.capabilities.map((capability, index) => {
                const Icon = capabilityIcons[index];

                return (
                  <li
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-card/70 px-3 py-2 text-small text-muted lg:px-2.5 lg:text-[14px]"
                    key={capability}
                  >
                    <Icon aria-hidden="true" className="text-brand" size={16} />
                    {capability}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative min-w-0 md:col-span-6">
            <HeroSystem />
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

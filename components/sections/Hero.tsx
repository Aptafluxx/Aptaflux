import { Button } from "@/components/ui/Button";
import { HeroBackdrop } from "@/components/art/HeroBackdrop";
import { LazyMarquee } from "@/components/ui/LazyMarquee";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { ArrowRight, Globe, PenTool, Server, Smartphone } from "lucide-react";

const capabilityIcons = [Globe, Smartphone, PenTool, Server] as const;

export function Hero() {
  const { hero } = homeContent;
  const titleParts = hero.title.split(/(digital opportunities\.)/i);

  return (
    <Section className="relative overflow-hidden !pt-24 md:!pt-28" tone="base">
      <HeroBackdrop />
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center pt-2.5 text-center">
        <Reveal delay={0}>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card/70 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-brand">
            <span aria-hidden="true" className="hero-eyebrow-dot size-1.5 rounded-full bg-accent" />
            {hero.eyebrow}
          </p>
        </Reveal>
        <Reveal className="mt-4 w-full" delay={0.06}>
          <h1 className="mx-auto w-full font-body text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
            {titleParts.map((part, index) =>
              /digital opportunities\./i.test(part) ? (
                <span className="hero-accent-text block not-italic text-brand lg:whitespace-nowrap" key={index}>
                  {part}
                </span>
              ) : (
                <span key={index}>{part}</span>
              ),
            )}
          </h1>
        </Reveal>
        <Reveal className="mt-5 w-full" delay={0.12}>
          <p className="mx-auto max-w-2xl text-balance text-body leading-relaxed text-muted">
            {hero.intro}
          </p>
        </Reveal>
        <Reveal className="mt-7" delay={0.18}>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="hero-primary-cta group !rounded-full gap-3 pr-2.5" href="/contact">
              {hero.primaryAction}
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-fg/15 text-brand-fg transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight aria-hidden="true" size={16} />
              </span>
            </Button>
            <Button className="!rounded-full" href="/services" variant="ghost">
              {hero.secondaryAction}
            </Button>
          </div>
        </Reveal>
        <Reveal className="mt-7 w-full" delay={0.24}>
          <ul className="flex flex-wrap justify-center gap-2">
            {hero.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index];

              return (
                <li
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-card/70 px-3 py-2 text-small text-muted"
                  key={capability}
                >
                  <Icon aria-hidden="true" className="text-brand" size={16} />
                  {capability}
                </li>
              );
            })}
          </ul>
        </Reveal>
        <div className="mt-9 w-full max-w-4xl rounded-3xl border border-line bg-card/60 px-5 py-4 backdrop-blur-md">
          <p className="mb-3 text-small text-muted">Technologies we work with</p>
          <div className="tech-marquee-viewport hero-tech-marquee opacity-65 [&_.tech-marquee-reverse]:hidden">
            <LazyMarquee />
          </div>
        </div>
      </div>
    </Section>
  );
}

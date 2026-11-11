import { HeroComposition } from "@/components/art/HeroComposition";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Hero() {
  const { hero } = homeContent;

  return (
    <Section className="py-18 lg:py-24" tone="navy">
      <Reveal>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="mb-5 text-eyebrow font-semibold uppercase tracking-wide text-ember">
              {hero.eyebrow}
            </p>
            <h1 className="max-w-[14ch] font-display text-display-xl">
              {hero.title}
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
            <ul className="mt-8 flex flex-wrap items-center divide-x divide-line">
              {hero.capabilities.map((capability, index) => (
                <li
                  className={`${index === 0 ? "pl-0" : "pl-3"} pr-3 py-1 text-small text-muted`}
                  key={capability}
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-sm bg-surface p-3 sm:p-5 md:col-span-5">
            <div className="aspect-[19/16]">
              <HeroComposition />
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

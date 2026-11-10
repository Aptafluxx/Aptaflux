import { Reveal } from "@/components/ui/Reveal";

type HeroHeadlineProps = {
  lines: readonly string[];
};

export function HeroHeadline({ lines }: HeroHeadlineProps) {
  return (
    <h1 className="font-display text-[clamp(2.125rem,8vw,12rem)] font-semibold leading-[0.88] tracking-[-0.03em] sm:text-[clamp(2.5rem,9vw,12rem)] min-[1024px]:text-[clamp(3.5rem,12vw,12rem)]">
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block overflow-hidden pb-[0.08em]">
          <Reveal className="block" delay={index * 0.12}>
            {line}
          </Reveal>
        </span>
      ))}
    </h1>
  );
}

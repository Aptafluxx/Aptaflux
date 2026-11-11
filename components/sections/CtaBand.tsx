import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function CtaBand() {
  const { cta } = homeContent;

  return (
    <Section
      eyebrow={cta.eyebrow}
      intro={cta.intro}
      title={cta.title}
      tone="ember"
    >
      <p className="font-display text-h3 font-semibold">{cta.invitation}</p>
      <p className="mt-3 max-w-[48ch] text-body">{cta.detail}</p>
      <Button className="mt-6" href="/contact" tone="ember">
        {cta.action}
      </Button>
      <p className="mt-4 text-small">{cta.note}</p>
    </Section>
  );
}

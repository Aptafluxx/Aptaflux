import { Button } from "@/components/ui/Button";
import { CtaShapes } from "@/components/art/CtaShapes";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function CtaBand() {
  const { cta } = homeContent;

  return (
    <Section
      className="relative isolate overflow-hidden"
      containerClassName="relative z-10"
      eyebrow={cta.eyebrow}
      intro={cta.intro}
      title={cta.title}
      tone="ember"
    >
      <div className="grid items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="font-body text-h3 font-bold tracking-[-0.02em]">{cta.invitation}</p>
          <p className="mt-3 max-w-[48ch] text-body text-[#142130]">{cta.detail}</p>
          <Button className="mt-6" href="/contact" tone="ember">
            {cta.action}
          </Button>
          <p className="mt-4 text-small text-[#142130]">{cta.note}</p>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/2 hidden h-[340px] w-[440px] -translate-y-1/2 md:block">
        <CtaShapes />
      </div>
    </Section>
  );
}

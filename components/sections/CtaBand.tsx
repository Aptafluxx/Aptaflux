import { Button } from "@/components/ui/Button";
import { CtaShapes } from "@/components/art/CtaShapes";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

type CtaBandProps = {
  eyebrow?: string;
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
};

export function CtaBand({
  eyebrow,
  title,
  text,
  buttonLabel,
  href,
}: CtaBandProps = {}) {
  const { cta } = homeContent;
  const isCustom = Boolean(eyebrow || title || text || buttonLabel || href);

  return (
    <Section
      className="cta-band relative isolate overflow-hidden"
      containerClassName="relative z-10"
      eyebrow={
        <span className="cta-band-eyebrow">{eyebrow ?? cta.eyebrow}</span>
      }
      intro={isCustom ? text : cta.intro}
      title={isCustom ? title : cta.title}
      tone="brand"
    >
      <div className="grid items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          {isCustom ? (
            <Button
              className="mt-2 !border-band-button-bg !bg-band-button-bg !text-band-button-fg hover:!-translate-y-px hover:!border-band-button-bg hover:!bg-band-button-bg hover:!text-band-button-fg"
              href={href ?? "/contact"}
              tone="brand"
            >
              {buttonLabel ?? cta.action}
            </Button>
          ) : (
            <>
              <p className="font-body text-h3 font-bold tracking-[-0.02em]">
                {cta.invitation}
              </p>
              <p className="cta-band-small-text mt-3 max-w-[48ch] text-body text-band-fg">
                {cta.detail}
              </p>
              <Button
                className="mt-6 !border-band-button-bg !bg-band-button-bg !text-band-button-fg hover:!-translate-y-px hover:!border-band-button-bg hover:!bg-band-button-bg hover:!text-band-button-fg"
                href="/contact"
                tone="brand"
              >
                {cta.action}
              </Button>
              <p className="cta-band-small-text mt-4 text-small text-band-fg">
                {cta.note}
              </p>
            </>
          )}
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/2 hidden h-[340px] w-[440px] -translate-y-1/2 md:block">
        <CtaShapes />
      </div>
    </Section>
  );
}

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
  steps?: readonly { title: string; text: string }[];
  stepsHeading?: string;
};

export function CtaBand({
  eyebrow,
  title,
  text,
  buttonLabel,
  href,
  steps,
  stepsHeading,
}: CtaBandProps = {}) {
  const { cta } = homeContent;
  const isCustom = Boolean(eyebrow || title || text || buttonLabel || href);

  return (
    <Section
      className="cta-band relative isolate overflow-hidden"
      containerClassName="relative z-10"
      eyebrow={steps ? undefined : <span className="cta-band-eyebrow">{eyebrow ?? cta.eyebrow}</span>}
      intro={steps ? undefined : isCustom ? text : cta.intro}
      title={steps ? undefined : isCustom ? title : cta.title}
      tone="brand"
    >
      <div className={`grid gap-8 ${steps ? "items-center md:grid-cols-12" : "items-end"}`}>
        <div className="md:col-span-7">
          {steps ? (
            <>
              <span className="cta-band-eyebrow">{eyebrow ?? cta.eyebrow}</span>
              <h2 className="mt-3 font-body text-h2 font-bold tracking-[-0.02em]">{title ?? cta.title}</h2>
              <p className="mt-4 max-w-[48ch] text-body text-band-fg">{text ?? cta.intro}</p>
              <Button
                className="mt-6 !border-band-button-bg !bg-band-button-bg !text-band-button-fg hover:!-translate-y-px hover:!border-band-button-bg hover:!bg-band-button-bg hover:!text-band-button-fg"
                href={href ?? "/contact"}
                tone="brand"
              >
                {buttonLabel ?? cta.action}
              </Button>
            </>
          ) : isCustom ? (
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
        {steps ? (
          <div className="md:col-span-5">
            <h3 className="font-body text-h3 font-bold">{stepsHeading}</h3>
            <ol className="mt-4 space-y-3">
              {steps.map((step, index) => (
                <li className="flex gap-4 border-t border-band-fg/30 pt-4" key={step.title}>
                  <span className="font-body text-small font-bold text-band-fg">0{index + 1}</span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-body leading-relaxed text-band-fg">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-1/2 hidden h-[340px] w-[440px] -translate-y-1/2 md:block">
        <CtaShapes />
      </div>
    </Section>
  );
}

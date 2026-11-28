import { ArrowRight, Mail } from "lucide-react";
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
  secondaryButtonLabel?: string;
  secondaryHref?: string;
  email?: string;
  replyNote?: string;
};

export function CtaBand({
  eyebrow,
  title,
  text,
  buttonLabel,
  href,
  steps,
  stepsHeading,
  secondaryButtonLabel,
  secondaryHref,
  email,
  replyNote,
}: CtaBandProps = {}) {
  const { cta } = homeContent;
  const isCustom = Boolean(eyebrow || title || text || buttonLabel || href);

  return (
    <Section
      className="cta-band relative isolate overflow-hidden"
      containerClassName="relative z-10"
      eyebrow={
        steps ? undefined : (
          <span className="text-eyebrow font-semibold uppercase text-band-fg">
            {eyebrow ?? cta.eyebrow}
          </span>
        )
      }
      intro={steps ? undefined : isCustom ? text : cta.intro}
      title={steps ? undefined : isCustom ? title : cta.title}
      tone="brand"
    >
      <div className={`grid gap-8 ${steps ? "items-center md:grid-cols-12" : "items-end"}`}>
        <div className="md:col-span-7">
          {steps ? (
            <>
              <span className="text-eyebrow font-semibold uppercase text-band-fg">
                {eyebrow ?? cta.eyebrow}
              </span>
              <h2 className="mt-3 font-body text-h2 font-bold tracking-[-0.02em]">{title ?? cta.title}</h2>
              <p className="mt-4 max-w-[48ch] text-body text-band-fg">{text ?? cta.intro}</p>
              <Button
                className="mt-6 !border-band-button-bg !bg-band-button-bg !text-band-button-fg hover:!-translate-y-px hover:!border-band-button-bg hover:!bg-band-button-bg hover:!text-band-button-fg"
                href={href ?? "/contact"}
                tone="brand"
              >
                {buttonLabel ?? cta.action} <ArrowRight aria-hidden="true" size={17} />
              </Button>
              <Button
                className="ml-2 !border-band-fg/40 !bg-transparent !text-band-fg hover:!border-band-fg hover:!bg-band-fg/10"
                href={secondaryHref ?? "/services"}
                variant="ghost"
              >
                {secondaryButtonLabel} <ArrowRight aria-hidden="true" size={17} />
              </Button>
              {email ? (
                <div className="mt-6 flex flex-wrap items-center gap-3 text-small text-band-fg">
                  <a className="inline-flex items-center gap-2 font-semibold" href={`mailto:${email}`}>
                    <Mail aria-hidden="true" size={17} />
                    {email}
                  </a>
                  <span>{replyNote}</span>
                </div>
              ) : null}
            </>
          ) : isCustom ? (
            <>
              <Button
                className="mt-2 !border-band-button-bg !bg-band-button-bg !text-band-button-fg hover:!-translate-y-px hover:!border-band-button-bg hover:!bg-band-button-bg hover:!text-band-button-fg"
                href={href ?? "/contact"}
                tone="brand"
              >
                {buttonLabel ?? cta.action}
              </Button>
              {secondaryButtonLabel ? (
                <Button
                  className="ml-2 !border-band-fg/40 !bg-transparent !text-band-fg hover:!border-band-fg hover:!bg-band-fg/10"
                  href={secondaryHref ?? "/services"}
                  variant="ghost"
                >
                  {secondaryButtonLabel}
                </Button>
              ) : null}
              {email ? (
                <div className="mt-6 flex flex-wrap items-center gap-3 text-small text-band-fg">
                  <a className="inline-flex items-center gap-2 font-semibold" href={`mailto:${email}`}>
                    <Mail aria-hidden="true" size={17} />
                    {email}
                  </a>
                  <span>{replyNote}</span>
                </div>
              ) : null}
            </>
          ) : null}
        </div>
        {steps ? (
          <div className="rounded-[20px] border border-band-fg/18 bg-band-fg/8 p-7 md:col-span-5">
            <h3 className="font-body text-h3 font-bold">{stepsHeading}</h3>
            <ol className="relative mt-5 space-y-5">
              <span aria-hidden="true" className="absolute bottom-5 left-[17px] top-5 w-0.5 bg-band-fg/25" />
              {steps.map((step, index) => (
                <li className="relative flex gap-4" key={step.title}>
                  <span className="z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-body text-small font-bold text-brand-fg">0{index + 1}</span>
                  <div className="pt-1">
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-[15px] leading-relaxed text-band-fg">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
      </div>
      {!steps ? (
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-20 z-0 hidden h-[340px] w-[440px] opacity-10 md:block">
          <CtaShapes />
        </div>
      ) : null}
    </Section>
  );
}

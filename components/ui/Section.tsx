import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";

type SectionProps = Omit<ComponentPropsWithoutRef<"section">, "children"> & {
  children: ReactNode;
  containerClassName?: string;
  fullBleedContent?: boolean;
  eyebrow?: ReactNode;
  intro?: ReactNode;
  title?: ReactNode;
  tone?: "base" | "alt" | "raised" | "brand";
  topRule?: boolean;
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  fullBleedContent = false,
  eyebrow,
  intro,
  title,
  tone = "base",
  topRule = false,
  ...sectionProps
}: SectionProps) {
  return (
    <section
      className={`bg-[rgb(var(--section-background))] py-14 text-[rgb(var(--section-fg))] md:py-20 lg:py-24 ${className}`}
      data-tone={tone}
      {...sectionProps}
    >
      <Container className={containerClassName}>
        {topRule ? <Rule className="mb-8" /> : null}
        {eyebrow || title || intro ? (
          <div className="mb-8 max-w-3xl md:mb-10">
            {eyebrow ? (
              <p
                className={`mb-3 text-eyebrow font-semibold uppercase ${
                  tone === "raised"
                    ? "text-brand"
                    : tone === "brand"
                      ? "text-brand-fg"
                      : "text-brand"
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-body text-h2 font-bold tracking-[-0.02em]">{title}</h2>
            ) : null}
            {intro ? <div className="mt-4 max-w-[60ch] text-body text-[rgb(var(--section-muted))]">{intro}</div> : null}
          </div>
        ) : null}
        {!fullBleedContent ? children : null}
      </Container>
      {fullBleedContent ? children : null}
    </section>
  );
}

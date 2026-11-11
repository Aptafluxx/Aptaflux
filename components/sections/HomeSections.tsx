import Link from "next/link";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function HomeSections() {
  const { problem, outcomes, services, capabilities, process, why, faq } =
    homeContent;

  return (
    <>
      <Section
        aria-label={problem.eyebrow}
        eyebrow={problem.eyebrow}
        intro={problem.intro}
        title={problem.title}
        tone="cream"
      >
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {problem.points.map((point) => (
            <article
              className="rounded-sm border border-line p-5 sm:p-6"
              key={point.title}
            >
              <h3 className="font-display text-h3 font-semibold">{point.title}</h3>
              <p className="mt-4 text-body leading-relaxed text-muted">
                {point.text}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Rule className="mb-6" />
          <p className="max-w-[48ch] font-display text-display-lg font-medium">
            {problem.closing}
          </p>
        </div>
      </Section>

      <Section
        aria-label={outcomes.eyebrow}
        eyebrow={outcomes.eyebrow}
        title={outcomes.title}
        tone="navy"
      >
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.points.map((point) => (
            <article className="bg-bg p-5 sm:p-6" key={point.title}>
              <h3 className="font-display text-h3 font-semibold">
                {point.title}
              </h3>
              <p className="mt-4 text-body leading-relaxed text-muted">
                {point.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        aria-label={services.eyebrow}
        eyebrow={services.eyebrow}
        intro={services.intro}
        title={services.title}
        tone="surface"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {services.solutions.map((solution) => (
            <article
              className="flex h-full flex-col rounded-sm border border-line p-5 sm:p-6"
              key={solution.slug}
            >
              <p className="text-small font-semibold text-ember">
                {solution.number}
              </p>
              <p className="mt-3 text-body font-semibold">{solution.name}</p>
              <h3 className="mt-4 font-display text-h3 font-medium">
                {solution.promise}
              </h3>
              <p className="mt-4 text-body leading-relaxed text-muted">
                {solution.scope}
              </p>
              <div className="mt-6 border-t border-line pt-5">
                <p className="text-small text-muted">
                  {services.startingScopeLabel}
                </p>
                <p className="mt-2 font-display text-h3 font-semibold">
                  {solution.startingScope}
                </p>
              </div>
              <Link
                className="mt-6 inline-block text-small font-semibold text-ember transition-colors hover:text-text"
                href={`/services/${solution.slug}`}
              >
                {solution.linkLabel}
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-body">
          <span>{services.unsure} </span>
          <Link
            className="font-semibold text-ember underline decoration-ember underline-offset-4 transition-colors hover:text-text"
            href="/contact"
          >
            {services.contactLink}
          </Link>
        </p>
      </Section>

      <Section
        aria-label={capabilities.eyebrow}
        tone="cream"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-ember-deep">
              {capabilities.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-semibold">
              {capabilities.title}
            </h2>
            <p className="mt-6 max-w-[36ch] text-body leading-relaxed text-muted">
              {capabilities.closing}
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {capabilities.rows.map((row) => (
              <div
                className="grid gap-2 border-t border-line py-4 sm:grid-cols-2 sm:gap-6"
                key={row.name}
              >
                <h3 className="font-semibold">{row.name}</h3>
                <p className="text-body text-muted">{row.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FeaturedWork />

      <Section
        aria-label={process.eyebrow}
        eyebrow={process.eyebrow}
        title={process.title}
        tone="surface"
      >
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 before:absolute before:hidden before:left-[10%] before:right-[10%] before:top-5 before:h-px before:bg-line lg:before:block">
          {process.steps.map((step) => (
            <article className="relative" key={step.number}>
              <p className="w-fit bg-surface pr-4 font-display text-step-number leading-none text-ember">
                {step.number}
              </p>
              <h3 className="mt-5 font-display text-h3 font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-body leading-relaxed text-muted">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section aria-label={why.eyebrow} tone="cream">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-ember-deep">
              {why.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-semibold">{why.title}</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {why.points.map((point) => (
              <p
                className="border-t border-line py-4 text-body leading-relaxed"
                key={point.name}
              >
                <strong>{point.name}:</strong> {point.text}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section
        aria-label={faq.eyebrow}
        tone="navy"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="mb-4 text-eyebrow font-semibold uppercase tracking-wide text-ember">
              {faq.eyebrow}
            </p>
            <h2 className="font-display text-h2 font-semibold">{faq.title}</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <FAQAccordion items={faq.items} />
          </div>
        </div>
      </Section>
    </>
  );
}

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Rule } from "@/components/ui/Rule";
import { homeContent } from "@/content/home";

export function ServicesTeaser() {
  const { services } = homeContent;

  return (
    <Section>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-10">
          <h2 className="font-display text-h2 font-semibold">
            {services.heading}
          </h2>
          <Link
            className="border-b border-ember pb-2 text-body font-semibold text-ember transition-colors hover:text-text"
            href="/services"
            prefetch={false}
          >
            {services.linkLabel}
          </Link>
        </div>
        <Rule />
        {services.rows.map((service) => (
          <article
            key={service.title}
            className="grid gap-4 border-b border-line py-6 sm:py-7 min-[820px]:grid-cols-12 min-[820px]:gap-8"
          >
            <h3 className="font-display text-h3 font-semibold min-[820px]:col-span-3">
              {service.title}
            </h3>
            <p className="max-w-[46ch] text-body leading-relaxed text-muted min-[820px]:col-span-5">
              {service.description}
            </p>
            <ul className="flex flex-wrap gap-x-2 gap-y-1 text-small text-text min-[820px]:col-span-4 min-[820px]:justify-end">
              {service.deliverables.map((deliverable, index) => (
                <li key={deliverable}>
                  {deliverable}
                  {index < service.deliverables.length - 1 ? "," : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
    </Section>
  );
}

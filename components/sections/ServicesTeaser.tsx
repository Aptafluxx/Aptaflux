import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";
import { homeContent } from "@/content/home";

export function ServicesTeaser() {
  const { services } = homeContent;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5 sm:mb-12">
          <h2 className="font-display text-[clamp(40px,6vw,96px)] font-semibold leading-[0.95] tracking-[-0.03em]">
            {services.heading}
          </h2>
          <Link
            className="border-b border-ember pb-2 text-[17px] font-semibold text-ember transition-colors hover:text-text"
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
            className="grid gap-4 border-b border-line py-7 sm:py-8 min-[820px]:grid-cols-12 min-[820px]:gap-8"
          >
            <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] min-[820px]:col-span-3">
              {service.title}
            </h3>
            <p className="max-w-[46ch] text-[17px] leading-relaxed text-muted min-[820px]:col-span-5">
              {service.description}
            </p>
            <ul className="flex flex-wrap gap-x-2 gap-y-1 text-[15px] text-text min-[820px]:col-span-4 min-[820px]:justify-end">
              {service.deliverables.map((deliverable, index) => (
                <li key={deliverable}>
                  {deliverable}
                  {index < service.deliverables.length - 1 ? "," : null}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </Container>
    </section>
  );
}

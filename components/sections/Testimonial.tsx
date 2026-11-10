import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function Testimonial() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <figure className="grid gap-8 min-[820px]:grid-cols-12 min-[820px]:gap-8">
          <blockquote className="font-display text-3xl font-medium leading-[1.15] tracking-[-0.03em] min-[820px]:col-span-9 min-[820px]:col-start-4 sm:text-5xl lg:text-6xl">
            “{homeContent.testimonial.quote}”
          </blockquote>
          <figcaption className="text-[15px] text-muted min-[820px]:col-span-9 min-[820px]:col-start-4">
            {homeContent.testimonial.attribution}
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

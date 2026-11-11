import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function Testimonial() {
  return (
    <Section>
        <figure className="grid gap-8 min-[820px]:grid-cols-12 min-[820px]:gap-8">
          <blockquote className="font-display text-quote font-medium min-[820px]:col-span-9 min-[820px]:col-start-4">
            “{homeContent.testimonial.quote}”
          </blockquote>
          <figcaption className="text-small text-muted min-[820px]:col-span-9 min-[820px]:col-start-4">
            {homeContent.testimonial.attribution}
          </figcaption>
        </figure>
    </Section>
  );
}

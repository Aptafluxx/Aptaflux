import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";

export function CtaBand() {
  const { cta } = homeContent;

  return (
    <Section topRule className="py-14 md:py-16">
        <div className="flex flex-col items-start gap-6 min-[820px]:items-end">
          <h2 className="max-w-5xl font-display text-h2 font-semibold">
            {cta.headline}
          </h2>
          <Button className="min-[820px]:self-end" href="/contact">
            {cta.action}
          </Button>
        </div>
    </Section>
  );
}

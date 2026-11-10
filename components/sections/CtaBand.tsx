import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";
import { homeContent } from "@/content/home";

export function CtaBand() {
  const { cta } = homeContent;

  return (
    <section className="pt-12 sm:pt-16">
      <Container>
        <Rule />
        <div className="flex flex-col items-start gap-8 py-12 sm:py-16 min-[820px]:items-end">
          <h2 className="max-w-5xl font-display text-[clamp(48px,9vw,150px)] font-semibold leading-[0.98] tracking-[-0.03em]">
            {cta.headline}
          </h2>
          <Button className="px-8 py-4 text-[17px] min-[820px]:self-end" href="/contact">
            {cta.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}

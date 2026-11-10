import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";
import { HeroHeadline } from "./HeroHeadline";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section>
      <Container className="flex min-h-svh flex-col justify-end pb-12 pt-32 sm:pb-16">
        <div>
          <HeroHeadline lines={hero.headline} />
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-muted sm:mt-8 sm:text-lg">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="flex flex-wrap gap-3">
              <Button className="text-[17px]" href="/contact">
                {hero.primaryAction}
              </Button>
              <Button className="text-[17px]" href="/work" variant="ghost">
                {hero.secondaryAction}
              </Button>
            </div>
            <ScrollIndicator className="self-end sm:self-auto" label={hero.scrollLabel} />
          </div>
        </div>
      </Container>
    </section>
  );
}

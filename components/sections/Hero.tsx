import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { homeContent } from "@/content/home";
import { HeroHeadline } from "./HeroHeadline";
import { ScrollIndicator } from "./ScrollIndicator";

export function Hero() {
  const { hero } = homeContent;

  return (
    <Section className="pb-14 pt-14 md:pb-16 md:pt-28">
        <div>
          <HeroHeadline lines={hero.headline} mobileLines={hero.mobileHeadline} />
          <p className="mt-6 max-w-[46ch] text-body leading-relaxed text-muted sm:mt-8">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
            <div className="flex flex-wrap gap-3">
              <Button className="text-body" href="/contact">
                {hero.primaryAction}
              </Button>
              <Button className="text-body" href="/work" variant="ghost">
                {hero.secondaryAction}
              </Button>
            </div>
            <ScrollIndicator className="self-end sm:self-auto" label={hero.scrollLabel} />
          </div>
        </div>
    </Section>
  );
}

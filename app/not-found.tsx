import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: site.metadata.notFoundTitle,
  description: site.metadata.notFoundDescription,
});

export default function NotFound() {
  return (
    <>
      <Section className="pb-10 pt-[88px] md:pt-28">
          <h1 className="font-display text-display-lg font-semibold">
            {site.metadata.notFoundTitle}
          </h1>
      </Section>
      <Section className="pb-14 pt-0 md:pb-20">
        <p className="max-w-[55ch] text-body text-muted">
          {site.metadata.notFoundDescription}
        </p>
        <Button className="mt-8" href="/">
          {site.brand}
        </Button>
      </Section>
    </>
  );
}

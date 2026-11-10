import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: site.metadata.notFoundTitle,
  description: site.metadata.notFoundDescription,
});

export default function NotFound() {
  return (
    <>
      <section className="flex min-h-[65vh] flex-col justify-end pb-20 pt-24 sm:pb-24 sm:pt-[120px]">
        <Container>
          <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] font-semibold leading-[0.88] tracking-[-0.03em]">
            {site.metadata.notFoundTitle}
          </h1>
        </Container>
      </section>
      <Container className="pb-20">
        <p className="max-w-[55ch] text-[19px] text-muted">
          {site.metadata.notFoundDescription}
        </p>
        <Button className="mt-8" href="/">
          {site.brand}
        </Button>
      </Container>
    </>
  );
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Compass, Home, Layers3 } from "lucide-react";
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
    <Section className="relative isolate overflow-hidden py-12 md:py-16 lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 size-[520px] rounded-full border border-accent/10" />
        <div className="absolute -right-24 -top-24 size-[360px] rounded-full border border-accent/10" />
      </div>

      <div className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:gap-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-small font-semibold text-accent">
            <Compass aria-hidden="true" size={15} />
            <span>ERROR 404 <span className="px-1 text-accent/50">/</span> OFF THE MAP</span>
          </div>
          <h1 className="mt-6 max-w-[12ch] font-display text-display-lg font-semibold leading-[0.98] tracking-[-0.04em]">
            {site.metadata.notFoundTitle}
          </h1>
          <p className="mt-5 max-w-[48ch] text-body leading-relaxed text-muted">
            {site.metadata.notFoundDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="gap-2" href="/">
              <Home aria-hidden="true" size={16} />
              Back to home
              <ArrowRight aria-hidden="true" size={16} />
            </Button>
            <Button href="/portfolio" variant="ghost">
              Explore projects
            </Button>
          </div>

          <div className="mt-10 border-t border-line pt-5">
            <p className="text-small font-semibold">Or try one of these</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                className="inline-flex items-center gap-1 text-small text-muted transition-colors hover:text-accent"
                href="/services"
              >
                Our services <ArrowUpRight aria-hidden="true" size={14} />
              </Link>
              <Link
                className="inline-flex items-center gap-1 text-small text-muted transition-colors hover:text-accent"
                href="/about"
              >
                About us <ArrowUpRight aria-hidden="true" size={14} />
              </Link>
              <Link
                className="inline-flex items-center gap-1 text-small text-muted transition-colors hover:text-accent"
                href="/contact"
              >
                Contact <ArrowUpRight aria-hidden="true" size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative mx-auto grid aspect-square w-full max-w-[440px] place-items-center"
        >
          <div className="absolute inset-[8%] rounded-full border border-line" />
          <div className="absolute inset-[19%] rounded-full border border-accent/20" />
          <div className="absolute inset-[30%] rounded-full bg-accent/10" />
          <span className="relative font-display text-[clamp(9rem,23vw,17rem)] font-semibold leading-none tracking-[-0.1em] text-brand/10">
            404
          </span>
          <span className="absolute left-[16%] top-[18%] flex size-14 items-center justify-center rounded-2xl border border-line bg-card text-accent shadow-lg">
            <Compass size={25} />
          </span>
          <span className="absolute bottom-[18%] right-[17%] flex size-12 items-center justify-center rounded-full bg-brand text-brand-fg shadow-lg">
            <Layers3 size={20} />
          </span>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Page rendering failed.", error);
  }, [error]);

  return (
    <>
      <section className="flex min-h-[65vh] flex-col justify-end pb-20 pt-24 sm:pb-24 sm:pt-[120px]">
        <Container>
          <h1 className="font-display text-[clamp(3.5rem,12vw,12rem)] font-semibold leading-[0.88] tracking-[-0.03em]">
            {site.metadata.errorTitle}
          </h1>
        </Container>
      </section>
      <Container className="pb-20">
        <p className="max-w-[55ch] text-[19px] text-muted" role="alert">
          {site.metadata.errorDescription}
        </p>
        <p className="mt-4 text-[17px] text-muted">
          {site.metadata.errorContact}{" "}
          <a
            className="text-text underline underline-offset-4 hover:text-ember"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </p>
        <Button className="mt-8" onClick={reset}>
          {site.metadata.retry}
        </Button>
      </Container>
    </>
  );
}

"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
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
      <Section className="pb-10 pt-14 md:pt-28">
          <h1 className="font-display text-display-lg font-semibold">
            {site.metadata.errorTitle}
          </h1>
      </Section>
      <Section className="pb-14 pt-0 md:pb-20">
        <p className="max-w-[55ch] text-body text-muted" role="alert">
          {site.metadata.errorDescription}
        </p>
        <p className="mt-4 text-body text-muted">
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
      </Section>
    </>
  );
}

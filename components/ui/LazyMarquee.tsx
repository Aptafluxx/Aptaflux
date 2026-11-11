"use client";

import dynamic from "next/dynamic";

const Marquee = dynamic(
  () => import("@/components/ui/Marquee").then((module) => module.Marquee),
  { loading: () => <div aria-hidden="true" className="h-10" /> },
);

export function LazyMarquee() {
  return <Marquee />;
}

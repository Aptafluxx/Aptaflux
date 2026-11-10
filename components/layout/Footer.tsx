"use client";

import { useEffect, useState } from "react";
import { Rule } from "@/components/ui/Rule";
import { site } from "@/content/site";

function getLocalTime() {
  return new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function Footer() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => setLocalTime(getLocalTime());
    updateTime();
    const intervalId = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <footer className="px-6 pb-8 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-[1600px]">
        <Rule />
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <a className="text-sm text-text transition-colors hover:text-ember" href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <nav aria-label={site.socialNavigation} className="flex gap-6">
            {site.socials.map((social) => (
              <a
                key={social.label}
                className="text-sm text-muted transition-colors hover:text-ember"
                href={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:gap-6">
            <span>{site.localTimeLabel}: {localTime || "—"}</span>
            <span>© {new Date().getFullYear()} {site.brand}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

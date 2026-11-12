"use client";

import Link from "next/link";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import { homeContent } from "@/content/home";
import { site } from "@/content/site";
import { LocalTime } from "@/components/ui/LocalTime";

const capabilities = [
  "Web Development",
  "Mobile Applications",
  "UI/UX Design",
  "AI Integration",
  "Business Automation",
];

const solutions = [
  { label: "Conversion Engine", slug: "conversion-engine" },
  { label: "Business Automation System", slug: "business-automation" },
  { label: "Digital Operations Platform", slug: "digital-platforms" },
];

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
  });
}

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M5.2 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3.7 9h3v11h-3V9Zm5 0h2.9v1.5h.1A3.2 3.2 0 0 1 14.6 8c3.1 0 3.7 2 3.7 4.7V20h-3v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V20h-3V9Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg
        aria-hidden="true"
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <rect height="16" rx="4.5" strokeWidth="1.8" width="16" x="4" y="4" />
        <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.8" fill="currentColor" r="1" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className="size-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .9a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2a10.7 10.7 0 0 1 5.7 0c2.1-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3 0 4.3-2.7 5.3-5.3 5.6.4.3.8 1 .8 2v3c0 .3.2.6.8.5A11.2 11.2 0 0 0 12 .9Z" />
    </svg>
  );
}

export function Footer() {
  const { footer } = homeContent;
  const socials = site.socials.filter(({ href }) => href.length > 0);
  const companyLinks = site.navigation.filter(
    ({ href }) => href !== "/services",
  );

  return (
    <footer className="border-t border-[rgba(244,237,224,.10)] bg-[#0F1A27] font-body text-[#F4EDE0]">
      <div className="mx-auto w-full max-w-7xl px-6 pb-6 pt-12 lg:pt-14">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-5">
            <Link
              className="inline-block text-2xl font-bold leading-none tracking-[-0.04em]"
              href="/"
            >
              Aptaflux
            </Link>
            <p className="mt-4 text-[17px] leading-relaxed lg:whitespace-nowrap">
              {site.footerDescription}
            </p>
            <a
              className="group mt-5 inline-flex items-center gap-2 text-xl font-semibold text-[rgba(244,237,224,.78)] transition-colors hover:text-[#F4EDE0]"
              href={`mailto:${site.email}`}
            >
              <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-[#F2794B]">
                {site.email}
              </span>
              <ArrowUpRight aria-hidden="true" size={20} />
            </a>
            <Link
              className="mt-6 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#FF5B2E] px-6 text-[15px] font-semibold text-[#0F1A27] transition-colors hover:bg-[#F4EDE0]"
              href="/contact"
            >
              Start a project
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            {socials.length > 0 ? (
              <div className="mt-6 flex items-center gap-3">
                {socials.map((social) => {
                  return (
                    <a
                      key={social.label}
                      aria-label={social.label}
                      className="flex size-10 items-center justify-center rounded-full border border-[rgba(244,237,224,.18)] text-[#F4EDE0] transition-colors hover:border-[#F2794B] hover:text-[#F2794B]"
                      href={social.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <SocialIcon label={social.label} />
                    </a>
                  );
                })}
              </div>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:col-start-7 lg:col-span-6 lg:grid-cols-3">
            <nav aria-label="Footer company">
              <h2 className="text-[13px] font-semibold text-[rgba(244,237,224,.60)]">
                Company
              </h2>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="text-[15px] text-[rgba(244,237,224,.78)] transition-colors hover:text-[#F4EDE0] hover:underline hover:decoration-[#F2794B] hover:underline-offset-4"
                      href={item.href}
                    >
                      {item.href === "/" ? "Home" : item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Footer solutions">
              <h2 className="text-[13px] font-semibold text-[rgba(244,237,224,.60)]">
                Solutions
              </h2>
              <ul className="mt-4 space-y-2.5">
                {solutions.map((solution) => (
                  <li key={solution.slug}>
                    <Link
                      className="text-[15px] text-[rgba(244,237,224,.78)] transition-colors hover:text-[#F4EDE0] hover:underline hover:decoration-[#F2794B] hover:underline-offset-4"
                      href={`/services/${solution.slug}`}
                    >
                      {solution.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label="Footer capabilities"
              className="col-span-2 lg:col-span-1"
            >
              <h2 className="text-[13px] font-semibold text-[rgba(244,237,224,.60)]">
                Capabilities
              </h2>
              <ul className="mt-4 space-y-2.5">
                {capabilities.map((capability) => (
                  <li key={capability}>
                    <Link
                      className="text-[15px] text-[rgba(244,237,224,.78)] transition-colors hover:text-[#F4EDE0] hover:underline hover:decoration-[#F2794B] hover:underline-offset-4"
                      href="/services"
                    >
                      {capability}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="mt-4 select-none overflow-hidden lg:mt-6"
        >
          <svg className="block h-auto w-full" viewBox="0 36 1000 179">
            <text
              className="font-body"
              fill="rgba(244,237,224,.06)"
              fontSize="220"
              fontWeight="800"
              lengthAdjust="spacing"
              textLength="1000"
              x="0"
              y="205"
            >
              Aptaflux
            </text>
          </svg>
        </div>

        <div className="mt-8 border-t border-[rgba(244,237,224,.10)] pt-5 text-[15px] text-[rgba(244,237,224,.78)]">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Aptaflux. All rights reserved.</p>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
              <nav aria-label={footer.legalNavigation}>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {footer.legalLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        className="transition-colors hover:text-[#F4EDE0] hover:underline hover:decoration-[#F2794B] hover:underline-offset-4"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex items-center justify-between gap-6">
                <span className="whitespace-nowrap">
                  Pakistan (PKT) · <LocalTime />
                </span>
                <button
                  aria-label="Back to top"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[rgba(244,237,224,.18)] text-[#F4EDE0] transition-colors hover:border-[#F2794B] hover:text-[#F2794B]"
                  onClick={scrollToTop}
                  type="button"
                >
                  <ArrowUp aria-hidden="true" size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

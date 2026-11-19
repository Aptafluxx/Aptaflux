"use client";

import { useState } from "react";
import { Check, Copy, Mail, UsersRound } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { LocalTime } from "@/components/ui/LocalTime";
import { SocialIcon } from "@/components/ui/SocialIcon";
import { site } from "@/content/site";

export function ContactInformation() {
  const { contact } = site;
  const socials = site.socials.filter(
    ({ href, label }) =>
      href.length > 0 && (label === "LinkedIn" || label === "Instagram"),
  );
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setCopyError(false);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
      setCopyError(true);
    }
  }

  return (
    <>
      <Card className="contact-information-card rounded-[20px] border-accent/30 border-t-4 border-t-accent p-5 hover:translate-y-0 hover:border-accent/30 sm:p-6">
        <div className="flex items-center gap-4">
          <IconBadge icon={Mail} />
          <div className="min-w-0 flex-1">
            <h2 className="text-small font-semibold">{contact.emailHeading}</h2>
            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
              <a
                className="break-all text-[20px] font-semibold leading-tight text-fg transition-colors hover:text-accent"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              <button
                aria-label={contact.copyEmail}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
                onClick={copyEmail}
                type="button"
              >
                {copied ? (
                  <Check aria-hidden="true" size={18} />
                ) : (
                  <Copy aria-hidden="true" size={18} />
                )}
              </button>
            </div>
            <p aria-live="polite" className="sr-only" role="status">
              {copied
                ? contact.emailCopied
                : copyError
                  ? contact.copyEmailError
                  : ""}
            </p>
          </div>
        </div>

        <div className="my-5 border-t border-accent/25" />

        <div className="flex items-center gap-4">
          <IconBadge icon={UsersRound} />
          <div className="min-w-0">
            <h2 className="text-small font-semibold">{contact.socialHeading}</h2>
            <nav aria-label={site.socialNavigation} className="mt-3 flex gap-2">
              {socials.map((social) => (
                <a
                  aria-label={social.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-fg/20 text-fg transition-colors hover:border-accent hover:text-accent"
                  href={social.href}
                  key={social.label}
                  rel="noreferrer"
                  target="_blank"
                >
                  <SocialIcon label={social.label} />
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="my-5 border-t border-accent/25" />

        <div>
          <h2 className="text-small font-semibold">{contact.replyHeading}</h2>
          <p className="mt-2 text-body leading-relaxed text-muted">
            {contact.replyText}
          </p>
        </div>
        <p className="mt-5 text-small text-muted">
          {contact.localTimeLabel} <LocalTime />
        </p>
      </Card>

      <div>
        <h2 className="font-body text-h3 font-bold tracking-[-0.02em]">
          {contact.whatHappensNext.heading}
        </h2>
        <ol className="relative mt-5 space-y-5">
          <span
            aria-hidden="true"
            className="absolute bottom-5 left-[17px] top-5 w-0.5 bg-accent/25"
          />
          {contact.whatHappensNext.steps.map((step, index) => (
            <li className="relative flex gap-4" key={step.title}>
              <span className="z-10 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent font-body text-small font-bold text-brand-fg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pt-1">
                <p className="font-semibold">{step.title}</p>
                <p className="mt-1 text-body leading-relaxed text-muted">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

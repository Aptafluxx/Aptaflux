import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { LocalTime } from "@/components/ui/LocalTime";
import { Rule } from "@/components/ui/Rule";
import { homeContent } from "@/content/home";
import { site } from "@/content/site";

export function Footer() {
  const { footer } = homeContent;
  const socials = site.socials.filter(({ href }) => href.length > 0);

  return (
    <footer>
      <Section tone="navy">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              className="font-body text-h3 font-bold tracking-[-0.04em]"
              href="/"
            >
              {footer.wordmark}
            </Link>
            <p className="mt-4 max-w-[36ch] text-body text-muted">
              {footer.blurb}
            </p>
          </div>

          <nav aria-label={footer.explore} className="lg:col-span-2">
            <h2 className="text-small font-semibold">{footer.explore}</h2>
            <ul className="mt-4 space-y-3">
              {site.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-small text-muted transition-colors hover:text-text"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={footer.services} className="lg:col-span-3">
            <h2 className="text-small font-semibold">{footer.services}</h2>
            <ul className="mt-4 space-y-3">
              {footer.serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    className="text-small text-muted transition-colors hover:text-text"
                    href="/services"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-small font-semibold">{footer.contact}</h2>
            <a
              className="mt-4 inline-block text-small text-muted transition-colors hover:text-text"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-10">
          <nav aria-label={site.socialNavigation} className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                className="text-small text-muted transition-colors hover:text-text"
                href={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>

        <Rule className="my-6" />
        <div className="flex flex-col gap-2 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:items-center">
            <nav aria-label={footer.legalNavigation}>
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {footer.legalLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="transition-colors hover:text-text"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <span>{site.localTimeLabel}: <LocalTime /></span>
          </div>
        </div>
      </Section>
    </footer>
  );
}

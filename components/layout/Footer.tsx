import { Section } from "@/components/ui/Section";
import { LocalTime } from "@/components/ui/LocalTime";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer>
      <Section topRule>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <a className="text-body text-text transition-colors hover:text-ember" href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <nav aria-label={site.socialNavigation} className="flex gap-6">
            {site.socials.map((social) => (
              <a
                key={social.label}
                className="text-small text-muted transition-colors hover:text-ember"
                href={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-small text-muted sm:flex-row sm:gap-6">
            <span>{site.localTimeLabel}: <LocalTime /></span>
            <span>© {new Date().getFullYear()} {site.brand}</span>
          </div>
        </div>
      </Section>
    </footer>
  );
}

import { Container } from "@/components/ui/Container";
import { LocalTime } from "@/components/ui/LocalTime";
import { Rule } from "@/components/ui/Rule";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="pb-8">
      <Container>
        <Rule />
        <div className="flex flex-col gap-8 py-8 md:flex-row md:items-center md:justify-between">
          <a className="text-[17px] text-text transition-colors hover:text-ember" href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <nav aria-label={site.socialNavigation} className="flex gap-6">
            {site.socials.map((social) => (
              <a
                key={social.label}
                className="text-[15px] text-muted transition-colors hover:text-ember"
                href={social.href}
                rel="noreferrer"
                target="_blank"
              >
                {social.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2 text-[15px] text-muted sm:flex-row sm:gap-6">
            <span>{site.localTimeLabel}: <LocalTime /></span>
            <span>© {new Date().getFullYear()} {site.brand}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

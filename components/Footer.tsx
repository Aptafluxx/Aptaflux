import { Linkedin, Github } from "lucide-react";
import { Section } from "./ui";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Section className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-ink-faint">
          © {year} Aptaflux. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="mailto:aptaflux@gmail.com"
            className="text-[13px] text-ink-dim transition-colors hover:text-ink"
          >
            aptaflux@gmail.com
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Github size={18} />
          </a>
        </div>
      </Section>
    </footer>
  );
}

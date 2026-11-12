// PLACEHOLDER: have legal text reviewed before launch.
import { LegalPage } from "@/components/ui/LegalPage";
import { termsContent } from "@/content/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: termsContent.title,
  description: termsContent.description,
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage {...termsContent} />;
}

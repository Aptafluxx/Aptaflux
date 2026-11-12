// PLACEHOLDER: have legal text reviewed before launch.
import { LegalPage } from "@/components/ui/LegalPage";
import { privacyContent } from "@/content/legal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: privacyContent.title,
  description: privacyContent.description,
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage {...privacyContent} />;
}

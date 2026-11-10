import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <PageHeader title="About Aptaflux" />;
}

import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return <PageHeader title="Aptaflux" />;
}

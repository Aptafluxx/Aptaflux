import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return <PageHeader title="Services" />;
}

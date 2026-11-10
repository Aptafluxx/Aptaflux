import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <PageHeader title="Contact" />;
}

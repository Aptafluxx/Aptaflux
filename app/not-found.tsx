import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return <PageHeader title="Page not found" />;
}

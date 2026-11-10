import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return <PageHeader title="Selected work" />;
}

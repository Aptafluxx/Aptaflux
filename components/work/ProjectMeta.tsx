import { Globe, Smartphone } from "lucide-react";

export function CategoryLabel({
  category,
  kind,
}: {
  category: string;
  kind: "website" | "mobile";
}) {
  const Icon = kind === "website" ? Globe : Smartphone;

  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold uppercase tracking-[0.06em] text-accent">
      <Icon aria-hidden="true" size={15} strokeWidth={2} />
      {category}
    </span>
  );
}

export function TechnologyChip({ technology }: { technology: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-lg border border-accent/35 bg-accent/12 px-2.5 py-1 text-[13px] font-semibold text-fg">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {technology}
    </span>
  );
}

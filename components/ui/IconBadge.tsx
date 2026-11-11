import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
  size?: "default" | "large";
};

export function IconBadge({ icon: Icon, size = "default" }: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={`ui-icon-badge inline-flex shrink-0 items-center justify-center rounded-lg bg-ember/15 text-ember ${
        size === "large" ? "h-14 w-14" : "h-11 w-11"
      }`}
    >
      <Icon size={size === "large" ? 27 : 21} strokeWidth={1.8} />
    </span>
  );
}

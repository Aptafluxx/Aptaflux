import type { LucideIcon } from "lucide-react";

type IconBadgeProps = {
  icon: LucideIcon;
};

export function IconBadge({ icon: Icon }: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className="ui-icon-badge inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
    >
      <Icon size={22} strokeWidth={1.75} />
    </span>
  );
}

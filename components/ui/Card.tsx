import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", ...props }: CardProps) {
  return (
    <div
      className={`ui-card rounded-lg border border-line p-6 transition-[transform,border-color,background-color] duration-[250ms] ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-brand ${className}`}
      {...props}
    />
  );
}

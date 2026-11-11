import type { HTMLAttributes } from "react";

export function DotGrid({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 dot-grid ${className}`}
      {...props}
    />
  );
}

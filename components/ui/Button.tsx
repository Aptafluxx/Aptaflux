import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href: string;
  variant?: "primary" | "ghost";
};

export function Button({
  children,
  className = "",
  href,
  variant = "primary",
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "border-ember bg-ember text-bg hover:bg-transparent hover:text-ember"
      : "border-line text-text hover:border-ember hover:text-ember";

  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-[2px] border px-5 py-3 text-sm font-semibold transition-colors duration-300 ${variantClass} ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}

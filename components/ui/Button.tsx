import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
};

export function Button({
  children,
  className = "",
  disabled = false,
  href,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "border-ember bg-ember text-bg hover:bg-transparent hover:text-ember"
      : "border-line text-text hover:border-ember hover:text-ember";

  const classes = `inline-flex min-h-11 items-center justify-center rounded-[2px] border px-5 py-3 text-small font-semibold transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60 ${variantClass} ${className}`;

  if (href) {
    return (
      <Link className={classes} href={href} prefetch={false}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

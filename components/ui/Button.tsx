import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  href?: string;
  onClick?: () => void;
  tone?: "navy" | "surface" | "cream" | "ember";
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
};

export function Button({
  children,
  className = "",
  disabled = false,
  href,
  onClick,
  tone = "navy",
  type = "button",
  variant = "primary",
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? tone === "ember"
        ? "border-bg bg-bg text-cream hover:bg-transparent hover:text-bg"
        : `border-ember bg-ember text-bg hover:bg-transparent ${
            tone === "cream" ? "hover:text-ember-deep" : "hover:text-ember"
          }`
      : `border-line text-text ${
          tone === "cream"
            ? "hover:border-ember-deep hover:text-ember-deep"
            : "hover:border-ember hover:text-ember"
        }`;

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

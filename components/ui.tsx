import { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`container-page ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] text-accent font-medium mb-4">{children}</p>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `inline-flex items-center justify-center rounded-[4px] bg-accent px-6 py-3 text-[15px] font-medium text-canvas transition-colors duration-200 hover:bg-[#7AC8BF] ${className}`;
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-[4px] border border-line px-6 py-3 text-[15px] font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </a>
  );
}

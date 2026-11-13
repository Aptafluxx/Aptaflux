import type { SVGProps } from "react";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        d="M16 3 28 27h-5.2l-2.2-4.8H11.4L9.2 27H4L16 3Z"
        fill="currentColor"
      />
      <path d="m13.3 17.8 2.7-6 2.7 6h-5.4Z" fill="rgb(var(--logo-ink))" />
    </svg>
  );
}

export function LogoWordmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 148 32"
      {...props}
    >
      <text
        fill="currentColor"
        fontFamily="var(--font-body), sans-serif"
        fontSize="24"
        fontWeight="700"
        letterSpacing="-1.2"
        x="0"
        y="23"
      >
        Aptaflux
      </text>
    </svg>
  );
}

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <LogoMark className="size-7 shrink-0 text-brand" />
      {showWordmark ? <LogoWordmark className="h-7 w-[130px] text-current" /> : null}
    </span>
  );
}

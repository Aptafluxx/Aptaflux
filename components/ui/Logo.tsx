import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      overflow="visible"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block", overflow: "visible" }}
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
      preserveAspectRatio="xMidYMid meet"
      style={{ display: "block" }}
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

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center leading-none ${compact ? "gap-2" : "gap-2.5"} ${className}`}
    >
      <LogoMark
        className={`shrink-0 object-contain overflow-visible ${
          compact ? "h-6 w-6" : "h-8 w-8"
        }`}
      />
      <LogoWordmark
        className={`shrink-0 ${
          compact ? "h-[18px] w-auto" : "h-[22px] w-auto"
        }`}
      />
      <span className="sr-only">Aptaflux</span>
    </span>
  );
}

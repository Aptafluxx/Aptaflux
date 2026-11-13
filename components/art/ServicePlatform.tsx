type ServiceIllustrationProps = {
  className?: string;
};

export function ServicePlatform({ className = "" }: ServiceIllustrationProps) {
  return (
    <svg aria-hidden="true" className={`h-24 w-full ${className}`} fill="none" viewBox="0 0 180 96">
      <rect x="15" y="12" width="97" height="70" rx="4" fill="rgb(var(--bg))" />
      <path d="M15 27h97" stroke="rgb(var(--line))" strokeWidth="2" />
      <rect x="25" y="37" width="31" height="34" rx="3" fill="rgb(var(--card))" />
      <rect x="63" y="37" width="39" height="6" rx="3" fill="rgb(var(--fg))" />
      <rect x="63" y="49" width="30" height="4" rx="2" fill="rgb(var(--muted))" />
      <rect x="63" y="59" width="39" height="12" rx="3" fill="rgb(var(--brand))" />
      <rect x="123" y="27" width="42" height="59" rx="8" fill="rgb(var(--fg))" />
      <rect x="129" y="35" width="30" height="43" rx="3" fill="rgb(var(--bg))" />
      <circle cx="144" cy="82" r="1.8" fill="rgb(var(--card))" />
      <path d="M136 48h16M136 55h11M136 66h16" stroke="rgb(var(--fg))" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

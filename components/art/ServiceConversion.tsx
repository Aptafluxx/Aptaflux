type ServiceIllustrationProps = {
  className?: string;
};

export function ServiceConversion({ className = "" }: ServiceIllustrationProps) {
  return (
    <svg aria-hidden="true" className={`h-24 w-full ${className}`} fill="none" viewBox="0 0 180 96">
      <rect x="14" y="12" width="108" height="72" rx="4" fill="rgb(var(--bg))" />
      <path d="M14 28h108" stroke="rgb(var(--line))" strokeWidth="2" />
      <circle cx="23" cy="20" r="2" fill="rgb(var(--brand))" />
      <rect x="27" y="39" width="42" height="5" rx="2.5" fill="rgb(var(--fg))" />
      <rect x="27" y="49" width="62" height="3" rx="1.5" fill="rgb(var(--muted))" />
      <rect x="27" y="56" width="52" height="3" rx="1.5" fill="rgb(var(--muted))" />
      <rect x="27" y="66" width="28" height="10" rx="2" fill="rgb(var(--brand))" />
      <circle cx="131" cy="60" r="29" fill="rgb(var(--fg))" />
      <path d="m119 60 8 8 17-19" stroke="rgb(var(--bg))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
    </svg>
  );
}

type ServiceIllustrationProps = {
  className?: string;
};

export function ServiceAutomation({ className = "" }: ServiceIllustrationProps) {
  return (
    <svg aria-hidden="true" className={`h-24 w-full ${className}`} fill="none" viewBox="0 0 180 96">
      <rect x="15" y="18" width="42" height="26" rx="4" fill="rgb(var(--bg))" />
      <rect x="69" y="18" width="42" height="26" rx="4" fill="rgb(var(--fg))" />
      <rect x="123" y="18" width="42" height="26" rx="4" fill="rgb(var(--bg))" />
      <path d="M36 44v20h108V44M90 44v20" stroke="rgb(var(--fg))" strokeWidth="2" />
      <rect x="62" y="64" width="56" height="22" rx="4" fill="rgb(var(--brand))" />
      <circle cx="28" cy="31" r="4" fill="rgb(var(--brand))" />
      <path d="M80 31h20M136 31h16M78 75h24" stroke="rgb(var(--bg))" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

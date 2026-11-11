type ServiceIllustrationProps = {
  className?: string;
};

export function ServiceAutomation({ className = "" }: ServiceIllustrationProps) {
  return (
    <svg aria-hidden="true" className={`h-24 w-full ${className}`} fill="none" viewBox="0 0 180 96">
      <rect x="15" y="18" width="42" height="26" rx="4" fill="var(--color-bg)" />
      <rect x="69" y="18" width="42" height="26" rx="4" fill="var(--color-cream, #f4ede0)" />
      <rect x="123" y="18" width="42" height="26" rx="4" fill="var(--color-bg)" />
      <path d="M36 44v20h108V44M90 44v20" stroke="var(--color-text)" strokeWidth="2" />
      <rect x="62" y="64" width="56" height="22" rx="4" fill="var(--color-ember)" />
      <circle cx="28" cy="31" r="4" fill="var(--color-ember)" />
      <path d="M80 31h20M136 31h16M78 75h24" stroke="var(--color-bg)" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}

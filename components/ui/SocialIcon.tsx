export function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5.2 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3.7 9h3v11h-3V9Zm5 0h2.9v1.5h.1A3.2 3.2 0 0 1 14.6 8c3.1 0 3.7 2 3.7 4.7V20h-3v-6.5c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5V20h-3V9Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect height="16" rx="4.5" strokeWidth="1.8" width="16" x="4" y="4" />
        <circle cx="12" cy="12" r="3.5" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.8" fill="currentColor" r="1" stroke="none" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .9a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.2.8-.5v-2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.6 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2a10.7 10.7 0 0 1 5.7 0c2.1-1.5 3.1-1.2 3.1-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3 0 4.3-2.7 5.3-5.3 5.6.4.3.8 1 .8 2v3c0 .3.2.6.8.5A11.2 11.2 0 0 0 12 .9Z" />
    </svg>
  );
}

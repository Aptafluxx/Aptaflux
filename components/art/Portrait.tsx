export function Portrait() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
      viewBox="0 0 400 500"
    >
      <rect width="400" height="500" fill="var(--color-surface)" />
      <circle cx="200" cy="176" r="82" fill="var(--color-text)" />
      <path
        d="M66 500c10-112 59-170 134-170s124 58 134 170"
        fill="var(--color-bg)"
      />
      <path d="M117 176c0-47 37-84 83-84" stroke="var(--color-ember)" strokeWidth="12" />
      <circle cx="291" cy="91" r="15" fill="var(--color-ember)" />
    </svg>
  );
}

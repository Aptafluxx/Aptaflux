export function HeroBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="hero-backdrop-glow absolute left-1/2 top-[12%] size-[min(90vw,56rem)] -translate-x-1/2 rounded-full blur-3xl" />
      <svg
        className="absolute inset-0 hidden h-full w-full md:block"
        preserveAspectRatio="xMidYMin slice"
        viewBox="0 0 1440 760"
      >
        <defs>
          <pattern
            height="32"
            id="hero-grid"
            patternUnits="userSpaceOnUse"
            width="32"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="rgb(var(--line) / 0.14)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="hero-grid-fade">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="68%" stopColor="white" stopOpacity="0.7" />
            <stop offset="100%" stopColor="black" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-grid-mask">
            <rect fill="url(#hero-grid-fade)" height="100%" width="100%" />
          </mask>
        </defs>
        <rect
          fill="url(#hero-grid)"
          height="100%"
          mask="url(#hero-grid-mask)"
          width="100%"
        />
        <circle
          className="hero-backdrop-ring"
          cx="720"
          cy="330"
          fill="none"
          r="156"
          stroke="rgb(var(--line) / 0.22)"
          strokeWidth="1"
        />
        <circle
          className="hero-backdrop-ring hero-backdrop-ring-rotating"
          cx="720"
          cy="330"
          fill="none"
          r="244"
          stroke="rgb(var(--brand) / 0.18)"
          strokeDasharray="5 13"
          strokeWidth="1"
        />
        <circle
          className="hero-backdrop-ring"
          cx="720"
          cy="330"
          fill="none"
          r="336"
          stroke="rgb(var(--line) / 0.16)"
          strokeWidth="1"
        />
        <circle className="hero-backdrop-twinkle" cx="876" cy="330" r="2.5" fill="rgb(var(--accent))" />
        <circle className="hero-backdrop-twinkle hero-backdrop-twinkle-delay-1" cx="548" cy="502" r="2" fill="rgb(var(--brand))" />
        <circle className="hero-backdrop-twinkle hero-backdrop-twinkle-delay-2" cx="720" cy="86" r="2" fill="rgb(var(--accent))" />
        <circle className="hero-backdrop-twinkle hero-backdrop-twinkle-delay-3" cx="1007" cy="491" r="2.5" fill="rgb(var(--brand))" />
        <circle className="hero-backdrop-twinkle hero-backdrop-twinkle-delay-1" cx="474" cy="330" r="2" fill="rgb(var(--accent))" />
        <circle className="hero-backdrop-twinkle hero-backdrop-twinkle-delay-2" cx="720" cy="666" r="2.5" fill="rgb(var(--brand))" />
      </svg>
      <div className="hero-backdrop-bottom absolute inset-x-0 bottom-0 h-40" />
    </div>
  );
}

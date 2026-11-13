/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        "bg-alt": "rgb(var(--bg-alt) / <alpha-value>)",
        "bg-raised": "rgb(var(--bg-raised) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        "brand-fg": "rgb(var(--brand-fg) / <alpha-value>)",
        "brand-hover": "rgb(var(--brand-hover) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        band: "rgb(var(--band) / <alpha-value>)",
        "band-fg": "rgb(var(--band-fg) / <alpha-value>)",
        "band-button-bg": "rgb(var(--band-button-bg) / <alpha-value>)",
        "band-button-fg": "rgb(var(--band-button-fg) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
      },
      fontSize: {
        "display-xl": [
          "clamp(2.5rem, 5vw, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
        eyebrow: [
          "0.75rem",
          { lineHeight: "1.25", letterSpacing: "0.12em" },
        ],
        "step-number": ["2rem", { lineHeight: "1" }],
        "display-lg": [
          "clamp(2.25rem, 4.2vw, 3.75rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        h2: ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h3: [
          "clamp(1.25rem, 1.5vw, 1.5rem)",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "work-title": [
          "clamp(1.5rem, 1.75vw, 2rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        "project-title": [
          "clamp(1.75rem, 2vw, 2.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em" },
        ],
        quote: ["clamp(1.5rem, 2vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        body: ["var(--text-body)", { lineHeight: "1.6" }],
        small: ["0.9375rem", { lineHeight: "1.5" }],
      },
    },
  },
  plugins: [],
}
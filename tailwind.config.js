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
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        ember: "var(--color-ember)",
        "ember-deep": "var(--color-ember-deep)",
        navy: "#142130",
        cream: "#f4ede0",
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
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#0A0D0F",
        surface: "#10151A",
        "surface-raised": "#151B21",
        line: "#232B31",
        primary: {
          DEFAULT: "#013b46",
          light: "#0A5261",
          soft: "#0E4650",
        },
        accent: {
          DEFAULT: "#5FB8AE",
          dim: "#3D8078",
        },
        ink: {
          DEFAULT: "#EDF1F1",
          dim: "#A7B0B3",
          faint: "#647074",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-geist)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

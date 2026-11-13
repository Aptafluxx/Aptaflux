"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const themeColors = {
  light: "#F5F1E8",
  dark: "#060D10",
} as const;

type Theme = keyof typeof themeColors;

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function updateThemeColor(theme: Theme) {
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", themeColors[theme]);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof document === "undefined" ? "light" : getTheme(),
  );

  useEffect(() => {
    const currentTheme = getTheme();
    updateThemeColor(currentTheme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (!localStorage.getItem("theme")) {
        const nextTheme = media.matches ? "dark" : "light";
        document.documentElement.dataset.theme = nextTheme;
        setTheme(nextTheme);
        updateThemeColor(nextTheme);
      }
    };
    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <button
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      className="glass inline-flex size-11 items-center justify-center rounded-full text-fg transition-[background-color,color] duration-200 hover:bg-fg/10"
      onClick={() => {
        document.documentElement.dataset.theme = nextTheme;
        localStorage.setItem("theme", nextTheme);
        setTheme(nextTheme);
        updateThemeColor(nextTheme);
      }}
      type="button"
    >
      {theme === "dark" ? (
        <Sun aria-hidden="true" size={18} />
      ) : (
        <Moon aria-hidden="true" size={18} />
      )}
    </button>
  );
}

"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const listeners = new Set<() => void>();
const subscribe = (callback: () => void) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};
const getSnapshot = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";
const getServerSnapshot = (): Theme => "light";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("theme", theme);
  } catch {}
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#060D10" : "#F5F1E8");
  listeners.forEach((listener) => listener());
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      if (!localStorage.getItem("theme")) {
        applyTheme(media.matches ? "dark" : "light");
      }
    };
    media.addEventListener("change", handleSystemChange);
    return () => media.removeEventListener("change", handleSystemChange);
  }, []);

  const next: Theme = theme === "dark" ? "light" : "dark";

  return (
    <button
      aria-label={`Switch to ${next} mode`}
      aria-pressed={theme === "dark"}
      className="glass inline-flex size-11 items-center justify-center rounded-full text-fg transition-[background-color,color] duration-200 hover:bg-fg/10"
      onClick={() => {
        applyTheme(next);
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

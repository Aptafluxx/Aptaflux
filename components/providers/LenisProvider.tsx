"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let lenis: Lenis | undefined;

    const syncLenis = () => {
      if (motionPreference.matches) {
        lenis?.destroy();
        lenis = undefined;
      } else if (!lenis) {
        lenis = new Lenis({ autoRaf: true });
      }
    };

    syncLenis();
    motionPreference.addEventListener("change", syncLenis);

    return () => {
      motionPreference.removeEventListener("change", syncLenis);
      lenis?.destroy();
    };
  }, []);

  return children;
}

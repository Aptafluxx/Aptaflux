"use client";

import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { useEffect, type ReactNode } from "react";

type LenisProviderProps = {
  children: ReactNode;
};

export function LenisProvider({ children }: LenisProviderProps) {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const lenis = new Lenis({ autoRaf: true });

    return () => lenis.destroy();
  }, [shouldReduceMotion]);

  return children;
}

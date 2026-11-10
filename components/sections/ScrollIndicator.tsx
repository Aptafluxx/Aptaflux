"use client";

import { motion, useReducedMotion } from "framer-motion";
import { durations } from "@/lib/motion";

type ScrollIndicatorProps = {
  className?: string;
  label: string;
};

export function ScrollIndicator({ className = "", label }: ScrollIndicatorProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <div aria-label={label} className={`flex shrink-0 items-center gap-3 text-[15px] text-muted ${className}`} role="img">
      <span>{label}</span>
      <span className="relative h-12 w-px overflow-hidden bg-line">
        <motion.span
          animate={{ y: [0, 48] }}
          className="absolute left-0 top-0 h-4 w-px bg-ember"
          transition={{
            duration: durations.slow,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </span>
    </div>
  );
}

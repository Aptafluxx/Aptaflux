import type { Variants } from "framer-motion";

export const easing = [0.2, 0.7, 0.1, 1] as const;

export const durations = {
  fast: 0.3,
  medium: 0.6,
  slow: 1,
} as const;

export const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.medium, ease: easing },
  },
};

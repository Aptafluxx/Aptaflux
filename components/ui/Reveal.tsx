"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.revealed = "true";
        observer.unobserve(element);
      },
      { rootMargin: "-80px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delay}s` } as CSSProperties;

  return (
    <div className={`scroll-reveal ${className ?? ""}`} ref={ref} style={style}>
      {children}
    </div>
  );
}

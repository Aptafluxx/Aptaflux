"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  if (pathname === "/") {
    return children;
  }

  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  );
}

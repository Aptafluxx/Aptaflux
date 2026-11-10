"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { durations, easing } from "@/lib/motion";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("button, a")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) {
        return;
      }

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const firstElement = focusableElements.item(0);
      const lastElement = focusableElements.item(focusableElements.length - 1);
      const activeElement = document.activeElement;

      if (!menuRef.current.contains(activeElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement)?.focus();
      } else if (event.shiftKey && activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      } else if (!event.shiftKey && activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          ref={menuRef}
          aria-label={site.mobileNavigation}
          className="fixed inset-0 z-50 bg-bg"
          initial={shouldReduceMotion ? false : { clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: shouldReduceMotion ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" }}
          transition={{
            duration: shouldReduceMotion ? 0 : durations.medium,
            ease: easing,
          }}
          role="dialog"
          aria-modal="true"
        >
          <Container className="flex min-h-svh flex-col pb-10 pt-6">
            <div className="flex items-center justify-between border-b border-line pb-6">
              <Link
                className="font-display text-2xl font-bold tracking-[-0.04em]"
                href="/"
                onClick={onClose}
                prefetch={false}
              >
                {site.brand}
              </Link>
              <button
                aria-label={site.closeMenu}
                className="py-2 text-sm font-semibold text-text"
                onClick={onClose}
                type="button"
              >
                {site.closeMenu}
              </button>
            </div>

            <nav aria-label={site.mobileNavigation} className="flex flex-1 flex-col justify-center">
              {site.navigation.map((item, index) => (
                <Link
                  key={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className="w-fit py-1 font-display text-[clamp(3.25rem,12vw,6.5rem)] leading-[1.05] tracking-[-0.04em] transition-colors hover:text-ember"
                  href={item.href}
                  onClick={onClose}
                  prefetch={false}
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              className="w-fit border-b border-ember pb-2 text-sm font-semibold text-ember"
              href="/contact"
              onClick={onClose}
              prefetch={false}
            >
              {site.callToAction}
            </Link>
          </Container>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

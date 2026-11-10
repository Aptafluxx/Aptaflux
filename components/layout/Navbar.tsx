"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const previousScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80 || currentScrollY < previousScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > previousScrollY.current) {
        setIsVisible(false);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b border-line bg-bg transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-16">
          <Link
            aria-label={site.brand}
            className="font-display text-2xl font-bold tracking-[-0.04em]"
            href="/"
          >
            {site.brand}
          </Link>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 min-[820px]:flex">
            {site.navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/work" && pathname.startsWith("/work/"));

              return (
                <Link
                  key={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-2 text-sm transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-ember after:transition-transform ${
                    isActive
                      ? "text-ember after:scale-x-100"
                      : "text-muted hover:text-text after:scale-x-0 hover:after:scale-x-100"
                  }`}
                  href={item.href}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden min-[820px]:block">
            <Button href="/contact">{site.callToAction}</Button>
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? site.closeMenu : site.openMenu}
            className="py-3 text-sm font-semibold text-text min-[820px]:hidden"
            onClick={() => setIsMenuOpen(true)}
            type="button"
          >
            {site.openMenu}
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

const MobileMenu = dynamic(
  () => import("./MobileMenu").then((module) => module.MobileMenu),
  { ssr: false },
);

export function Navbar() {
  const pathname = usePathname();
  const previousScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasOpenedMenu, setHasOpenedMenu] = useState(false);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const openMenu = () => {
    setHasOpenedMenu(true);
    setIsMenuOpen(true);
  };

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
        <Container className="flex h-20 items-center justify-between">
          <Link
            aria-label={site.brand}
            className="font-display text-2xl font-bold tracking-[-0.04em]"
            href="/"
          >
            {site.brand}
          </Link>

          <div className="hidden items-center gap-8 min-[820px]:flex">
            <nav aria-label="Main navigation" className="flex items-center gap-8">
              {site.navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/work" && pathname.startsWith("/work/"));

                return (
                  <Link
                    key={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-2 text-[15px] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-ember after:transition-transform ${
                      isActive
                        ? "text-ember after:scale-x-100"
                        : "text-muted hover:text-text after:scale-x-0 hover:after:scale-x-100"
                    }`}
                    href={item.href}
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Button className="text-[15px]" href="/contact">{site.callToAction}</Button>
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? site.closeMenu : site.openMenu}
            className="py-3 text-sm font-semibold text-text min-[820px]:hidden"
            onClick={openMenu}
            type="button"
          >
            {site.openMenu}
          </button>
        </Container>
      </header>

      {hasOpenedMenu ? (
        <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
      ) : null}
    </>
  );
}

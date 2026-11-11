"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { servicesContent } from "@/content/services";
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
  const [servicesOpenPath, setServicesOpenPath] = useState<string | null>(null);
  const isServicesOpen = servicesOpenPath === pathname;
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const ignoreNextFocusOpen = useRef(false);
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

  useEffect(() => {
    if (!isServicesOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpenPath(null);
        if (document.activeElement !== servicesButtonRef.current) {
          ignoreNextFocusOpen.current = true;
          servicesButtonRef.current?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isServicesOpen]);

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
            className="font-body text-h3 font-bold tracking-[-0.04em]"
            href="/"
          >
            {site.brand}
          </Link>

          <div className="hidden items-center gap-8 min-[820px]:flex">
            <nav aria-label="Main navigation" className="flex items-center gap-8">
              {site.navigation.map((item) => {
                if (item.href === "/services") {
                  const isActive = pathname.startsWith("/services");
                  return (
                    <div
                      className="relative"
                      key={item.href}
                      onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                          setServicesOpenPath(null);
                        }
                      }}
                      onMouseEnter={() => setServicesOpenPath(pathname)}
                      onMouseLeave={(event) => {
                        if (
                          !event.currentTarget.contains(document.activeElement)
                        ) {
                          setServicesOpenPath(null);
                        }
                      }}
                    >
                      <button
                        ref={servicesButtonRef}
                        aria-controls="services-menu"
                        aria-expanded={isServicesOpen}
                        aria-haspopup="true"
                        className={`relative py-2 text-small transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-ember after:transition-transform ${
                          isActive
                            ? "text-ember after:scale-x-100"
                            : "text-muted hover:text-text after:scale-x-0 hover:after:scale-x-100"
                        }`}
                        onClick={() =>
                          setServicesOpenPath(isServicesOpen ? null : pathname)
                        }
                        onFocus={() => {
                          if (ignoreNextFocusOpen.current) {
                            ignoreNextFocusOpen.current = false;
                            return;
                          }
                          setServicesOpenPath(pathname);
                        }}
                        type="button"
                      >
                        {item.label}
                      </button>
                      {isServicesOpen ? (
                        <div
                          className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-lg border border-line bg-surface p-2 shadow-xl"
                          id="services-menu"
                        >
                          {servicesContent.services.map((service) => (
                            <Link
                              className="block rounded-md px-4 py-3 text-small text-muted transition-colors hover:bg-bg hover:text-text focus-visible:bg-bg"
                              href={`/services/${service.slug}`}
                              key={service.slug}
                              onClick={() => setServicesOpenPath(null)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            className="mt-1 block rounded-md border-t border-line px-4 py-3 text-small font-semibold text-ember transition-colors hover:text-text"
                            href="/services"
                            onClick={() => setServicesOpenPath(null)}
                          >
                            All services
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  );
                }

                const isActive =
                  pathname === item.href ||
                  (item.href === "/work" && pathname.startsWith("/work/"));

                return (
                  <Link
                    key={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative py-2 text-small transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-ember after:transition-transform ${
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
            <Button className="text-small" href="/contact">{site.callToAction}</Button>
          </div>

          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? site.closeMenu : site.openMenu}
            className="py-3 text-small font-semibold text-text min-[820px]:hidden"
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

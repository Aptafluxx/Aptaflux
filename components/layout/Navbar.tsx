"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Bot,
  ChevronDown,
  Globe,
  Menu as MenuIcon,
  PanelsTopLeft,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { FocusEvent } from "react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { servicesContent } from "@/content/services";
import { site } from "@/content/site";

const MobileMenu = dynamic(
  () => import("./MobileMenu").then((module) => module.MobileMenu),
  { ssr: false },
);

const serviceIcons: LucideIcon[] = [Globe, Bot, PanelsTopLeft];

export function Navbar() {
  const pathname = usePathname();
  const navbarCenterRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousScrollY = useRef(0);
  const hasFocus = useRef(false);
  const ignoreNextFocusOpen = useRef(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [pinnedPath, setPinnedPath] = useState<string | null>(null);
  const isServicesOpen =
    hoveredPath === pathname || pinnedPath === pathname;

  const clearTimers = useCallback(() => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    hoverTimer.current = null;
    closeTimer.current = null;
  }, []);

  const closeServices = useCallback(() => {
    clearTimers();
    setHoveredPath(null);
    setPinnedPath(null);
  }, [clearTimers]);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    requestAnimationFrame(() => {
      if (window.innerWidth < 1024) menuToggleRef.current?.focus();
    });
  }, []);
  const openMenu = () => {
    setIsMenuOpen(true);
    setIsVisible(true);
  };

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) closeMenu();
    };

    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, [closeMenu]);

  const openOnIntent = useCallback(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    if (closeTimer.current) clearTimeout(closeTimer.current);
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      setHoveredPath(pathname);
      setIsVisible(true);
      hoverTimer.current = null;
    }, 120);
  }, [pathname]);

  const closeAfterIntent = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      const pointerInside =
        triggerRef.current?.matches(":hover") ||
        panelRef.current?.matches(":hover");
      const focusInside =
        triggerRef.current?.contains(document.activeElement) ||
        panelRef.current?.contains(document.activeElement);

      if (!pointerInside && !focusInside) setHoveredPath(null);
      closeTimer.current = null;
    }, 250);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 24);

      if (
        currentScrollY < 80 ||
        currentScrollY < previousScrollY.current ||
        hasFocus.current ||
        isServicesOpen ||
        isMenuOpen
      ) {
        setIsVisible(true);
      } else if (currentScrollY > previousScrollY.current) {
        setIsVisible(false);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen, isServicesOpen]);

  useEffect(() => {
    clearTimers();
  }, [clearTimers, pathname]);

  useEffect(() => {
    if (!isServicesOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeServices();
        if (document.activeElement !== servicesButtonRef.current) {
          ignoreNextFocusOpen.current = true;
          servicesButtonRef.current?.focus();
        }
        return;
      }

      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      const items =
        panelRef.current?.querySelectorAll<HTMLAnchorElement>(
          '[role="menuitem"]',
        );
      if (!items?.length) return;

      event.preventDefault();
      const currentIndex = Array.from(items).indexOf(
        document.activeElement as HTMLAnchorElement,
      );
      const nextIndex =
        event.key === "ArrowDown"
          ? (currentIndex + 1) % items.length
          : (currentIndex <= 0 ? items.length : currentIndex) - 1;
      items.item(nextIndex)?.focus();
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !triggerRef.current?.contains(target) &&
        !panelRef.current?.contains(target)
      ) {
        setPinnedPath(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [closeServices, isServicesOpen]);

  useLayoutEffect(() => {
    if (!isServicesOpen) return;

    const updatePanelPosition = () => {
      const center = navbarCenterRef.current?.getBoundingClientRect();
      const trigger = triggerRef.current?.getBoundingClientRect();
      if (!center || !trigger || !panelRef.current) return;

      panelRef.current.style.left = `${
        trigger.left + trigger.width / 2 - center.left
      }px`;
    };

    updatePanelPosition();
    window.addEventListener("resize", updatePanelPosition);

    const observer = new ResizeObserver(updatePanelPosition);
    if (navbarCenterRef.current) observer.observe(navbarCenterRef.current);
    if (triggerRef.current) observer.observe(triggerRef.current);

    return () => {
      window.removeEventListener("resize", updatePanelPosition);
      observer.disconnect();
    };
  }, [isServicesOpen]);

  useLayoutEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const update = () => {
      const top = parseFloat(getComputedStyle(header).top) || 16;
      document.documentElement.style.setProperty(
        "--navbar-bottom",
        `${Math.round(top + header.offsetHeight)}px`,
      );
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(header);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const handleFocusCapture = (event: FocusEvent<HTMLElement>) => {
    hasFocus.current = true;
    setIsVisible(true);
    if (
      event.target instanceof HTMLElement &&
      event.target.matches(":focus-visible") &&
      (triggerRef.current?.contains(event.target) ||
        panelRef.current?.contains(event.target))
    ) {
      if (ignoreNextFocusOpen.current) {
        ignoreNextFocusOpen.current = false;
        return;
      }
      openOnIntent();
    }
  };

  const handleBlurCapture = (event: FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      hasFocus.current = false;
    }

    if (
      (triggerRef.current?.contains(event.target) ||
        panelRef.current?.contains(event.target)) &&
      !triggerRef.current?.contains(event.relatedTarget as Node | null) &&
      !panelRef.current?.contains(event.relatedTarget as Node | null)
    ) {
      closeAfterIntent();
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed inset-x-0 top-[calc(16px+env(safe-area-inset-top))] z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "navbar-hidden"
        } ${isScrolled ? "navbar-scrolled" : ""}`}
        onBlurCapture={handleBlurCapture}
        onFocusCapture={handleFocusCapture}
      >
        <Container className="grid min-h-[46px] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2">
          <Link
            aria-label={site.brand}
            className="glass inline-flex h-11 w-fit items-center rounded-full px-3.5 transition-colors focus-visible:outline-offset-2"
            href="/"
          >
            <Logo compact />
          </Link>

          <div
            className="relative hidden w-fit justify-self-center min-[1024px]:block"
            ref={navbarCenterRef}
          >
            <nav
              aria-label="Main navigation"
              className="glass flex w-fit items-center gap-1 rounded-full p-1.5"
            >
              {site.navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href === "/services" &&
                    pathname.startsWith("/services/")) ||
                  (item.href === "/work" && pathname.startsWith("/work/"));

                if (item.href === "/services") {
                  return (
                    <div
                      className={`services-trigger ${
                        isActive ? "services-trigger-active" : ""
                      } ${isServicesOpen ? "services-trigger-open" : ""}`}
                      key={item.href}
                      onMouseEnter={openOnIntent}
                      onMouseLeave={closeAfterIntent}
                      ref={triggerRef}
                    >
                      <Link
                        aria-current={isActive ? "page" : undefined}
                        className="services-trigger-link"
                        href={item.href}
                        onClick={closeServices}
                        prefetch={false}
                      >
                        {item.label}
                      </Link>
                      <button
                        ref={servicesButtonRef}
                        aria-label="Toggle services menu"
                        aria-expanded={isServicesOpen}
                        aria-controls="services-menu"
                        aria-haspopup="menu"
                        className="services-trigger-chevron"
                        onClick={() => {
                          clearTimers();
                          setPinnedPath((pinned) =>
                            pinned === pathname ? null : pathname,
                          );
                          setIsVisible(true);
                        }}
                        type="button"
                      >
                        <ChevronDown
                          aria-hidden="true"
                          className={`transition-transform duration-200 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                          size={14}
                        />
                      </button>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`nav-link ${isActive ? "nav-link-active" : ""}`}
                    href={item.href}
                    prefetch={false}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div
              aria-hidden={!isServicesOpen}
              className={`services-panel-bridge absolute top-full z-50 pt-3 ${
                isServicesOpen ? "services-panel-open" : ""
              }`}
              inert={!isServicesOpen}
              onMouseEnter={openOnIntent}
              onMouseLeave={closeAfterIntent}
              ref={panelRef}
            >
              <div
                aria-label="Services"
                className="glass services-panel w-[min(460px,calc(100vw-2.5rem))] rounded-2xl p-3"
                id="services-menu"
                role="menu"
              >
                {servicesContent.services.map((service, index) => {
                  const Icon = serviceIcons[index % serviceIcons.length];
                  return (
                    <Link
                      aria-current={
                        pathname === `/services/${service.slug}`
                          ? "page"
                          : undefined
                      }
                      className="service-menu-item group flex min-w-0 items-center gap-3 rounded-xl px-3 py-3 transition-colors"
                      href={`/services/${service.slug}`}
                      key={service.slug}
                      onClick={closeServices}
                      prefetch={false}
                      role="menuitem"
                    >
                      <IconBadge icon={Icon} />
                      <span className="min-w-0">
                        <span className="service-menu-title block text-small font-semibold text-fg">
                          {service.name}
                        </span>
                        <span className="block text-[14px] leading-5 text-muted">
                          {service.promise}
                        </span>
                      </span>
                    </Link>
                  );
                })}
                <Link
                  className="mt-1 flex min-h-11 items-center justify-between border-t border-line px-3 pt-2 text-small font-semibold text-fg transition-colors hover:text-brand focus-visible:text-brand"
                  href="/services"
                  onClick={closeServices}
                  prefetch={false}
                  role="menuitem"
                >
                  View all services
                  <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 justify-self-end min-[1024px]:flex">
            <ThemeToggle />
            <Link
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-brand px-5 py-3 text-small font-semibold text-brand-fg transition-transform duration-200 hover:-translate-y-px hover:bg-brand-hover focus-visible:outline-offset-4"
              href="/contact"
              prefetch={false}
            >
              {site.callToAction}
              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                size={16}
              />
            </Link>
          </div>

          <button
            ref={menuToggleRef}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-panel"
            aria-label={isMenuOpen ? "Close site menu" : "Open site menu"}
            className="mobile-menu-toggle glass col-start-3 inline-flex h-11 w-fit items-center justify-self-end gap-2 rounded-full px-4 text-small font-semibold text-fg transition-colors hover:bg-bg-raised/10 min-[1024px]:hidden"
            onClick={isMenuOpen ? closeMenu : openMenu}
            type="button"
          >
            {isMenuOpen ? site.closeMenu : site.openMenu}
            {isMenuOpen ? <X aria-hidden="true" size={16} /> : <MenuIcon aria-hidden="true" size={16} />}
          </button>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        menuToggleRef={menuToggleRef}
        onClose={closeMenu}
      />
    </>
  );
}

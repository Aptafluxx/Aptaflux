"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Camera,
  ChevronDown,
  Globe,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import type { LucideIcon } from "lucide-react";
import { servicesContent } from "@/content/services";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

type MobileMenuProps = {
  isOpen: boolean;
  menuToggleRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
};

const socialIcons: Partial<Record<string, LucideIcon>> = {
  LinkedIn: BriefcaseBusiness,
  Instagram: Camera,
};

export function MobileMenu({
  isOpen,
  menuToggleRef,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);
  const shouldReduceMotion = useReducedMotion();
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const socialLinks = site.socials.flatMap((social) => {
    const Icon = socialIcons[social.label];
    return social.href && Icon ? [{ ...social, Icon }] : [];
  });

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const previousBodyStyles = {
      left: body.style.left,
      overflow: body.style.overflow,
      position: body.style.position,
      right: body.style.right,
      top: body.style.top,
      width: body.style.width,
    };

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("[data-first-row]")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !menuRef.current) return;

      const panelElements = Array.from(
        menuRef.current.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ),
      );
      const toggle = menuToggleRef.current;
      const firstPanelElement = panelElements[0];
      const lastPanelElement = panelElements[panelElements.length - 1];
      const activeElement = document.activeElement;

      if (!menuRef.current.contains(activeElement) && activeElement !== toggle) {
        event.preventDefault();
        (event.shiftKey ? toggle : firstPanelElement)?.focus();
      } else if (activeElement === toggle) {
        event.preventDefault();
        (event.shiftKey ? lastPanelElement : firstPanelElement)?.focus();
      } else if (event.shiftKey && activeElement === firstPanelElement) {
        event.preventDefault();
        toggle?.focus();
      } else if (!event.shiftKey && activeElement === lastPanelElement) {
        event.preventDefault();
        toggle?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      body.style.left = previousBodyStyles.left;
      body.style.overflow = previousBodyStyles.overflow;
      body.style.position = previousBodyStyles.position;
      body.style.right = previousBodyStyles.right;
      body.style.top = previousBodyStyles.top;
      body.style.width = previousBodyStyles.width;
      window.scrollTo(0, scrollY);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, menuToggleRef, onClose]);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  const isActive = (href: string) =>
    pathname === href ||
    (href === "/services" && pathname.startsWith("/services/")) ||
    (href === "/work" && pathname.startsWith("/work/"));

  return (
    <>
      <button
        aria-hidden={!isOpen}
        aria-label="Close site menu"
        className={`mobile-menu-backdrop fixed inset-0 z-40 ${
          isOpen ? "mobile-menu-backdrop-open" : ""
        }`}
        inert={!isOpen}
        onClick={onClose}
        tabIndex={-1}
        type="button"
      />
      <div
        ref={menuRef}
        aria-hidden={!isOpen}
        aria-label="Site menu"
        aria-modal={isOpen}
        className={`mobile-menu-panel fixed z-[45] ${
          isOpen ? "mobile-menu-panel-open" : ""
        }`}
        id="mobile-menu-panel"
        inert={!isOpen}
        role="dialog"
      >
        <nav aria-label={site.mobileNavigation} className="flex flex-col gap-1">
          {site.navigation.map((item) =>
            item.href === "/services" ? (
              <div key={item.href}>
                <button
                  aria-controls="mobile-services-menu"
                  aria-current={isActive(item.href) ? "page" : undefined}
                  aria-expanded={isServicesExpanded}
                  className={`mobile-menu-row ${
                    isActive(item.href) ? "mobile-menu-row-active" : ""
                  }`}
                  onClick={() =>
                    setIsServicesExpanded((expanded) => !expanded)
                  }
                  type="button"
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${
                      isServicesExpanded ? "rotate-180" : ""
                    }`}
                    size={18}
                  />
                </button>
                <motion.div
                  aria-hidden={!isServicesExpanded}
                  aria-label="Services"
                  animate={{
                    height: isServicesExpanded ? "auto" : 0,
                    opacity: isServicesExpanded ? 1 : 0,
                  }}
                  className="overflow-hidden"
                  id="mobile-services-menu"
                  inert={!isServicesExpanded}
                  initial={false}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="mobile-services-list">
                    {servicesContent.services.map((service) => (
                      <Link
                        aria-current={
                          pathname === `/services/${service.slug}`
                            ? "page"
                            : undefined
                        }
                        className="mobile-service-link"
                        href={`/services/${service.slug}`}
                        key={service.slug}
                        onClick={onClose}
                        prefetch={false}
                      >
                        <span className="mobile-service-title">
                          {service.name}
                        </span>
                        <span className="mobile-service-promise">
                          {service.promise}
                        </span>
                      </Link>
                    ))}
                    <Link
                      aria-current={
                        pathname === "/services" ? "page" : undefined
                      }
                      className="mobile-service-all"
                      href="/services"
                      onClick={onClose}
                      prefetch={false}
                    >
                      View all services
                    </Link>
                  </div>
                </motion.div>
              </div>
            ) : (
              <Link
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`mobile-menu-row ${
                  isActive(item.href) ? "mobile-menu-row-active" : ""
                }`}
                data-first-row={item.href === "/" ? "true" : undefined}
                href={item.href}
                key={item.href}
                onClick={onClose}
                prefetch={false}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="mobile-menu-divider" />

        <div className="mobile-menu-contact">
          <a
            className="mobile-menu-contact-row"
            href={`mailto:${site.email}`}
            onClick={onClose}
          >
            <Mail aria-hidden="true" size={18} />
            {site.email}
          </a>
          <div className="mobile-menu-contact-row">
            <Globe aria-hidden="true" size={18} />
            {site.contact.remoteFirst}, {site.contact.timeZoneLabel}
          </div>
        </div>

        <div className="mobile-menu-actions">
          <ThemeToggle />
          {socialLinks.length > 0 ? (
            <nav aria-label={site.socialNavigation} className="flex gap-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  aria-label={label}
                  className="mobile-menu-social"
                  href={href}
                  key={label}
                  onClick={onClose}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon aria-hidden="true" size={18} />
                </a>
              ))}
            </nav>
          ) : null}
          <Link
            className={`mobile-menu-cta ${
              socialLinks.length === 0 ? "mobile-menu-cta-full" : ""
            }`}
            href="/contact"
            onClick={onClose}
            prefetch={false}
          >
            {site.callToAction}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}

"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import type { SyntheticEvent } from "react";

export type LightboxItem = {
  src: string;
  title: string;
  text: string;
};

type LightboxProps = {
  items: LightboxItem[];
  index: number;
  projectName: string;
  onClose: () => void;
  onIndexChange: (next: number) => void;
};

const iconButton =
  "flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white transition-colors hover:border-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function Lightbox({
  items,
  index,
  projectName,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = items.length;
  const item = items[index];

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const html = document.documentElement;
    const scrollbar = window.innerWidth - html.clientWidth;
    const previousOverflow = html.style.overflow;
    const previousPadding = document.body.style.paddingRight;

    html.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus({ preventScroll: true });

    return () => {
      html.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
      opener?.focus?.({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowLeft") {
        onIndexChange((index - 1 + count) % count);
      } else if (event.key === "ArrowRight") {
        onIndexChange((index + 1) % count);
      } else if (event.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          "button:not([disabled])",
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus({ preventScroll: true });
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus({ preventScroll: true });
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [count, index, onClose, onIndexChange]);

  if (typeof document === "undefined" || !item) return null;

  const stop = (event: SyntheticEvent) => event.stopPropagation();

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${projectName} screens`}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/85 p-4 backdrop-blur-sm"
      onClick={(event) => {
        stop(event);
        onClose();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        aria-label="Close"
        className={`${iconButton} absolute right-4 top-4`}
        onClick={(event) => {
          stop(event);
          onClose();
        }}
      >
        <X aria-hidden="true" size={20} />
      </button>

      <div
        className="relative h-[72vh] w-[92vw] max-w-6xl"
        onClick={stop}
      >
        <Image
          key={item.src}
          src={item.src}
          alt={`${projectName}: ${item.title}`}
          fill
          sizes="92vw"
          className="object-contain"
        />
      </div>

      <div
        className="flex w-[92vw] max-w-6xl items-center justify-between gap-4 text-white"
        onClick={stop}
      >
        <p className="min-w-0 text-[15px]">
          <strong>{item.title}</strong>
          <span className="opacity-80"> — {item.text}</span>
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            aria-label="Previous screen"
            className={iconButton}
            onClick={(event) => {
              stop(event);
              onIndexChange((index - 1 + count) % count);
            }}
          >
            <ArrowLeft aria-hidden="true" size={18} />
          </button>
          <span aria-live="polite" className="text-sm tabular-nums">
            {index + 1} / {count}
          </span>
          <button
            type="button"
            aria-label="Next screen"
            className={iconButton}
            onClick={(event) => {
              stop(event);
              onIndexChange((index + 1) % count);
            }}
          >
            <ArrowRight aria-hidden="true" size={18} />
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

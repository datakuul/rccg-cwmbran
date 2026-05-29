"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock scroll, focus the close button, and trap Escape while open.
  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[90] lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/70 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={cn(
          "absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-charcoal shadow-2xl transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Image
              src="/images/brand/rccg-logo.png"
              alt={site.name}
              width={40}
              height={40}
              className="size-9 object-contain"
            />
            <span className="font-display text-sm font-semibold">
              Overcomers House
            </span>
          </Link>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-ivory/80 hover:bg-ivory/10 hover:text-ivory"
          >
            <X className="size-6" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-lg font-medium transition",
                      active
                        ? "bg-gold/15 text-gold-soft"
                        : "text-ivory/85 hover:bg-ivory/5 hover:text-ivory",
                    )}
                  >
                    {link.label}
                  </Link>

                  {link.children ? (
                    <ul className="mb-1 ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-ivory/10 pl-3">
                      {link.children.map((child) => {
                        const childActive =
                          pathname === child.href ||
                          pathname.startsWith(`${child.href}/`);
                        return (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              aria-current={childActive ? "page" : undefined}
                              className={cn(
                                "block rounded-lg px-4 py-2.5 text-base font-medium transition",
                                childActive
                                  ? "bg-gold/15 text-gold-soft"
                                  : "text-ivory/70 hover:bg-ivory/5 hover:text-ivory",
                              )}
                            >
                              {child.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-ivory/10 p-5">
          <Button href="/plan-your-visit" onClick={onClose} className="w-full" size="lg">
            Plan Your Visit
          </Button>
          <p className="mt-4 text-center text-sm text-muted">
            {site.serviceTimes[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

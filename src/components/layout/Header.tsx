"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MapPin, Clock, ChevronDown } from "lucide-react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const transparentAtTop = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        transparentAtTop
          ? "bg-transparent"
          : "border-b border-ivory/10 bg-ink/90 backdrop-blur-md",
      )}
    >
      {/* Utility top bar */}
      <div
        className={cn(
          "hidden border-b border-ivory/10 text-xs text-ivory/70 transition-opacity md:block",
          transparentAtTop && "opacity-0",
        )}
        aria-hidden={transparentAtTop}
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-2 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-3.5 text-gold" />
            Sundays at 10:00 AM
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5 text-gold" />
            {site.venue}, Cwmbran, {site.postcode}
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg"
          aria-label={`${site.name} — home`}
        >
          <Image
            src="/images/brand/rccg-logo.png"
            alt=""
            width={48}
            height={48}
            priority
            className="size-10 object-contain sm:size-11"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-tight text-ivory">
              Overcomers House
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-gold/90">
              RCCG · Cwmbran
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const childActive = link.children?.some(
                (c) =>
                  pathname === c.href || pathname.startsWith(`${c.href}/`),
              );
              const active =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`) ||
                Boolean(childActive);

              if (link.children) {
                return (
                  <li key={link.href} className="group relative">
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      aria-haspopup="menu"
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                        active ? "text-gold-soft" : "text-ivory/80 hover:text-ivory",
                      )}
                    >
                      {link.label}
                      <ChevronDown className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                    </Link>
                    {/* Dropdown: opens on hover or keyboard focus */}
                    <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <ul className="min-w-52 overflow-hidden rounded-2xl border border-ivory/10 bg-charcoal p-1.5 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]">
                        {link.children.map((child) => {
                          const childIsActive =
                            pathname === child.href ||
                            pathname.startsWith(`${child.href}/`);
                          return (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                aria-current={childIsActive ? "page" : undefined}
                                className={cn(
                                  "block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors",
                                  childIsActive
                                    ? "bg-gold/15 text-gold-soft"
                                    : "text-ivory/80 hover:bg-ivory/5 hover:text-ivory",
                                )}
                              >
                                {child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-gold-soft"
                        : "text-ivory/80 hover:text-ivory",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/plan-your-visit" size="sm" className="hidden sm:inline-flex">
            Plan Your Visit
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="rounded-full p-2 text-ivory hover:bg-ivory/10 lg:hidden"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      <MobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-ink transition-[height,border-color] duration-300 ${
        compact || open ? "border-line" : "border-transparent"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-[60] focus:bg-teal focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <nav
        className={`mx-auto flex max-w-site items-center justify-between px-5 sm:px-8 lg:px-12 ${
          compact ? "h-14" : "h-[4.5rem] md:h-20"
        } transition-[height] duration-300`}
        aria-label="Primary"
      >
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg tracking-tight text-mist md:text-xl">
            VisionBrew
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.18em] text-muted sm:inline">
            {site.domain}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-300 ${
                    active ? "text-mist" : "text-muted hover:text-mist"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-mist lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className={`fixed inset-x-0 bottom-0 z-40 flex flex-col bg-ink px-5 pb-10 pt-8 sm:px-8 lg:hidden ${
            compact ? "top-14" : "top-[4.5rem] md:top-20"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-3 font-display text-3xl tracking-tight ${
                      active ? "text-mist" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-auto pt-8">
            <Button href="/contact" variant="primary" className="w-full">
              Start a Project
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}

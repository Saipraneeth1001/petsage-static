"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { siteContent } from "@/content/siteContent";
import { Container } from "@/components/Container";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = useMemo(() => siteContent.nav.links, []);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur">
      <Container className="py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-ink-900 text-white grid place-items-center text-sm font-semibold">
            PS
          </div>
          <div>
            <div className="text-sm font-semibold leading-none">{siteContent.brand.name}</div>
            <div className="text-xs text-ink-500">{siteContent.brand.tagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm text-ink-700 hover:text-ink-900 transition",
                  active && "text-ink-900 font-semibold"
                )}
              >
                {l.label}
              </Link>
            );
          })}
          <Link
            href="/#waitlist"
            className="rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white hover:bg-ink-950 transition"
          >
            {siteContent.nav.ctaLabel}
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-black/10 px-3 py-2 text-sm"
          aria-label={siteContent.ui.openMenuAriaLabel}
          onClick={() => setOpen((v) => !v)}
        >
          {siteContent.ui.menuLabel}
        </button>
      </Container>

      {open ? (
        <div className="md:hidden border-t border-black/5 bg-white">
          <Container className="py-4">
            <div className="grid gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-3 py-2 text-sm text-ink-800 hover:bg-surface-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/#waitlist"
                className="mt-2 rounded-xl bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {siteContent.nav.ctaLabel}
              </Link>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

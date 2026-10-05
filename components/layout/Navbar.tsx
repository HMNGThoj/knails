"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";
import { setLocaleAction } from "@/app/actions/locale";
import { translate, type Locale } from "@/lib/i18n";

const links = [
  { href: "/", label: "Home" },
  { href: "/homes", label: "Homes for Sale" },
  { href: "/my-listings", label: "My Listings" },
  { href: "/sell", label: "Sell" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <nav aria-label={translate(locale, "Primary")} className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl tracking-tight text-ink">
          {site.name}
          <span className="ml-2 hidden text-[11px] uppercase tracking-[0.18em] text-gold-deep sm:inline">{translate(locale, "Realtor")}</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`text-sm transition-colors hover:text-gold-deep ${
                  pathname === link.href
                    ? "text-ink underline decoration-gold decoration-2 underline-offset-8"
                    : "text-ink/70"
                }`}
              >
                {translate(locale, link.label)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <form action={setLocaleAction} className="flex items-center rounded-lg border border-line p-1" aria-label={translate(locale, "Website language")}>
            <input type="hidden" name="returnTo" value={pathname} />
            <button type="submit" name="locale" value="en" aria-current={locale === "en" ? "true" : undefined} className={`min-h-9 px-2 text-xs font-medium transition sm:px-3 ${locale === "en" ? "bg-ink text-paper" : "text-ink/70 hover:text-ink"}`}>
              English
            </button>
            <button type="submit" name="locale" value="hm" aria-current={locale === "hm" ? "true" : undefined} className={`min-h-9 px-2 text-xs font-medium transition sm:px-3 ${locale === "hm" ? "bg-ink text-paper" : "text-ink/70 hover:text-ink"}`}>
              Hmoob
            </button>
          </form>
          <Link href="/book" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition hover:bg-gold hover:text-ink lg:inline-block">
            {translate(locale, "Book a consult")}
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={translate(locale, open ? "Close menu" : "Open menu")}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 h-px w-5 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-3 h-px w-5 bg-ink transition ${open ? "top-1.5 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper lg:hidden">
          <ul className="mx-auto max-w-7xl px-4 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-line text-base text-ink/80">
                  {translate(locale, link.label)}
                </Link>
              </li>
            ))}
            <li className="py-4">
              <Link href="/book" onClick={() => setOpen(false)} className="block rounded-full bg-ink py-3 text-center text-paper">
                {translate(locale, "Book a consult")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

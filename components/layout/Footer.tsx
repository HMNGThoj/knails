import Link from "next/link";
import { site } from "@/lib/site";
import { translate, type Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-line bg-stone">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl text-ink">{site.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold-deep">{site.company}</p>
          <p className="mt-3 max-w-md text-sm text-ink/70">
            {translate(locale, "Local real estate guidance for buyers and sellers in Clovis, Fresno, and the surrounding Central Valley communities.")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">{translate(locale, "Explore")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li><Link href="/homes" className="hover:text-gold-deep">{translate(locale, "Homes for Sale")}</Link></li>
            <li><Link href="/my-listings" className="hover:text-gold-deep">{translate(locale, "My Listings")}</Link></li>
            <li><Link href="/sell" className="hover:text-gold-deep">{translate(locale, "Sell")}</Link></li>
            <li><Link href="/testimonials" className="hover:text-gold-deep">{translate(locale, "Testimonials")}</Link></li>
            <li><Link href="/blog" className="hover:text-gold-deep">{translate(locale, "Blog")}</Link></li>
            <li><Link href="/book" className="hover:text-gold-deep">{translate(locale, "Book an appointment")}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">{translate(locale, "Contact")}</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink/70">
            <li>{site.office}</li>
            <li><a href="https://www.facebook.com/KayingRealtor" target="_blank" rel="noreferrer" className="hover:text-gold-deep">Facebook</a></li>
            <li><Link href="/contact" className="hover:text-gold-deep">{translate(locale, "Contact Kaying")}</Link></li>
            <li>{site.license}</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

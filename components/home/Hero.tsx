import Link from "next/link";
import { translate, type Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  return (
    <section className="bg-ink text-paper">

      <div className="mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-20 lg:pt-44">
        <p className="text-xs uppercase tracking-[0.18em] text-gold">{translate(locale, "Clovis • Fresno • Central Valley")}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl">
          {translate(locale, "Your next move starts with trusted guidance from Kaying Vang.")}
        </h1>
        <p className="mt-5 max-w-xl text-base text-paper/80 sm:text-lg">
          {translate(locale, "Real estate advice rooted in local market experience, honest strategy, and a strong understanding of what buyers and sellers need in Fresno and Clovis.")}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/homes"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gold px-6 text-base font-medium text-ink transition hover:bg-gold/90"
          >
            {translate(locale, "View current listings")}
          </Link>
          <Link
            href="/book"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 text-base font-medium text-paper transition hover:border-gold hover:text-gold"
          >
            {translate(locale, "Book a consult")}
          </Link>
        </div>
      </div>
    </section>
  );
}

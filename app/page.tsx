import Hero from "@/components/home/Hero";
import FeaturedHomes from "@/components/home/FeaturedHomes";
import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export default async function HomePage() {
  const locale = await getLocale();

  return (
    <>
      <Hero locale={locale} />
      <FeaturedHomes locale={locale} />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Local expertise")}</p>
            <h2 className="mt-3 font-display text-4xl text-ink">{translate(locale, "Guidance that feels personal and strategic.")}</h2>
            <p className="mt-5 max-w-xl text-lg text-ink/70">
              {translate(locale, "Whether you are buying in Clovis, selling in Fresno, or figuring out what your next step should be, Kaying Vang helps you make informed moves with clarity and confidence.")}
            </p>
            <ul className="mt-8 space-y-3 text-base text-ink/70">
              <li>• {translate(locale, "Neighborhood-based advice for buyers who want the right fit, not just the right price.")}</li>
              <li>• {translate(locale, "Smart pricing strategy designed around today’s market conditions and your goals.")}</li>
              <li>• {translate(locale, "Clear communication from first conversation to final signature.")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-stone py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-line bg-paper p-8 shadow-sm lg:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Get started")}</p>
                <h2 className="mt-3 font-display text-4xl text-ink">{translate(locale, "Talk through your goals with Kaying.")}</h2>
                <p className="mt-4 max-w-lg leading-7 text-ink/70">{translate(locale, "Send a message to ask about buying, selling, or choosing a time to meet.")}</p>
              </div>
              <div className="lg:justify-self-end">
                <a href="https://m.me/KayingRealtor" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Message Kaying")}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-ink py-16 text-paper">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-gold">{translate(locale, "Client recommendations")}</p>
            <h2 className="mt-3 font-display text-3xl">{translate(locale, "Hear directly from Kaying’s community.")}</h2>
          </div>
          <Link href="/testimonials" className="inline-flex min-h-11 items-center border-b border-gold text-sm font-medium text-paper hover:text-gold">
            {translate(locale, "Read and share recommendations")} <span className="ml-3" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}

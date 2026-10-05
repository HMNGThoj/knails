import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export default async function SellPage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Sell with strategy")}</p>
          <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "Pricing and positioning that earns attention.")}</h1>
          <p className="mt-4 text-lg text-ink/70">
            {translate(locale, "We combine local comps, timing, and presentation so your home stands out without unnecessary guesswork.")}
          </p>
          <ul className="mt-8 space-y-3 text-base text-ink/70">
            <li>• {translate(locale, "Tailored pricing guidance for your neighborhood and current buyer demand.")}</li>
            <li>• {translate(locale, "Staging and marketing plans that create stronger first impressions.")}</li>
            <li>• {translate(locale, "Expert negotiation support from offer through close.")}</li>
          </ul>
        </div>

        <div className="border-l-2 border-gold pl-8 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Home valuation request")}</p>
          <h2 className="mt-3 font-display text-3xl text-ink">{translate(locale, "Start with your address.")}</h2>
          <p className="mt-4 leading-7 text-ink/70">{translate(locale, "Message Kaying with your property address to request a pricing conversation. She’ll confirm next steps directly.")}</p>
          <a href="https://m.me/KayingRealtor" target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-12 items-center bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Request a valuation")}</a>
        </div>
      </div>
    </div>
  );
}

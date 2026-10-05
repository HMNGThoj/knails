import type { AgentSale } from "@/lib/listings/agentSales";
import { getRateMyAgentUrl, getZillowSearchUrl } from "@/lib/listings/agentSales";
import { translate, translateDate, type Locale } from "@/lib/i18n";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function AgentSaleRow({ sale, locale }: { sale: AgentSale; locale: Locale }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-line bg-paper p-5 shadow-sm transition hover:border-gold sm:p-6">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-display text-xl text-ink">{sale.address}</h2>
          <span className={`inline-flex min-h-6 items-center px-2 text-xs font-medium ${sale.status === "For Sale" ? "bg-green-100 text-green-900" : sale.status === "Pending" ? "bg-amber-100 text-amber-900" : "bg-stone text-ink/70"}`}>
            {translate(locale, sale.status)}
          </span>
        </div>
        <p className="mt-1 text-sm text-ink/65">{sale.city}, CA {sale.zip} · {translate(locale, sale.type)}</p>
        {sale.statusDate && <p className="mt-1 text-xs text-ink/55">{translate(locale, "Sold")} {translateDate(locale, sale.statusDate)}</p>}
      </div>
      <div className="mt-6 border-t border-line pt-4">
        <p className="font-display text-xl text-ink">{currency.format(sale.price)}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <a href={getRateMyAgentUrl(sale)} target="_blank" rel="noreferrer" className="text-sm font-medium text-gold-deep hover:text-ink">{translate(locale, "RateMyAgent details ↗")}</a>
          <a href={getZillowSearchUrl(sale)} target="_blank" rel="noreferrer" className="text-sm font-medium text-gold-deep hover:text-ink">{translate(locale, "View photos on Zillow ↗")}</a>
        </div>
      </div>
    </article>
  );
}
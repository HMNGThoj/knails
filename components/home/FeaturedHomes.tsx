import Link from "next/link";
import AgentSaleRow from "@/components/listings/AgentSaleRow";
import { activeAgentSales } from "@/lib/listings/agentSales";
import { translate, type Locale } from "@/lib/i18n";

export default function FeaturedHomes({ locale }: { locale: Locale }) {
  const listings = activeAgentSales;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Kaying Vang · Current properties")}</p>
          <h2 className="mt-3 font-display text-4xl text-ink">{translate(locale, "For sale and pending")}</h2>
        </div>
        <Link href="/homes" className="text-sm font-medium text-gold-deep hover:text-gold">{translate(locale, "View current properties →")}</Link>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {listings.slice(0, 4).map((sale) => <AgentSaleRow key={sale.propertyPath} sale={sale} locale={locale} />)}
      </div>
    </section>
  );
}

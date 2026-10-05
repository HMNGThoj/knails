import AgentSaleRow from "@/components/listings/AgentSaleRow";
import { activeAgentSales } from "@/lib/listings/agentSales";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

function readValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function HomesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const locale = await getLocale();
  const search = readValue(query.q)?.trim().toLowerCase() ?? "";
  const status = readValue(query.status) ?? "";
  const listings = activeAgentSales.filter((sale) => {
    const matchesSearch = !search || `${sale.address} ${sale.city} ${sale.zip}`.toLowerCase().includes(search);
    const matchesStatus = !status || sale.status === status;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Kaying Vang · Current properties")}</p>
        <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "Homes represented by Kaying.")}</h1>
        <p className="mt-4 max-w-2xl text-lg text-ink/70">{translate(locale, "Current and pending records from Kaying’s RateMyAgent profile. Check the source page for live availability before making plans.")}</p>
      </div>

      <form action="/homes" method="get" className="grid gap-4 border-y border-line py-5 sm:grid-cols-[1fr_220px_auto]">
        <label className="sr-only" htmlFor="homes-search">{translate(locale, "Search by address or city")}</label>
        <input id="homes-search" name="q" type="search" defaultValue={search} placeholder={translate(locale, "Search by address or city")} className="min-h-12 border border-line bg-paper px-4 text-ink" />
        <label className="sr-only" htmlFor="homes-status">{translate(locale, "Listing status")}</label>
        <select id="homes-status" name="status" defaultValue={status} className="min-h-12 border border-line bg-paper px-4 text-ink">
          <option value="">{translate(locale, "For sale and pending")}</option>
          <option value="For Sale">{translate(locale, "For sale")}</option>
          <option value="Pending">{translate(locale, "Pending")}</option>
        </select>
        <button type="submit" className="min-h-12 bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Filter homes")}</button>
      </form>

      <p className="mt-5 text-sm text-ink/60">{listings.length} {translate(locale, "matching properties")} · {activeAgentSales.filter((sale) => sale.status === "For Sale").length} {translate(locale, "for sale")} · {activeAgentSales.filter((sale) => sale.status === "Pending").length} {translate(locale, "pending")}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((sale) => <AgentSaleRow key={sale.propertyPath} sale={sale} locale={locale} />)}
        {listings.length === 0 && <p className="py-8 text-ink/70 sm:col-span-2 lg:col-span-3">{translate(locale, "No properties match those filters.")}</p>}
      </div>

      <section className="mt-16 border-t border-line pt-10" aria-labelledby="city-inventory-heading">
        <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Live Zillow inventory")}</p>
        <h2 id="city-inventory-heading" className="mt-3 font-display text-3xl text-ink">{translate(locale, "Browse every current listing by city")}</h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          {translate(locale, "Explore every active property in either city on Zillow. These city-wide results include other agents’ listings too.")}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a href="https://www.zillow.com/homes/for_sale/Clovis-CA/" target="_blank" rel="noreferrer" className="flex min-h-20 items-center justify-between border border-line bg-paper px-5 transition hover:border-gold">
            <span><span className="block font-medium text-ink">{translate(locale, "All Clovis listings")}</span><span className="mt-1 block text-sm text-ink/60">{translate(locale, "Open the live Zillow results")}</span></span>
            <span aria-hidden="true" className="text-xl">↗</span>
          </a>
          <a href="https://www.zillow.com/homes/for_sale/Fresno-CA/" target="_blank" rel="noreferrer" className="flex min-h-20 items-center justify-between border border-line bg-paper px-5 transition hover:border-gold">
            <span><span className="block font-medium text-ink">{translate(locale, "All Fresno listings")}</span><span className="mt-1 block text-sm text-ink/60">{translate(locale, "Open the live Zillow results")}</span></span>
            <span aria-hidden="true" className="text-xl">↗</span>
          </a>
        </div>
      </section>
    </div>
  );
}

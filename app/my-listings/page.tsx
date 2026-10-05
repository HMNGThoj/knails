import AgentSaleRow from "@/components/listings/AgentSaleRow";
import { agentSales } from "@/lib/listings/agentSales";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

function readValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function MyListingsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const locale = await getLocale();
  const search = readValue(query.q)?.trim().toLowerCase() ?? "";
  const status = readValue(query.status) ?? "";
  const cities = Array.from(new Set(agentSales.map((sale) => sale.city))).sort();
  const city = readValue(query.city) ?? "";
  const listings = agentSales.filter((sale) => {
    const matchesSearch = !search || `${sale.address} ${sale.city} ${sale.zip}`.toLowerCase().includes(search);
    return matchesSearch && (!status || sale.status === status) && (!city || sale.city === city);
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">Kaying Vang</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "My Listings")}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
        {agentSales.length} {translate(locale, "property records from Kaying’s RateMyAgent profile, including current, pending, and sold properties. Check each source record for the latest status and full photo gallery.")}
      </p>

      <form action="/my-listings" method="get" className="mt-8 grid gap-4 border-y border-line py-5 sm:grid-cols-[1fr_190px_220px_auto]">
        <label className="sr-only" htmlFor="sales-search">{translate(locale, "Search address or city")}</label>
        <input id="sales-search" name="q" type="search" defaultValue={search} placeholder={translate(locale, "Search address or city")} className="min-h-12 border border-line bg-paper px-4 text-ink" />
        <label className="sr-only" htmlFor="sales-status">{translate(locale, "Status")}</label>
        <select id="sales-status" name="status" defaultValue={status} className="min-h-12 border border-line bg-paper px-4 text-ink">
          <option value="">{translate(locale, "All statuses")}</option>
          <option value="For Sale">{translate(locale, "For sale")}</option>
          <option value="Pending">{translate(locale, "Pending")}</option>
          <option value="Sold">{translate(locale, "Sold")}</option>
        </select>
        <label className="sr-only" htmlFor="sales-city">{translate(locale, "City")}</label>
        <select id="sales-city" name="city" defaultValue={city} className="min-h-12 border border-line bg-paper px-4 text-ink">
          <option value="">{translate(locale, "All locations")}</option>
          {cities.map((item) => <option key={item} value={item}>{item}</option>)}
        </select>
        <button type="submit" className="min-h-12 bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Filter listings")}</button>
      </form>

      <p className="mt-5 text-sm text-ink/60">{translate(locale, "Showing")} {listings.length} {translate(locale, "of")} {agentSales.length} {translate(locale, "property records")}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((sale) => <AgentSaleRow key={sale.propertyPath} sale={sale} locale={locale} />)}
        {listings.length === 0 && <p className="py-8 text-ink/70 sm:col-span-2 lg:col-span-3">{translate(locale, "No properties match those filters.")}</p>}
      </div>
    </div>
  );
}
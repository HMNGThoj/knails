import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export default async function AboutPage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "About us")}</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "Rooted in the Central Valley, built around people.")}</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="bg-stone p-8">
          <p className="text-lg leading-8 text-ink/75">
            {translate(locale, "Kaying Vang is a Realtor with HomeSmart PV & Associates serving buyers and sellers in Clovis, Fresno, and nearby Central Valley communities. Her public profile and contact details are maintained on Facebook.")}
          </p>
          <a href="https://www.facebook.com/KayingRealtor" target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center border-b border-gold-deep text-sm font-medium text-ink hover:text-gold-deep">{translate(locale, "Visit Kaying’s Facebook profile")} <span className="ml-3" aria-hidden="true">↗</span></a>
        </div>

        <div className="border-l-2 border-gold pl-8 py-4">
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Professional details")}</p>
          <p className="mt-4 font-display text-3xl text-ink">HomeSmart PV & Associates</p>
          <p className="mt-4 leading-7 text-ink/70">4774 E Carmen Ave<br />Fresno, CA 93703</p>
          <p className="mt-4 text-sm text-ink/70">CalDRE #01934717</p>
        </div>
      </div>
    </div>
  );
}

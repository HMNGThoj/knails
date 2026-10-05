import { site } from "@/lib/site";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export default async function BookingPage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Appointment request")}</p>
          <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "Let’s find a time to talk.")}</h1>
          <p className="mt-5 max-w-lg text-lg leading-8 text-ink/70">
            {translate(locale, "Message Kaying to request a buyer consultation or a private showing. Your appointment is confirmed only when she replies with an available time.")}
          </p>
          <p className="mt-6 text-sm text-ink/60">{site.name} · {site.company}</p>
        </div>
        <a href="https://m.me/KayingRealtor" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-12 items-center bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Message Kaying to schedule")}</a>
      </div>
    </div>
  );
}
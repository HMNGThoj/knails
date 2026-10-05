import { site } from "@/lib/site";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export default async function ContactPage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Contact")}</p>
          <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "Let’s talk about your next move.")}</h1>
          <p className="mt-5 text-lg leading-8 text-ink/70">{translate(locale, "Message Kaying through her public Facebook profile to ask a question or arrange a time to talk.")}</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://m.me/KayingRealtor" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Message Kaying")}</a>
          <a href="https://www.facebook.com/KayingRealtor" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center border border-line px-6 font-medium text-ink transition hover:border-gold">{translate(locale, "Open Facebook profile")}</a>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-sm leading-7 text-ink/70">
          <p>{site.company}</p>
          <p>{site.office}</p>
          <p>{site.license}</p>
        </div>
      </div>
    </div>
  );
}

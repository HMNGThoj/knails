import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export default async function TestimonialsPage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">{translate(locale, "Client recommendations")}</p>
      <h1 className="mt-3 font-display text-5xl text-ink">{translate(locale, "Recommendations for Kaying Vang")}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
        {translate(locale, "Read current recommendations and share your experience on Kaying’s public Facebook profile. Reviews are kept on their original platform rather than reproduced here.")}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <a href="https://www.facebook.com/KayingRealtor" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">
          {translate(locale, "Read recommendations")}
        </a>
        <a href="https://m.me/KayingRealtor" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center border border-line px-6 font-medium text-ink transition hover:border-gold">
          {translate(locale, "Message Kaying")}
        </a>
      </div>
    </div>
  );
}
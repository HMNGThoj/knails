import Link from "next/link";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

export default async function NotFoundPage() {
  const locale = await getLocale();

  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs uppercase tracking-[0.18em] text-gold-deep">404</p>
      <h1 className="mt-4 font-display text-4xl text-ink">{translate(locale, "Page not found")}</h1>
      <p className="mt-4 text-ink/70">{translate(locale, "The page you requested could not be found.")}</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center bg-ink px-6 font-medium text-paper transition hover:bg-gold hover:text-ink">{translate(locale, "Return home")}</Link>
    </div>
  );
}
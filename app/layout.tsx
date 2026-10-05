import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";
import { getLocale } from "@/lib/locale";
import { translate } from "@/lib/i18n";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const tagline = translate(locale, "Realtor in Clovis & Fresno");
  const description = translate(locale, "Kaying Vang, Realtor, helps buyers and sellers navigate Clovis and Fresno real estate with local insight and trusted guidance.");

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
    title: {
      default: `${site.name} | ${tagline}`,
      template: `%s | ${site.name}`,
    },
    description,
    openGraph: {
      type: "website",
      title: `${site.name} | ${tagline}`,
      description,
    },
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale === "hm" ? "hmn" : "en"} className={`${display.variable} ${sans.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-ink focus:p-3 focus:text-paper">
          {translate(locale, "Skip to content")}
        </a>
        <Navbar locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

import { notFound } from "next/navigation";
import { Inter, Noto_Sans_SC } from "next/font/google";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

export async function generateStaticParams() {
  return [{ locale: "zh" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!isLocale(params.locale)) return {};
  const dict = await getDictionary(params.locale);
  return {
    title: {
      default: `${dict.meta.siteNameEn} | ${dict.meta.siteName}`,
      template: `%s | ${dict.meta.siteNameEn}`,
    },
    description: dict.meta.description,
    alternates: {
      languages: {
        "zh-CN": "/zh",
        en: "/en",
      },
    },
    openGraph: {
      title: dict.meta.siteNameEn,
      description: dict.meta.description,
      locale: params.locale === "zh" ? "zh_CN" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <html lang={locale === "zh" ? "zh-CN" : "en"} className={`${inter.variable} ${noto.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header locale={locale} dict={dict} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}

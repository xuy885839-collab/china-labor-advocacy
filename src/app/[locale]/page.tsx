import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/content/nav";
import { sampleNews, sampleWatchlist, sampleSatisfied } from "@/lib/content/samples";
import { ItemCard } from "@/components/ItemCard";
import { SampleBadge } from "@/components/SampleBadge";

export default async function HomePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (obj: { zh: string; en: string }) => obj[locale];

  return (
    <>
      <section className="relative overflow-hidden bg-cla-navy text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cla-red/40 via-transparent to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs uppercase tracking-wider text-cla-gold">
              501(c)(3) · EIN 42-2894065 · Flushing, NY
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              {dict.home.heroTitle}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/85 sm:text-lg">{dict.home.heroSubtitle}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={localizedHref(locale, "/donate")}
                className="rounded bg-cla-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-cla-red-light"
              >
                {dict.home.ctaDonate}
              </Link>
              <Link
                href={localizedHref(locale, "/join")}
                className="rounded border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
              >
                {dict.home.ctaJoin}
              </Link>
              <Link
                href={localizedHref(locale, "/about")}
                className="rounded px-5 py-2.5 text-sm font-semibold text-cla-gold hover:underline"
              >
                {dict.home.ctaLearn} →
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-1">
            {dict.home.missionCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <h2 className="text-lg font-semibold text-cla-gold">{card.title}</h2>
                <p className="mt-2 text-sm text-white/80">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-cla-navy">{dict.home.newsTitle}</h2>
          <Link href={localizedHref(locale, "/news")} className="text-sm font-medium text-cla-red hover:underline">
            {dict.common.readMore} →
          </Link>
        </div>
        <p className="mb-4 text-sm text-cla-slate">{dict.common.sampleNote}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {sampleNews.map((n) => (
            <ItemCard
              key={n.id}
              title={t(n.title)}
              summary={t(n.summary)}
              meta={n.date}
              sampleLabel={dict.common.sample}
            />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-cla-navy/5">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-xl font-bold text-cla-navy">{dict.home.watchlistTitle}</h2>
              <SampleBadge label={dict.common.sample} />
            </div>
            <ul className="space-y-3">
              {sampleWatchlist.map((w) => (
                <li key={w.id} className="rounded-lg border border-cla-navy/10 p-4">
                  <div className="font-semibold text-cla-navy">{t(w.name)}</div>
                  <p className="mt-1 text-sm text-cla-slate">{t(w.issues)}</p>
                  <p className="mt-2 text-xs font-medium text-cla-red">{t(w.status)}</p>
                </li>
              ))}
            </ul>
            <Link
              href={localizedHref(locale, "/sweatshop")}
              className="mt-4 inline-block text-sm font-medium text-cla-red hover:underline"
            >
              {dict.common.readMore} →
            </Link>
          </div>
          <div>
            <div className="mb-4 flex items-center gap-2">
              <h2 className="text-xl font-bold text-cla-navy">{dict.home.satisfiedTitle}</h2>
              <SampleBadge label={dict.common.sample} />
            </div>
            <ul className="space-y-3">
              {sampleSatisfied.map((s) => (
                <li key={s.id} className="rounded-lg border border-cla-navy/10 p-4">
                  <div className="font-semibold text-cla-navy">{t(s.name)}</div>
                  <p className="mt-1 text-sm text-cla-slate">{t(s.note)}</p>
                </li>
              ))}
            </ul>
            <Link
              href={localizedHref(locale, "/employee-satisfied")}
              className="mt-4 inline-block text-sm font-medium text-cla-red hover:underline"
            >
              {dict.common.readMore} →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="rounded-2xl bg-cla-red px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">{dict.donate.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">{dict.donate.intro}</p>
          <p className="mt-2 text-sm text-cla-gold">{dict.common.taxExempt}</p>
          <Link
            href={localizedHref(locale, "/donate")}
            className="mt-6 inline-block rounded bg-white px-6 py-2.5 text-sm font-bold text-cla-red hover:bg-cla-cream"
          >
            {dict.nav.donate}
          </Link>
        </div>
      </section>
    </>
  );
}

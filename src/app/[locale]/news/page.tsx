import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { ItemCard } from "@/components/ItemCard";
import { sampleNews } from "@/lib/content/samples";

export default async function NewsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (o: { zh: string; en: string }) => o[locale];

  const cats = [
    { id: "international", title: dict.newsSubs.international },
    { id: "domestic", title: dict.newsSubs.domestic },
    { id: "labor", title: dict.newsSubs.labor },
    { id: "activities", title: dict.newsSubs.activities },
    { id: "publications", title: dict.newsSubs.publications },
    { id: "figures", title: dict.newsSubs.figures },
  ];

  return (
    <>
      <PageHero title={dict.nav.news} subtitle={dict.home.newsTitle} />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <p className="text-sm text-cla-slate">{dict.common.sampleNote}</p>
        {cats.map((c, idx) => (
          <SectionBlock key={c.id} id={c.id} title={c.title} sampleLabel={dict.common.sample}>
            <div className="grid gap-3 md:grid-cols-2">
              {sampleNews.slice(0, idx % 2 === 0 ? 2 : 1).map((n) => (
                <ItemCard
                  key={`${c.id}-${n.id}`}
                  title={t(n.title)}
                  summary={t(n.summary)}
                  meta={n.date}
                  sampleLabel={dict.common.sample}
                  badge={c.title}
                />
              ))}
            </div>
          </SectionBlock>
        ))}
      </div>
    </>
  );
}

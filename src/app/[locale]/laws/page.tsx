import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { ItemCard } from "@/components/ItemCard";
import { sampleLaws } from "@/lib/content/samples";

export default async function LawsPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (o: { zh: string; en: string }) => o[locale];

  const sections = [
    { id: "labor", title: dict.lawsSubs.labor, items: sampleLaws.labor },
    { id: "civil", title: dict.lawsSubs.civil, items: sampleLaws.civil },
    { id: "administrative", title: dict.lawsSubs.administrative, items: sampleLaws.administrative },
    { id: "criminal", title: dict.lawsSubs.criminal, items: sampleLaws.criminal },
    { id: "general", title: dict.lawsSubs.general, items: sampleLaws.general },
  ];

  return (
    <>
      <PageHero
        title={dict.nav.laws}
        subtitle={
          locale === "zh"
            ? "发布劳动、民事、行政、刑事及综合法律法规与司法解释摘要（示例）。"
            : "Labor, civil, administrative, criminal, and general legal resources (sample summaries)."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <p className="text-sm text-cla-slate">{dict.common.sampleNote}</p>
        {sections.map((s) => (
          <SectionBlock key={s.id} id={s.id} title={s.title} sampleLabel={dict.common.sample}>
            <div className="grid gap-3 md:grid-cols-2">
              {s.items.map((item) => (
                <ItemCard key={item.id} title={t(item.title)} sampleLabel={dict.common.sample} />
              ))}
            </div>
          </SectionBlock>
        ))}
      </div>
    </>
  );
}

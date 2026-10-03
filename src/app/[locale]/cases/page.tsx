import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { ItemCard } from "@/components/ItemCard";
import { sampleCases } from "@/lib/content/samples";

export default async function CasesPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (o: { zh: string; en: string }) => o[locale];

  const sections = [
    { id: "labor", title: dict.casesSubs.labor },
    { id: "traffic", title: dict.casesSubs.traffic },
    { id: "family", title: dict.casesSubs.family },
    { id: "injury", title: dict.casesSubs.injury },
    { id: "other", title: dict.casesSubs.other },
  ];

  return (
    <>
      <PageHero
        title={dict.nav.cases}
        subtitle={
          locale === "zh"
            ? "典型维权案例（脱敏示例）。非正式法律意见；个案请寻求持牌律师帮助。"
            : "Typical advocacy cases (anonymized samples). Not legal advice; consult a licensed attorney."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <p className="text-sm text-cla-slate">{dict.common.sampleNote}</p>
        {sections.map((s, i) => (
          <SectionBlock key={s.id} id={s.id} title={s.title} sampleLabel={dict.common.sample}>
            <div className="grid gap-3 md:grid-cols-2">
              {(i === 0 ? sampleCases : sampleCases.slice(0, 1)).map((c) => (
                <ItemCard
                  key={`${s.id}-${c.id}`}
                  title={t(c.title)}
                  summary={t(c.summary)}
                  meta={c.date}
                  sampleLabel={dict.common.sample}
                  badge={s.title}
                />
              ))}
            </div>
          </SectionBlock>
        ))}
      </div>
    </>
  );
}

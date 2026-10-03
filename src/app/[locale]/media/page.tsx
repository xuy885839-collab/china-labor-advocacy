import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { ItemCard } from "@/components/ItemCard";

export default async function MediaPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  const domestic = {
    zh: { title: "【示例】地方媒体关注劳工普法活动", summary: "示例：报道社区法律讲座与义工招募。" },
    en: {
      title: "[Sample] Local coverage of labor-law clinics",
      summary: "Sample: Community legal briefings and volunteer recruitment.",
    },
  };
  const intl = {
    zh: { title: "【示例】国际媒体关注供应链劳工标准", summary: "示例：关于尽职调查立法与工人声音的评论摘要。" },
    en: {
      title: "[Sample] International coverage of supply-chain labor standards",
      summary: "Sample: Commentary on due-diligence laws and worker voice.",
    },
  };

  return (
    <>
      <PageHero
        title={dict.nav.media}
        subtitle={
          locale === "zh"
            ? "汇集国内外媒体对本机构劳工维权与能力建设的报道。"
            : "Domestic and international media coverage of our labor advocacy and capacity building."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <p className="text-sm text-cla-slate">{dict.common.sampleNote}</p>
        <SectionBlock id="domestic" title={dict.mediaSubs.domestic} sampleLabel={dict.common.sample}>
          <ItemCard
            title={domestic[locale].title}
            summary={domestic[locale].summary}
            sampleLabel={dict.common.sample}
          />
        </SectionBlock>
        <SectionBlock id="international" title={dict.mediaSubs.international} sampleLabel={dict.common.sample}>
          <ItemCard title={intl[locale].title} summary={intl[locale].summary} sampleLabel={dict.common.sample} />
        </SectionBlock>
      </div>
    </>
  );
}

import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { sampleSatisfied } from "@/lib/content/samples";

export default async function EmployeeSatisfiedPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (o: { zh: string; en: string }) => o[locale];

  return (
    <>
      <PageHero
        title={dict.nav.employeeSatisfied}
        subtitle={
          locale === "zh"
            ? "制定员工满意企业评定标准，定期发布褒奖式介绍，并对不足提出完善建议。"
            : "Criteria for employee-satisfied recognition, periodic praise listings, and constructive recommendations."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <p className="text-sm text-cla-slate">{dict.common.sampleNote}</p>
        <SectionBlock id="companies" title={dict.employeeSubs.companies} sampleLabel={dict.common.sample}>
          <ul className="space-y-4">
            {sampleSatisfied.map((s) => (
              <li key={s.id} className="rounded-lg border border-cla-navy/10 bg-white p-5">
                <h3 className="font-semibold text-cla-navy">{t(s.name)}</h3>
                <p className="mt-2 text-sm text-cla-slate">{t(s.note)}</p>
              </li>
            ))}
          </ul>
        </SectionBlock>
        <SectionBlock id="criteria" title={dict.employeeSubs.criteria}>
          <div className="rounded-lg border border-cla-navy/10 bg-white p-6 text-sm text-cla-slate space-y-2">
            <p>
              {locale === "zh"
                ? "目标是形成类似 SA8000 的可操作评定体系：合规底线 + 员工满意度指标 + 持续改进建议。标准草案将公开征求意见。"
                : "Goal: an actionable framework akin to SA8000 — compliance floor + worker satisfaction metrics + continuous-improvement notes. Draft standards will be opened for comment."}
            </p>
          </div>
        </SectionBlock>
      </div>
    </>
  );
}

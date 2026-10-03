import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { sampleWatchlist } from "@/lib/content/samples";

export default async function SweatshopPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (o: { zh: string; en: string }) => o[locale];

  return (
    <>
      <PageHero
        title={dict.nav.sweatshop}
        subtitle={
          locale === "zh"
            ? "不定期发布涉嫌违法用工企业观察名单与评定标准，提醒求职者防范风险，并视情况向劳动监管部门反映。"
            : "Periodic watchlist of alleged labor-law violators, criteria, and referrals to labor regulators when appropriate."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <p className="text-sm text-cla-slate">{dict.common.sampleNote}</p>
        <SectionBlock id="list" title={dict.sweatshopSubs.list} sampleLabel={dict.common.sample}>
          <ul className="space-y-4">
            {sampleWatchlist.map((w) => (
              <li key={w.id} className="rounded-lg border border-cla-navy/10 bg-white p-5">
                <h3 className="font-semibold text-cla-navy">{t(w.name)}</h3>
                <p className="mt-2 text-sm text-cla-slate">{t(w.issues)}</p>
                <p className="mt-2 text-xs font-medium text-cla-red">{t(w.status)}</p>
              </li>
            ))}
          </ul>
        </SectionBlock>
        <SectionBlock id="criteria" title={dict.sweatshopSubs.criteria}>
          <div className="rounded-lg border border-cla-navy/10 bg-white p-6 text-sm text-cla-slate space-y-2">
            <p>
              {locale === "zh"
                ? "评定体系将结合劳动法强制规范与社会责任标准（可参考 SA8000 等方法论），包括工时工资、职业安全、强迫劳动风险、招聘收费、结社与申诉渠道等维度。正式标准文件发布前，名单条目均标注为观察/示例。"
                : "Criteria will combine mandatory labor-law norms and social-responsibility frameworks (e.g. SA8000-inspired dimensions): wages/hours, OSH, forced-labor risk, recruitment fees, association and grievance channels. Until formal standards publish, list entries are observational/sample."}
            </p>
          </div>
        </SectionBlock>
      </div>
    </>
  );
}

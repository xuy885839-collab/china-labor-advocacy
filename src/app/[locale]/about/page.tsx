import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { sampleNotices } from "@/lib/content/samples";

export default async function AboutPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);
  const t = (o: { zh: string; en: string }) => o[locale];

  return (
    <>
      <PageHero
        title={dict.nav.about}
        subtitle={
          locale === "zh"
            ? "我们是谁、我们做什么、组织如何运作，以及机构公示公告。"
            : "Who we are, what we do, how we are organized, and public notices."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <SectionBlock id="who" title={dict.aboutSubs.who}>
          <div className="prose prose-slate max-w-none space-y-4 text-cla-slate">
            <p>
              {locale === "zh"
                ? "中国劳工倡导会（CHINA LABOR ADVOCACY）是位于纽约法拉盛的美国联邦 501(c)(3) 公共慈善机构（170(b)(1)(A)(vi)）。我们关注中国劳工权利保护、全球供应链责任，以及与劳工标准相关的贸易政策倡导（包括 USTR 301 / 过剩产能与劳工议题）。"
                : "CHINA LABOR ADVOCACY is a U.S. 501(c)(3) public charity under 170(b)(1)(A)(vi), based in Flushing, NY. We advance Chinese labor rights, supply-chain accountability, and trade-policy advocacy related to labor standards — including USTR Section 301 / excess capacity and labor."}
            </p>
            <p className="font-medium text-cla-red">{dict.common.notAffiliated}</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>{dict.common.ein}</li>
              <li>{dict.common.effectiveDate}</li>
              <li>{dict.common.determinationDate}</li>
              <li>{dict.common.location}</li>
            </ul>
          </div>
        </SectionBlock>

        <SectionBlock id="org" title={dict.aboutSubs.org}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-cla-navy/10 bg-white p-5">
              <h3 className="font-semibold text-cla-navy">
                {locale === "zh" ? "理事会 / 治理" : "Board / Governance"}
              </h3>
              <p className="mt-2 text-sm text-cla-slate">
                {locale === "zh"
                  ? "正式理事会名单与职责说明将在备案材料完善后公示。日常联络：Hui Jian。"
                  : "Formal board roster will be published after filings are finalized. Day-to-day contact: Hui Jian."}
              </p>
            </div>
            <div className="rounded-lg border border-cla-navy/10 bg-white p-5">
              <h3 className="font-semibold text-cla-navy">
                {locale === "zh" ? "分区管理（规划）" : "Section editors (planned)"}
              </h3>
              <p className="mt-2 text-sm text-cla-slate">
                {locale === "zh"
                  ? "关键栏目（维权案例、加入我们等）由专职人员管理；法律法规、新闻、媒体等可由义工协助更新——后台 CMS 待接入。"
                  : "Sensitive sections (cases, membership) by staff; laws/news/media may be volunteer-assisted — CMS deferred."}
              </p>
            </div>
          </div>
        </SectionBlock>

        <SectionBlock id="notices" title={dict.aboutSubs.notices}>
          <div className="space-y-4">
            {sampleNotices.map((n) => (
              <article key={n.id} className="rounded-lg border border-cla-navy/10 bg-white p-5">
                <time className="text-xs text-cla-slate">{n.date}</time>
                <h3 className="mt-1 font-semibold text-cla-navy">{t(n.title)}</h3>
                <p className="mt-2 text-sm text-cla-slate">{t(n.body)}</p>
              </article>
            ))}
          </div>
        </SectionBlock>
      </div>
    </>
  );
}

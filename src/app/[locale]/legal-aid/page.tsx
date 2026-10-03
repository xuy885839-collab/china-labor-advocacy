import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";

export default async function LegalAidPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.nav.legalAid}
        subtitle={
          locale === "zh"
            ? "法律援助申请说明、公益活动与劳工基金透明公开。"
            : "How to seek legal aid, public-interest programs, and foundation transparency."
        }
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <SectionBlock id="aid" title={dict.legalAidSubs.aid}>
          <div className="space-y-3 rounded-lg border border-cla-navy/10 bg-white p-6 text-sm text-cla-slate">
            <p>
              {locale === "zh"
                ? "我们提供初步信息指引与转介（非正式法律代理）。申请渠道：请通过电邮说明基本情况与所在地区，我们会回复是否符合当前项目范围。"
                : "We provide initial guidance and referrals (not formal legal representation). Email a brief description and location; we will reply whether your matter fits current programs."}
            </p>
            <p>
              <a className="font-medium text-cla-red underline" href={`mailto:${dict.common.email}`}>
                {dict.common.email}
              </a>
            </p>
            <p className="text-xs text-cla-slate/80">
              {locale === "zh"
                ? "【示例】完整申请表与个案数据库将接入后台审核流程。"
                : "[Sample] Full intake forms and case DB will connect to staff review workflows."}
            </p>
          </div>
        </SectionBlock>
        <SectionBlock id="public-interest" title={dict.legalAidSubs.publicInterest}>
          <p className="text-sm text-cla-slate">
            {locale === "zh"
              ? "【示例】社区普法讲座、工友互助小组与季节性招聘防骗宣传等公益项目将在此发布。"
              : "[Sample] Community legal clinics, mutual-aid groups, and anti-fraud hiring campaigns will be listed here."}
          </p>
        </SectionBlock>
        <SectionBlock id="foundation" title={dict.legalAidSubs.foundation}>
          <div className="rounded-lg border border-cla-navy/10 bg-white p-6 text-sm text-cla-slate space-y-2">
            <p>
              {locale === "zh"
                ? "劳工基金会栏目用于说明资金来源、开支方向与公开筹款方式，并设立财务公开以便社会监督。"
                : "The foundation section explains funding sources, expenditures, fundraising channels, and financial disclosures for public oversight."}
            </p>
            <p>{dict.common.taxExempt}</p>
            <p className="text-xs">{dict.donate.transparencyNote}</p>
          </div>
        </SectionBlock>
      </div>
    </>
  );
}

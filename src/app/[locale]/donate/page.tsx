import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";

export default async function DonatePage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero title={dict.donate.title} subtitle={dict.donate.intro} />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <div className="rounded-xl border border-cla-gold/40 bg-cla-navy p-6 text-white">
          <p className="text-sm text-cla-gold">{dict.common.taxExempt}</p>
          <ul className="mt-3 space-y-1 text-sm text-white/85">
            <li>{dict.common.ein}</li>
            <li>{dict.common.effectiveDate}</li>
            <li>{dict.common.determinationDate}</li>
          </ul>
        </div>

        <SectionBlock id="methods" title={dict.donate.methodsTitle}>
          <div className="grid gap-4 sm:grid-cols-3">
            {[dict.donate.paymentSoon, dict.donate.mailCheck, dict.donate.wire].map((text) => (
              <div
                key={text}
                className="rounded-lg border border-dashed border-cla-navy/30 bg-white p-5 text-center text-sm text-cla-slate"
              >
                <div className="mb-2 text-2xl">💳</div>
                <p>{text}</p>
                <p className="mt-2 text-xs font-medium text-cla-red">{dict.common.comingSoon}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-cla-slate">
            {locale === "zh"
              ? "正式开通后，本页将展示收款二维码与银行信息。请勿向未经验证的个人账户转账。"
              : "When live, this page will show QR codes and bank details. Do not send funds to unverified personal accounts."}
          </p>
        </SectionBlock>

        <SectionBlock id="purpose" title={dict.donate.purposeTitle}>
          <ul className="space-y-3">
            {dict.donate.purposeItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between rounded-lg border border-cla-navy/10 bg-white px-4 py-3 text-sm"
              >
                <span className="text-cla-navy">{item.label}</span>
                <span className="font-bold text-cla-red">{item.pct}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-cla-slate">
            {locale === "zh"
              ? "占比为规划目标，实际年度分配将在财务公示中披露。"
              : "Percentages are planning targets; actual annual allocation will appear in disclosures."}
          </p>
        </SectionBlock>

        <SectionBlock id="transparency" title={dict.donate.transparencyTitle}>
          <div className="rounded-lg border border-cla-navy/10 bg-white p-6 text-sm text-cla-slate">
            <p>{dict.donate.transparencyNote}</p>
          </div>
        </SectionBlock>
      </div>
    </>
  );
}

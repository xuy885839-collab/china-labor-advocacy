import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { SectionBlock } from "@/components/SectionBlock";
import { JoinForm } from "@/components/JoinForm";

export default async function JoinPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  const formLabels = {
    name: dict.forms.name,
    email: dict.forms.email,
    phone: dict.forms.phone,
    role: dict.forms.role,
    member: dict.forms.member,
    volunteer: dict.forms.volunteer,
    skills: dict.forms.skills,
    availability: dict.forms.availability,
    message: dict.forms.message,
    agree: dict.forms.agree,
    submit: dict.common.submit,
    submitting: dict.common.submitting,
    success: dict.common.success,
    error: dict.common.error,
  };

  return (
    <>
      <PageHero
        title={dict.nav.join}
        subtitle={dict.forms.memberVsVolunteer}
      />
      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <SectionBlock id="member" title={dict.joinSubs.member}>
          <div className="mb-6 space-y-2 text-sm text-cla-slate">
            <p>
              {locale === "zh"
                ? "会员权利与义务、所需材料将随正式章程公布。在线申请提交后进入人工审核；审核结果将通过电邮通知。会员缴费二维码/支付链接在支付渠道开通后发送。"
                : "Member rights, duties, and required materials will follow the formal bylaws. Applications are staff-reviewed; results are emailed. Dues QR/payment links will be sent once payment is live."}
            </p>
            <p className="text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded px-3 py-2">
              {locale === "zh"
                ? "延期功能：会员数据库、后台提醒、短信/邮件自动回复与缴费二维码——待 CMS/支付接入。"
                : "Deferred: member DB, admin alerts, auto email/SMS replies, and dues QR — pending CMS/payments."}
            </p>
          </div>
          <JoinForm labels={{ ...formLabels, defaultRole: "member" }} />
        </SectionBlock>

        <SectionBlock id="volunteer" title={dict.joinSubs.volunteer}>
          <div className="mb-6 space-y-2 text-sm text-cla-slate">
            <p>
              {locale === "zh"
                ? "义工侧重翻译、内容编辑、活动协助与社区联络。补贴制度（如有）将另行公示。义工与会员职责不同，可同时或分别申请。"
                : "Volunteers help with translation, editing, events, and community outreach. Any stipend policy will be published separately. Volunteer and member roles differ; you may apply for either or both."}
            </p>
          </div>
          <JoinForm labels={{ ...formLabels, defaultRole: "volunteer" }} />
        </SectionBlock>
      </div>
    </>
  );
}

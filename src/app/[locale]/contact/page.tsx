import { notFound } from "next/navigation";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage({ params }: { params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageHero
        title={dict.nav.contact}
        subtitle={
          locale === "zh"
            ? "欢迎通过电邮或下列表单与我们联系。暂不公开电话号码。"
            : "Reach us by email or the form below. Phone number is not published."
        }
      />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-2">
        <div className="space-y-4 rounded-xl border border-cla-navy/10 bg-white p-6 text-sm text-cla-slate shadow-sm">
          <h2 className="text-lg font-bold text-cla-navy">
            {locale === "zh" ? "联系方式" : "Contact details"}
          </h2>
          <p>{dict.common.contactPerson}</p>
          <p>
            {locale === "zh" ? "电邮：" : "Email: "}
            <a className="font-medium text-cla-red underline" href={`mailto:${dict.common.email}`}>
              {dict.common.email}
            </a>
          </p>
          <p>{dict.common.location}</p>
          <p>{dict.common.noPhone}</p>
          <p className="pt-2 text-xs text-cla-slate/80">
            {locale === "zh"
              ? "社交媒体（微信 / X / 其他）账号将在正式开通后公布。分支机构联系方式亦将在此更新。"
              : "Social accounts (WeChat / X / others) and branch contacts will be listed when available."}
          </p>
          <div className="border-t border-cla-navy/10 pt-4 text-xs">
            <p>{dict.common.ein}</p>
            <p>{dict.common.notAffiliated}</p>
          </div>
        </div>
        <ContactForm
          labels={{
            name: dict.forms.name,
            email: dict.forms.email,
            phone: dict.forms.phone,
            subject: dict.forms.subject,
            message: dict.forms.message,
            agree: dict.forms.agree,
            submit: dict.common.submit,
            submitting: dict.common.submitting,
            success: dict.common.success,
            error: dict.common.error,
            required: dict.common.required,
          }}
        />
      </div>
    </>
  );
}

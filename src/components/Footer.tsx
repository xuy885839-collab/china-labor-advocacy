import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localizedHref } from "@/lib/content/nav";

type Dict = Awaited<ReturnType<typeof import("@/lib/i18n").getDictionary>>;

export function Footer({ locale, dict }: { locale: Locale; dict: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-cla-navy/10 bg-cla-navy text-cla-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-2 text-lg font-bold text-white">
            {locale === "zh" ? dict.meta.siteName : dict.meta.siteNameEn}
          </div>
          <p className="text-sm text-cla-cream/80">{dict.meta.tagline}</p>
          <p className="mt-3 text-xs text-cla-gold">{dict.common.notAffiliated}</p>
        </div>
        <div className="text-sm space-y-1">
          <p className="font-semibold text-white">{dict.nav.contact}</p>
          <p>{dict.common.contactPerson}</p>
          <p>
            <a className="underline hover:text-cla-gold" href={`mailto:${dict.common.email}`}>
              {dict.common.email}
            </a>
          </p>
          <p>{dict.common.location}</p>
          <p className="text-cla-cream/70">{dict.common.noPhone}</p>
        </div>
        <div className="text-sm space-y-1">
          <p className="font-semibold text-white">501(c)(3)</p>
          <p>{dict.common.ein}</p>
          <p>{dict.common.effectiveDate}</p>
          <p>{dict.common.determinationDate}</p>
          <p className="pt-2 text-cla-cream/80">{dict.common.taxExempt}</p>
        </div>
        <div className="text-sm space-y-2">
          <p className="font-semibold text-white">{locale === "zh" ? "快捷链接" : "Quick links"}</p>
          <div className="flex flex-col gap-1">
            <Link className="hover:text-cla-gold" href={localizedHref(locale, "/about")}>
              {dict.nav.about}
            </Link>
            <Link className="hover:text-cla-gold" href={localizedHref(locale, "/donate")}>
              {dict.nav.donate}
            </Link>
            <Link className="hover:text-cla-gold" href={localizedHref(locale, "/join")}>
              {dict.nav.join}
            </Link>
            <Link className="hover:text-cla-gold" href={localizedHref(locale, "/sweatshop")}>
              {dict.nav.sweatshop}
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-cla-cream/60">
        © {year} China Labor Advocacy · {dict.common.allRights}
      </div>
    </footer>
  );
}

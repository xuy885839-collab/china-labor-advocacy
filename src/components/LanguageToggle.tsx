"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(zh|en)/, "") || "";
  const other: Locale = locale === "zh" ? "en" : "zh";
  const href = `/${other}${rest}`;

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <Link
        href={`/zh${rest}`}
        className={`rounded px-2 py-1 ${
          locale === "zh"
            ? "bg-cla-red text-white"
            : "text-cla-navy hover:bg-cla-cream"
        }`}
        hrefLang="zh-CN"
        lang="zh-CN"
      >
        中文
      </Link>
      <span className="text-cla-slate/40">|</span>
      <Link
        href={`/en${rest}`}
        className={`rounded px-2 py-1 ${
          locale === "en"
            ? "bg-cla-red text-white"
            : "text-cla-navy hover:bg-cla-cream"
        }`}
        hrefLang="en"
        lang="en"
      >
        EN
      </Link>
      <span className="sr-only">Switch to {other}</span>
      <Link href={href} className="sr-only">
        {other}
      </Link>
    </div>
  );
}

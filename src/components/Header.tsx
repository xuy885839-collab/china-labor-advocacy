"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { mainNav, localizedHref } from "@/lib/content/nav";
import { LanguageToggle } from "./LanguageToggle";

type Dict = Awaited<ReturnType<typeof import("@/lib/i18n").getDictionary>>;

export function Header({ locale, dict }: { locale: Locale; dict: Dict }) {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const labelFor = (key: string, parent?: string) => {
    if (!parent) {
      return (dict.nav as Record<string, string>)[key] ?? key;
    }
    const mapKey = `${parent}Subs` as keyof typeof dict;
    const map = dict[mapKey] as Record<string, string> | undefined;
    return map?.[key] ?? key;
  };

  const parentKeyForSubs = (navKey: string) => {
    const map: Record<string, string> = {
      about: "about",
      laws: "laws",
      news: "news",
      media: "media",
      cases: "cases",
      legalAid: "legalAid",
      join: "join",
      video: "video",
      sweatshop: "sweatshop",
      employeeSatisfied: "employee",
      donate: "donate",
    };
    return map[navKey];
  };

  return (
    <header className="sticky top-0 z-50 border-b border-cla-navy/10 bg-white/95 shadow-sm backdrop-blur">
      <div className="bg-cla-navy text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs">
          <p className="font-medium tracking-wide">{dict.meta.tagline}</p>
          <p className="opacity-90">{dict.common.notAffiliated}</p>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href={localizedHref(locale, "")} className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cla-red text-sm font-bold text-white shadow">
            CLA
          </div>
          <div>
            <div className="font-display text-base font-bold leading-tight text-cla-navy group-hover:text-cla-red sm:text-lg">
              {locale === "zh" ? dict.meta.siteName : dict.meta.siteNameEn}
            </div>
            <div className="text-[11px] uppercase tracking-wider text-cla-slate">
              {locale === "zh" ? dict.meta.siteNameEn : "Flushing, NY · 501(c)(3)"}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <LanguageToggle locale={locale} />
          <Link
            href={localizedHref(locale, "/donate")}
            className="hidden rounded bg-cla-red px-3 py-1.5 text-sm font-semibold text-white hover:bg-cla-red-dark sm:inline-block"
          >
            {dict.nav.donate}
          </Link>
          <button
            type="button"
            className="inline-flex items-center rounded border border-cla-navy/20 px-3 py-1.5 text-sm font-medium text-cla-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-cla-navy/5 bg-cla-cream/60 lg:block">
        <ul className="mx-auto flex max-w-7xl flex-wrap gap-0.5 px-2 py-1 text-sm">
          {mainNav.map((item) => (
            <li
              key={item.key}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.key)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={localizedHref(locale, item.href)}
                className="inline-block rounded px-2.5 py-2 font-medium text-cla-navy hover:bg-white hover:text-cla-red"
              >
                {labelFor(item.key)}
              </Link>
              {item.children && activeMenu === item.key && (
                <ul className="absolute left-0 top-full z-50 min-w-[12rem] rounded-md border border-cla-navy/10 bg-white py-1 shadow-lg">
                  {item.children.map((child) => (
                    <li key={child.key}>
                      <Link
                        href={localizedHref(locale, child.href)}
                        className="block px-3 py-2 text-cla-slate hover:bg-cla-cream hover:text-cla-red"
                      >
                        {labelFor(child.key, parentKeyForSubs(item.key))}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <nav id="mobile-nav" className="border-t border-cla-navy/10 bg-white lg:hidden">
          <ul className="max-h-[70vh] space-y-1 overflow-y-auto px-4 py-3 text-sm">
            {mainNav.map((item) => (
              <li key={item.key}>
                <Link
                  href={localizedHref(locale, item.href)}
                  className="block rounded px-2 py-2 font-semibold text-cla-navy"
                  onClick={() => setOpen(false)}
                >
                  {labelFor(item.key)}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-3 border-l border-cla-navy/10 pl-2">
                    {item.children.map((child) => (
                      <li key={child.key}>
                        <Link
                          href={localizedHref(locale, child.href)}
                          className="block px-2 py-1.5 text-cla-slate"
                          onClick={() => setOpen(false)}
                        >
                          {labelFor(child.key, parentKeyForSubs(item.key))}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

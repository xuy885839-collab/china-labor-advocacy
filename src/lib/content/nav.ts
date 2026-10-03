import type { Locale } from "../i18n";

export type NavItem = {
  key: string;
  href: string;
  children?: { key: string; href: string }[];
};

export const mainNav: NavItem[] = [
  { key: "home", href: "" },
  {
    key: "about",
    href: "/about",
    children: [
      { key: "who", href: "/about#who" },
      { key: "org", href: "/about#org" },
      { key: "notices", href: "/about#notices" },
    ],
  },
  {
    key: "laws",
    href: "/laws",
    children: [
      { key: "labor", href: "/laws#labor" },
      { key: "civil", href: "/laws#civil" },
      { key: "administrative", href: "/laws#administrative" },
      { key: "criminal", href: "/laws#criminal" },
      { key: "general", href: "/laws#general" },
    ],
  },
  {
    key: "news",
    href: "/news",
    children: [
      { key: "international", href: "/news#international" },
      { key: "domestic", href: "/news#domestic" },
      { key: "labor", href: "/news#labor" },
      { key: "activities", href: "/news#activities" },
      { key: "publications", href: "/news#publications" },
      { key: "figures", href: "/news#figures" },
    ],
  },
  {
    key: "media",
    href: "/media",
    children: [
      { key: "domestic", href: "/media#domestic" },
      { key: "international", href: "/media#international" },
    ],
  },
  {
    key: "cases",
    href: "/cases",
    children: [
      { key: "labor", href: "/cases#labor" },
      { key: "traffic", href: "/cases#traffic" },
      { key: "family", href: "/cases#family" },
      { key: "injury", href: "/cases#injury" },
      { key: "other", href: "/cases#other" },
    ],
  },
  {
    key: "legalAid",
    href: "/legal-aid",
    children: [
      { key: "aid", href: "/legal-aid#aid" },
      { key: "publicInterest", href: "/legal-aid#public-interest" },
      { key: "foundation", href: "/legal-aid#foundation" },
    ],
  },
  {
    key: "join",
    href: "/join",
    children: [
      { key: "member", href: "/join#member" },
      { key: "volunteer", href: "/join#volunteer" },
    ],
  },
  { key: "contact", href: "/contact" },
  {
    key: "video",
    href: "/video",
    children: [
      { key: "legal", href: "/video#legal" },
      { key: "life", href: "/video#life" },
      { key: "talks", href: "/video#talks" },
    ],
  },
  {
    key: "sweatshop",
    href: "/sweatshop",
    children: [
      { key: "list", href: "/sweatshop#list" },
      { key: "criteria", href: "/sweatshop#criteria" },
    ],
  },
  {
    key: "employeeSatisfied",
    href: "/employee-satisfied",
    children: [
      { key: "companies", href: "/employee-satisfied#companies" },
      { key: "criteria", href: "/employee-satisfied#criteria" },
    ],
  },
  {
    key: "donate",
    href: "/donate",
    children: [
      { key: "methods", href: "/donate#methods" },
      { key: "purpose", href: "/donate#purpose" },
      { key: "transparency", href: "/donate#transparency" },
    ],
  },
];

export function localizedHref(locale: Locale, href: string) {
  if (!href) return `/${locale}`;
  return `/${locale}${href}`;
}

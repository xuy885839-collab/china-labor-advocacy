export const locales = ["zh", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "zh";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export async function getDictionary(locale: Locale) {
  if (locale === "en") {
    return (await import("./dictionaries/en")).default;
  }
  return (await import("./dictionaries/zh")).default;
}

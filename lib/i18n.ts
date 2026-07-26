import type { Dictionary } from "@/dictionaries/types";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeHtmlLang: Record<Locale, string> = {
  en: "en",
  zh: "zh-TW",
};

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  switch (locale) {
    case "zh":
      return (await import("@/dictionaries/zh")).default;
    case "en":
    default:
      return (await import("@/dictionaries/en")).default;
  }
};

/** Path for Next.js Link/router (basePath is applied by Next automatically). */
export const localizedHref = (locale: Locale, path = "/"): string => {
  if (path === "/" || path === "") {
    return `/${locale}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash = normalized.endsWith("/") ? normalized : `${normalized}/`;
  return `/${locale}${withSlash}`;
};

export const swapLocaleInPathname = (pathname: string, nextLocale: Locale): string => {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return localizedHref(nextLocale, "/");
  }
  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }
  return `/${segments.join("/")}/`;
};

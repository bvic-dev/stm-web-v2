import { LOCALES, DEFAULT_LOCALE } from "../config.ts";

type Locale = typeof LOCALES[number];

function isValidLocale(lang: string): lang is Locale {
  return (LOCALES as readonly string[]).includes(lang);
}

export function getPreferredLocale(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;

  return (
    header
      .split(",")
      .map((part) => {
        const [lang, q] = part.trim().split(";q=");
        return {
          lang: lang.toLowerCase(),
          q: parseFloat(q ?? "1"),
        };
      })
      .sort((a, b) => b.q - a.q)
      .map(({ lang }) => {
        const base = lang.split("-")[0];
        if (isValidLocale(lang)) return lang;
        if (isValidLocale(base)) return base;
        return null;
      })
      .find((locale): locale is Locale => locale !== null) ?? DEFAULT_LOCALE
  );
}

export function generateLangStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

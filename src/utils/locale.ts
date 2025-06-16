import { LOCALES_KEYS, DEFAULT_LOCALE } from "../config.ts";

type Locale = typeof LOCALES_KEYS[number];

function isValidLocale(lang: string): lang is Locale {
  return (LOCALES_KEYS as readonly string[]).includes(lang);
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
  return LOCALES_KEYS.map((lang) => ({ params: { lang } }));
}

export function replaceLangFromUrl(url: URL, newLang: Locale): URL {
  const parts = url.pathname.split('/');
  const langIdx = parts.findIndex((segment) =>
    (LOCALES_KEYS as readonly string[]).includes(segment)
  );
  if (langIdx !== -1) {
    parts[langIdx] = newLang;
    url.pathname = parts.join('/');
  }
  return url;
}

export function getLangFromUrl(url: URL): Locale {
  const parts = url.pathname.split('/');
  const found = parts.find((segment) =>
    (LOCALES_KEYS as readonly string[]).includes(segment)
  );
  return (found as Locale) ?? DEFAULT_LOCALE;
}
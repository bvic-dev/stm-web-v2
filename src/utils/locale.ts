import { LOCALES_KEYS, DEFAULT_LOCALE } from "../config.ts";

type Locale = typeof LOCALES_KEYS[number];

function isValidLocale(lang: string): lang is Locale {
  return (LOCALES_KEYS as readonly string[]).includes(lang);
}

export function getNavigatorLocale(locale: string | null): Locale {
  if (!locale) return DEFAULT_LOCALE;
  const parts = locale.split("-");
  const base = parts[0] as Locale;
  if (isValidLocale(base)) return base;
  return DEFAULT_LOCALE;
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
export const LOCALES = [
    { key: "en", index: 0 },
    { key: "fr", index: 1 },
    { key: "de", index: 2 },
] as const;
export const DEFAULT_LOCALE = "en" as const;

export const LOCALES_KEYS = LOCALES.map(locale => locale.key) as readonly string[];

export const SITE_URL = "https://bvic-dev.github.io" as const;
export const SITE_BASE = "stm-web-v2" as const;

export const PAGES = [
  { key: "home", href: "/" },
  { key: "blog", href: "blog" },
  { key: "faq", href: "faq" },
  { key: "changelog", href: "changelog" },
  { key: "contact", href: "contact" },
  { key: "privacy", href: "privacy" },
];

export const THEME = [
    { key: "auto", index: 0 },
    { key: "dark", index: 1 },
    { key: "light", index: 2 },
] as const;
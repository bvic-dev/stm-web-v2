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

export const EMAIL = "b.vic.dev@gmail.com" as const;
export const DISCORD_URL = "https://discord.gg/22xxwbQebe" as const;
export const STRAVA_URL = "https://www.strava.com/clubs/sporttrackmerger" as const;
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61576930135105" as const;
export const INSTAGRAM_URL = "https://www.instagram.com/sporttrackmerger" as const;
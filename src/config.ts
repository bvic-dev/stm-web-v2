export const LOCALES = [
  { key: "en", index: 0 },
  { key: "fr", index: 1 },
  { key: "de", index: 2 },
  { key: "es", index: 3 },
] as const;
export const DEFAULT_LOCALE = "en" as const;
export const LOCALES_KEYS = LOCALES.map(locale => locale.key) as readonly string[];

export const SITE_URL = "https://www.sporttrackmerger.com" as const;

export const PAGES = [
  { key: "home", href: "/" },
  { key: "contact", href: "contact" },
  { key: "faq", href: "faq" },
];

export const LEGAL_MOBILE_PAGES = [
  { key: "mobile-privacy", href: "mobile/privacy" },
  { key: "mobile-cgu", href: "mobile/cgu" },
  { key: "mobile-cgv", href: "mobile/cgv" },
]

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
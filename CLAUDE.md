# stm-web-v2 — Sport Track Merger website

## Overview

Static **Astro 5** website for Sport Track Merger. Serves as landing page, FAQ, contact, mobile legal pages (Terms of Use / Sale, Privacy) and the Strava OAuth callback page (deep link back to the mobile app).

Production URL: `https://www.sporttrackmerger.com`

## Commands

```bash
npm run dev       # Dev server (--host included)
npm run build     # Production build
npm run preview   # Preview the build
npm run test      # Vitest tests
```

## Tech stack

- **Framework**: Astro 5 (static generation)
- **CSS**: Tailwind CSS 4 + DaisyUI 5
- **Tests**: Vitest
- **Sitemap**: @astrojs/sitemap (some pages excluded)

## Page structure

```
src/
├── pages/
│   ├── index.astro            # Redirect to default locale
│   ├── 404.astro
│   └── [lang]/
│       ├── index.astro        # Landing page
│       ├── contact/
│       ├── faq/
│       ├── mobile/            # Terms of Use / Sale, Privacy (mobile legal)
│       └── auth/strava/callback/  # OAuth deep link (excluded from sitemap)
├── i18n/
│   ├── en.json   ← default locale
│   ├── fr.json
│   ├── de.json
│   ├── es.json
│   └── pt-pt.json
├── components/
├── layouts/
├── content/
├── utils/
└── config.ts    # Locales, URLs, pages, constants
```

## Internationalization

- **5 languages**: `en` (default), `fr`, `de`, `es`, `pt-pt` (Brazilian Portuguese `pt-br` planned)
- Prefixed routing: `/en/`, `/fr/`, `/de/`, `/es/`, `/pt-pt/`
- Config in `src/config.ts` → `LOCALES`, `DEFAULT_LOCALE`
- Translations in `src/i18n/<lang>.json`

**Hard rule**: any new text string must be added to **all i18n files** simultaneously.

To add a new language, see `.claude/skills/add-language/SKILL.md`.

## Important constants (`src/config.ts`)

```ts
SITE_URL = "https://www.sporttrackmerger.com"
EMAIL = "b.vic.dev@gmail.com"
DISCORD_URL, STRAVA_URL, FACEBOOK_URL, INSTAGRAM_URL
```

## Pages excluded from sitemap

- `/[lang]/auth/strava/callback/` — OAuth deep-link page only
- `/[lang]/mobile/cgu|cgv|privacy/` — mobile legal pages

## Product context

The site is the public-facing showcase of the mobile app. Communication tone: direct, focused on user benefits. No technical jargon in visible copy.

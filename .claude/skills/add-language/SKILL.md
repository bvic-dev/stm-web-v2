---
name: add-language
description: Use when adding a new language to the Sport Track Merger Astro website. Covers config.ts LOCALES update, sitemap filter in astro.config.mjs, robots.txt, i18n JSON file creation, mobile legal markdown content (CGU/CGV/Privacy), store badge assets, and the language picker dropdown propagation. Routes /[lang]/* are generated automatically by Astro i18n once config.ts is updated.
---

# Add Language — Sport Track Merger Web (Astro)

Skill for cleanly adding a new language to the `sporttrackmerger.com` website. Strict scope: **Astro site only**.

## See also (other skills to invoke in the right order)

Adding a language to STM touches **3 repos**. This skill only covers the website. For the other parts, invoke the matching skills:

- 📱 **Mobile app (KMP)**: `stm-kmp/.claude/skills/add-language/SKILL.md` — strings.xml, SupportedLang enum, Android/iOS locales config, FirebaseRemoteConfigRepository.
- 🔥 **Firebase Remote Config**: `firebase-fonctions/.claude/skills/add-language/SKILL.md` — `remoteconfig/{debug,prod}.template.json` files + deployment.

**Logical deployment order**: this site **first** (pages must exist before Firebase Remote Config points to them, otherwise 404 in the mobile app), then Remote Config, then the mobile app.

---

## Step 0 — Brief the user (BLOCKING — do this before any code change)

Before touching any file, gather these answers from the user. Skipping them causes 404s in the mobile app and inconsistent behavior across repos.

### Q1 — Which language?

Collect:
- ISO 639-1 code (e.g. `pt`, `it`, `zh`)
- Endonym (the language's own name)
- Flag emoji

### Q2 — Regional variants (must align with the mobile decision)

Determine whether the language has **regional variants with significant UX-relevant differences** (vocabulary, orthography, script). Use your own knowledge — do not ask the user to recite this.

Two cases, two strategies:

| Case | Examples | Web routes |
|---|---|---|
| **No significant variant** | German, Italian, French | One route: `/<xx>/` |
| **Significant variants** | Portuguese (BR ↔ PT), Chinese (simplified ↔ traditional) | **Default + override** routes: `/<xx>/` (majority worldwide variant) + `/<xx>-<yy>/` (regional override) |

**Convention for default + override** (universal — followed by Strava, Apple, Google, CLDR):
- `xx` (no suffix) = the **majority worldwide variant**. The catch-all default.
- `xx-yy` = explicit regional override.

The web slug must mirror the mobile `SupportedLang.code` (lowercase + hyphen instead of dash):
- Mobile `"xx"` ↔ Web `/xx/`
- Mobile `"xx-YY"` ↔ Web `/xx-yy/`

Mismatch = 404 in the mobile app when it fetches Remote Config URLs.

**Always confirm with the user explicitly:**
- "What was decided on the mobile side — default only, or default + regional override?"
- The answer here MUST match the mobile decision exactly.

### Q3 — Translation source

The user only verifies English and French. All other languages are AI-translated.

- **Primary source**: `src/i18n/en.json` (English).
- **Secondary source** for resolving ambiguity (idioms, tone, length, register): `src/i18n/fr.json`.
- For the 3 legal markdowns (CGU, CGV, Privacy): use the corresponding files in `src/content/en/mobile/` (or `fr/mobile/` if the EN version is more terse than the FR one — the FR is often the canonical for legal content because it was written for French law first).
- Never invent meaning that isn't supported by both EN and FR — if a string is unclear in both, ask the user before guessing.
- Legal markdowns mention GDPR — keep the translation legally accurate. Recommend a native speaker review for legally-sensitive paragraphs.

---

## i18n architecture of the site

- **Native Astro i18n** (no external dependency).
- **Routing**: `prefixDefaultLocale: true` → all routes are prefixed (`/en/`, `/fr/`, etc.).
- **Dynamic pages**: `src/pages/[lang]/*.astro` use `generateLangStaticPaths()` which iterates over `LOCALES_KEYS`. **Once `config.ts` is updated, all `/<key>/*` routes exist automatically**.
- **Content**: 1 JSON file per language in `src/i18n/<key>.json` + 3 markdown files in `src/content/<key>/mobile/` (legal pages).
- **Assets**: App Store / Play Store badges per language in `src/assets/badges/<key>/`.

---

## Naming reference table

For each variant decided in Step 0, fill these values before editing code:

| Variable | Generic example (`xx`) | Regional override example (`xx-YY`) |
|---|---|---|
| Routing key (= folder/URL) | `xx` | `xx-yy` (lowercase + hyphen) |
| Endonym (display name in picker) | `<endonym> (<majority-region>)` * | `<endonym> (<region>)` |
| Flag emoji | flag of the majority region | flag of the override region |
| App Store URL country segment | varies (see below) | varies (see below) |
| Play Store `hl=` parameter | varies (see below) | varies (see below) |

\* When both generic and override coexist in the picker, the generic also gets a region suffix to disambiguate (e.g. `Português (Brasil)` for `pt`, `Português (Portugal)` for `pt-pt`). Never two identical labels in the picker.

**App Store URL country segment** ≠ ISO language code:
- Apple uses **country** codes (`/us/`, `/fr/`, `/br/`, `/pt/`, `/tw/`).
- For a generic locale that maps to a majority country, use that country (e.g. `pt` → `/br/` because the generic Portuguese = Brazilian).
- For a regional override, use the override country (e.g. `pt-pt` → `/pt/`).
- Verify by manually browsing https://apps.apple.com in the target country.

**Play Store `hl=` parameter**:
- Google accepts both bare language tags and full BCP 47 tags. Stick to the BCP 47 standard for consistency: `hl=pt-BR` for the generic Portuguese (= Brazilian), `hl=pt-PT` for the override.
- For non-variant languages, the bare tag works (`hl=fr`, `hl=de`).

---

## File modifications

### 1. `src/config.ts` — declare the language

Add an entry to the `LOCALES` array. The `index` is the next available integer after the highest existing one. Order in the array determines order in the language picker.

```typescript
export const LOCALES = [
  // existing entries
  { key: "<key>", index: <next-index> },
] as const;
```

Add **one entry per variant** decided in Step 0 (one for generic, plus one for each override).

This is the **single change** that unlocks Astro i18n routing, the language picker, and the sitemap.

### 2. `astro.config.mjs` — exclude noindex pages from the sitemap

Add 4 lines to the `sitemap` filter for each new key:

```javascript
filter: (page) =>
  // ... other languages ...
  page !== SITE_URL + '/<key>/auth/strava/callback/' &&
  page !== SITE_URL + '/<key>/mobile/cgu/' &&
  page !== SITE_URL + '/<key>/mobile/cgv/' &&
  page !== SITE_URL + '/<key>/mobile/privacy/',
```

⚠️ Without these 4 lines, the sitemap exposes legal pages and the Strava callback to Google → bad SEO + duplicate legal content across languages.

### 3. `public/robots.txt` — disallow noindex pages for the new locale

Add 4 `Disallow` lines for each new key (mirroring the existing entries):

```
Disallow: /<key>/auth/strava/callback/
Disallow: /<key>/mobile/cgu/
Disallow: /<key>/mobile/cgv/
Disallow: /<key>/mobile/privacy/
```

The `<meta robots="noindex,nofollow">` already on these pages prevents indexation, but `robots.txt` also blocks **crawling**, which saves crawl budget. Both layers are needed for clean SEO hygiene.

### 4. `src/i18n/<key>.json` — create the translation file

Procedure (per variant):
1. Copy `src/i18n/en.json` as the structural template.
2. Translate all values (keys stay unchanged) following the rules from Q3 (EN primary, FR secondary).
3. Specifically adapt the sections below.

#### `nav.languages` — flag + endonym (with region suffix when default + override coexist)

```json
"languages": [
  { "label": "🇬🇧 English" },
  { "label": "🇫🇷 Français" },
  { "label": "🇩🇪 Deutsch" },
  { "label": "🇪🇸 Español" },
  { "label": "🇧🇷 Português (Brasil)" },
  { "label": "🇵🇹 Português (Portugal)" }
]
```

The order of entries in this array MUST match the `index` order in `config.ts` LOCALES.

#### `nav.themes` — translated labels

Translate `Auto`, `Dark`, `Light` according to the language.

#### `storeBadges.playstore_url` and `storeBadges.appstore_url`

```json
"storeBadges": {
    "playstore_url": "https://play.google.com/store/apps/details?id=com.bvic.sporttrackmerger&hl=<play-tag>",
    "appstore_url": "https://apps.apple.com/<apple-country>/app/sport-track-merger/id6736858288"
}
```

Refer to the Naming reference table above for the right values.

#### `footer.copyright` — preserve the `{year}` placeholder.

#### `faq.questions` — array of question/answer pairs to translate fully.

### 5. All existing `i18n/*.json` — propagate the new flag entries

The language picker reads `nav.languages[index]` from the current locale's JSON file. So in **each** existing file (`en.json`, `fr.json`, ...), add new entries to the `nav.languages` array at the same `index` as in `config.ts`.

```json
{ "label": "🇧🇷 Português (Brasil)" }
```

Convention: language names in `nav.languages` are endonyms, so identical across all files (the user sees their own language's name in their own script regardless of the active locale).

When adding default + override, you propagate **both** flag entries in every file.

### 6. Legal markdowns — `src/content/<key>/mobile/{cgu,cgv,privacy}.md`

For each variant, create 3 markdown files.

Procedure:
1. Copy the equivalent file from another language (preferably FR for legal canonicality, or EN for structure).
2. Keep the YAML frontmatter exactly with its `head` and `title` fields.
3. Translate the markdown preserving structure (h2, lists, blockquotes, frontmatter).
4. Preserve the `**Last updated: <date>**` line (translate the label, keep the date format consistent with the other locales).

⚠️ These files mention GDPR. Keep the translation legally accurate.

### 6.bis. Update the language list in ALL existing legal markdowns

`cgu.md` section 2 ("Description of the application") contains a sentence listing the languages the app is available in (e.g. *"The application is available in **French**, **English**, **German**, **Spanish**, **Portuguese** and may be translated into other languages in the future."*).

When you add a new language, this sentence must be **updated in every existing `cgu.md` file** (`en/`, `fr/`, `de/`, `es/`, `pt/`, `pt-pt/`, …) to include the new language. Easy to forget because it lives in the *body* of the markdown, not in i18n JSON.

```bash
# Sanity check: same number of bolded language items per file
grep -c '\*\*' src/content/*/mobile/cgu.md
```

Each new language must be added in every file using that file's own language naming (endonym or exonym depending on convention used in that file — match the existing pattern).

> Variants note: if the language has a generic + override (e.g. `pt` + `pt-pt`), list **one** entry covering both (e.g. just "Portuguese" / "português"), not two — the legal text describes the language, not the regional variant.

### 7. Store badges — `src/assets/badges/<key>/{google_badge.svg,ios_badge.svg}`

Two SVG files per variant:
- `google_badge.svg` — official "Get it on Google Play" badge in the target language.
- `ios_badge.svg` — official "Download on the App Store" badge (Black lockup) in the target language.

Both are loaded by `src/components/StoreBadges.astro` via dynamic SVG-as-component import:
```astro
const AppleLogo = (await import(`../assets/badges/${lang}/ios_badge.svg`)).default;
const GoogleLogo = (await import(`../assets/badges/${lang}/google_badge.svg`)).default;
```
Both badges are rendered as `<Logo height={logoHeight} />` — only `viewBox` should be on the SVG element (no baked `width` / `height` attributes), so the badge can scale freely from the `height` prop.

⚠️ **Apple's official SVGs ship with `width="119.66407"` and `height="40"` baked in** — strip both attributes after copying. Otherwise the SVG is locked to its native size (40px tall) regardless of the `height` prop. CSS workarounds don't work cleanly: an SVG's HTML `width` attribute defines its intrinsic dimension, and CSS `width: auto` resolves to that intrinsic value rather than overriding it.

```bash
# After copying any new Apple SVG:
sed -i '' 's/ width="[0-9.]*"//; s/ height="[0-9.]*"//' "src/assets/badges/<key>/ios_badge.svg"
```

Google SVGs don't have this issue (no baked width/height) and work as-is.

#### Where to source the official badges

**Preferred** — official asset bundles, which may already be downloaded in the parent `Code/` directory:
- `Code/Google Play Badge guidelines/Get it on Google Play Badges/Digital/svg/GetItOnGooglePlay_Badge_Web_color_<Language>.svg`
- `Code/Download-on-the-App-Store/<COUNTRY>/Download_on_App_Store/Black_lockup/SVG/*.svg`

If those directories exist, copy from them — they cover most locales and ensure brand-consistency across languages.

**Fallback** — manual download:
- Google Play: https://partnermarketinghub.withgoogle.com/brands/google-play/visual-identity/badge-guidelines/ → choose the language → download SVG. URLs are signed and expire in ~24h, so no scriptable download.
- App Store: https://developer.apple.com/app-store/marketing/guidelines/ → "Download on the App Store" → choose the language → download SVG.

⚠️ If the target language has no official badge, use the English one (acceptable per brand guidelines). Do NOT create a custom badge.

---

## No page modification needed

Pages in `src/pages/[lang]/*.astro` all use `generateLangStaticPaths()` (defined in `src/utils/locale.ts`) which iterates over `LOCALES_KEYS`. Once `config.ts` is updated, all routes below are generated automatically:

- `/<key>/`, `/<key>/contact/`, `/<key>/faq/`, `/<key>/auth/strava/callback/`, `/<key>/mobile/{cgu,cgv,privacy}/`

`hreflang` tags are also generated automatically by `BaseLayout.astro` via `getAbsoluteLocaleUrl()`.

---

## Verification

```bash
npm run build         # full build (compilation + sitemap)
npm run dev           # local server on http://localhost:4321
```

Manually navigate to:
- `/<key>/`, `/<key>/contact/`, `/<key>/faq/`
- `/<key>/mobile/{privacy,cgu,cgv}/`
- `/<key>/auth/strava/callback/`

Checks:
- ✅ Language picker shows the new language(s) with the right flag and endonym from any other language
- ✅ App Store / Play Store badges load correctly and scale to the right height
- ✅ `dist/sitemap-0.xml` after `npm run build`: the new language appears for public pages (home, contact, faq) **but NOT** for callback / mobile/{cgu,cgv,privacy}
- ✅ `<link rel="alternate" hreflang="<key>" href="..."/>` is present in the rendered HTML
- ✅ When default + override coexist: visit both `/xx/` and `/xx-yy/`; check the picker labels visually distinguish them

---

## ⚠️ Coordination with the other repos

- **Before this web deployment**: nothing in the other repos.
- **After this web deployment**: invoke `firebase-fonctions/.claude/skills/add-language/SKILL.md` to update Remote Config — the URL keys must point to the routes created here.
- **On the mobile app side**: invoke `stm-kmp/.claude/skills/add-language/SKILL.md`. The hardcoded URLs in `FirebaseRemoteConfigRepository.kt` must match the pages created here (otherwise 404 fallback in the app).

The web slug = mobile `SupportedLang.code` lowercased with a hyphen instead of an uppercase region. Example: mobile `"pt-PT"` ↔ web `/pt-pt/`. Any mismatch = 404 in the app.

---

## Pitfalls

| Issue | Symptom | Fix |
|---|---|---|
| Forgot the sitemap filter | Legal / callback pages indexed by Google | Add the 4 lines in `astro.config.mjs` for each new key |
| Forgot the `robots.txt` Disallow lines | Google wastes crawl budget discovering noindex pages | Add 4 `Disallow` lines per new locale in `public/robots.txt` |
| Flag at the wrong index | Picker shows the wrong language name | The order of entries in `nav.languages` (every JSON) must match the `index` order in `config.ts` |
| Forgot `nav.languages` in another locale | From that locale, the new language doesn't appear in the picker | Add the entry at the matching index in EVERY existing JSON file |
| Missing markdown pages | Astro build fails (`Cannot find module ../../../content/<key>/mobile/cgu`) | Create the 3 `.md` files in `src/content/<key>/mobile/` for each variant |
| Missing badges folder | Build fails (`Cannot find module ../assets/badges/<key>/ios_badge.svg`) | Create the folder + copy 2 SVGs from official bundles or fallback to `en/` |
| Apple badge stuck at 40px tall | `height` prop ignored | Apple official SVGs have `width="119.66407"` and `height="40"` baked in — strip both attributes from each `ios_badge.svg`. CSS `width:auto` does NOT work because the SVG attribute defines intrinsic size |
| Mishandled JSON special characters | Build fails (`Unexpected token in JSON`) | Properly escape quotes (`\"`); use a JSON linter |
| App Store URL with the wrong country | The badge leads to a different localized store page | Verify the country segment by manually browsing apps.apple.com |
| URL slug `/pt_pt/` instead of `/pt-pt/` | Unexpected routes, mismatch with Remote Config | Convention: lowercase + hyphen, never underscore |
| Web slug doesn't match mobile `SupportedLang.code` | Mobile app fetches a 404 URL from Remote Config | Web `/xx-yy/` ↔ mobile `"xx-YY"` (case difference, hyphen position is the same) |
| Two identical picker labels | Users can't distinguish variants | When default + override coexist, both labels include the region in parentheses (`Português (Brasil)`, `Português (Portugal)`) |
| Forgot to update the language list in ALL `cgu.md` files | Legal text in EN/FR/DE/ES still says "available in 4 languages" while PT pages list 5 → factual mismatch | Update the "available in" sentence in **every** existing `cgu.md` (section 2) to include the new language. See step 6.bis. |

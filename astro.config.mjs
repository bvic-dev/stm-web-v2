
import { defineConfig } from 'astro/config';
const { LOCALES_KEYS, DEFAULT_LOCALE, SITE_URL, SITE_BASE } = await import('./src/config.ts');

const LOCALES_DICT = Object.fromEntries(
  LOCALES_KEYS.map(key => [key, key])
)

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: [...LOCALES_KEYS],
    defaultLocale: DEFAULT_LOCALE,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    }
  },

  integrations: [sitemap({
    filter: (page) =>
      page !== SITE_URL + '/' + SITE_BASE + '/auth/strava/callback/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/en/auth/strava/callback/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/fr/auth/strava/callback/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/de/auth/strava/callback/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/mobile/cgu/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/en/mobile/cgu/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/fr/mobile/cgu/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/de/mobile/cgu/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/mobile/cgv/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/en/mobile/cgv/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/fr/mobile/cgv/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/de/mobile/cgv/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/mobile/privacy/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/en/mobile/privacy/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/fr/mobile/privacy/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/de/mobile/privacy/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/' &&
      page !== SITE_URL + '/' + SITE_BASE + '/contact/',
    i18n: {
      defaultLocale: DEFAULT_LOCALE,
      locales: LOCALES_DICT,
    },
  })]
});
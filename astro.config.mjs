
import { defineConfig } from 'astro/config';
const { LOCALES_KEYS, DEFAULT_LOCALE, SITE_URL } = await import('./src/config.ts');

const LOCALES_DICT = Object.fromEntries(
  LOCALES_KEYS.map(key => [key, key])
)

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

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
      page !== SITE_URL + '/en/auth/strava/callback/' &&
      page !== SITE_URL + '/fr/auth/strava/callback/' &&
      page !== SITE_URL + '/de/auth/strava/callback/' &&
      page !== SITE_URL + '/es/auth/strava/callback/' &&
      page !== SITE_URL + '/en/mobile/cgu/' &&
      page !== SITE_URL + '/fr/mobile/cgu/' &&
      page !== SITE_URL + '/de/mobile/cgu/' &&
      page !== SITE_URL + '/es/mobile/cgu/' &&
      page !== SITE_URL + '/en/mobile/cgv/' &&
      page !== SITE_URL + '/fr/mobile/cgv/' &&
      page !== SITE_URL + '/de/mobile/cgv/' &&
      page !== SITE_URL + '/es/mobile/cgv/' &&
      page !== SITE_URL + '/en/mobile/privacy/' &&
      page !== SITE_URL + '/fr/mobile/privacy/' &&
      page !== SITE_URL + '/de/mobile/privacy/' &&
      page !== SITE_URL + '/es/mobile/privacy/',
    i18n: {
      defaultLocale: DEFAULT_LOCALE,
      locales: LOCALES_DICT,
    },
  })]
});
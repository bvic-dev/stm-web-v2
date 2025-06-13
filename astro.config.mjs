// @ts-check
import { defineConfig } from 'astro/config';
const { LOCALES, DEFAULT_LOCALE, I18N_ROUTING, SITE_URL, SITE_BASE } = await import('./src/config.ts');

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: SITE_BASE,
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: [...LOCALES],
    defaultLocale: DEFAULT_LOCALE,
    routing: I18N_ROUTING
  }
});
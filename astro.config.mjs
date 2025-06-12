// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://bvic-dev.github.io/',
  base: '/stm-web-v2',
  vite: {
    plugins: [tailwindcss()]
  }
});
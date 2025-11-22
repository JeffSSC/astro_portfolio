// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), partytown()],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  site: 'https://jeffsc.com.br',
});
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  devToolbar: {
    enabled: false
  },
  output: "server",
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'pt'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
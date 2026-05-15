import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://edithdevstudio.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  adapter: cloudflare()
});
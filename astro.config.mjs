import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// IMPORTANT: replace YOUR_GITHUB_USERNAME before publishing.
const username = 'Kingbirdzmr';

export default defineConfig({
  site: `https://${username}.github.io`,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  i18n: {
    locales: ['en', 'zh', 'ja'],
    defaultLocale: 'en',
    routing: 'manual'
  }
});

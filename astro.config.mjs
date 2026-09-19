import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const username = 'Kingbirdzmr';

export default defineConfig({
  site: `https://${username}.github.io`,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()]
});
});

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.roundsboard.com',
  integrations: [
    starlight({
      title: 'Roundsboard Wiki',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        pl: { label: 'Polski', lang: 'pl' },
      },
      sidebar: [
        {
          label: 'Guide',
          translations: { pl: 'Przewodnik' },
          autogenerate: { directory: 'guide' },
        },
      ],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/tourney-app/roundsboard-wiki',
        },
      ],
    }),
  ],
});

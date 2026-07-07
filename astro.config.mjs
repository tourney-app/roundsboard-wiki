// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://wiki.roundsboard.com',
  integrations: [
    starlight({
      title: 'RoundsBoard Wiki',
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        pl: { label: 'Polski', lang: 'pl' },
      },
      sidebar: [
        {
          label: 'Getting started',
          translations: { pl: 'Zacznij tutaj' },
          slug: 'getting-started',
        },
        {
          label: 'Compendium',
          translations: { pl: 'Kompendium' },
          autogenerate: { directory: 'compendium' },
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

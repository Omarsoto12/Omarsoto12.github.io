// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserPageRepo = repoName.toLowerCase() === 'omarsoto12.github.io';

// https://astro.build/config
export default defineConfig({
  site: 'https://omarsoto12.github.io',
  base: isUserPageRepo ? '/' : repoName ? `/${repoName}` : '/',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src/pages',
        '@pages': '/src/pages',
        '@styles': '/src/styles',
        '@encabezado': '/src/pages/encabezado',
        '@habilidades': '/src/pages/habilidades',
        '@sobre_mi': '/src/pages/sobre_mi'
      }
    }
  }
});
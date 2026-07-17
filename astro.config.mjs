import { defineConfig } from 'astro/config';

export default defineConfig({
  // Obligatoire pour GitHub Pages
  site: 'https://AsDuClavier.github.io',
  base: '/Prob_Base/',
  outDir: './dist',
  output: 'static', // Génère du HTML pur
});

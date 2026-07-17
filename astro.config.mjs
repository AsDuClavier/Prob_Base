import { defineConfig } from 'astro/config';

export default defineConfig({
  // Obligatoire pour GitHub Pages
  site: 'https://<ton-pseudo>.github.io',
  base: '/<nom-du-depot>', 
  output: 'static', // Génère du HTML pur
});

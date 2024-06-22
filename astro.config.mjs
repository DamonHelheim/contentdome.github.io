import { defineConfig } from 'astro/config'
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const LIVE_URL = 'https://damonhelheim.github.io';
const SUB_URL = 'contentdome.github.io';

export default defineConfig({
  site: 'https://damonhelheim.github.io',
  base: 'contentdome.github.io',
})

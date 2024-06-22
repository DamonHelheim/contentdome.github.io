import { defineConfig } from 'astro/config'
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const LIVE_URL = 'https://damonhelheim.github.io';
const SUB_URL = 'contentdome.github.io';

export default defineConfig({
  site: LIVE_URL,
  base: SUB_URL,
})

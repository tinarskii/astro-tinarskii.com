import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://tin.otternoon.com",
  integrations: [mdx(), sitemap(), vue()],
  output: "static",
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()]
  }
});
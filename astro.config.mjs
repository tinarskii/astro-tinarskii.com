import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://tinarskii.com",
  integrations: [mdx(), sitemap(), tailwind(), vue()],
  output: "hybrid",
  adapter: vercel()
});
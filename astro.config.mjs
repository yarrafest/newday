import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://yarravillefestival.com.au",
  image: {
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
  integrations: [tailwind(), mdx(), icon(), sitemap()],
});

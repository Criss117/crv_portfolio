// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

// import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  experimental: {
    svg: {
      mode: "sprite",
    },
  },
  env: {
    schema: {
      BASE_URL: envField.string({ context: "server", access: "public" }),
    },
  },
});

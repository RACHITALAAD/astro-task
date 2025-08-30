// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://project-astro-rachita.netlify.app/",
  integrations: [preact()]
});
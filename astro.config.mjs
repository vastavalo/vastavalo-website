import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kameraseuravastavalo.fi",
  integrations: [tailwind()],
});

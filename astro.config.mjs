import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://vastavalo.github.io", // TODO: change to custom domain
  base: "/vastavalo-website",
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[hash][extname]",
        },
      },
    },
  },
});

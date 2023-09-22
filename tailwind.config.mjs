import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,md,mdx}"],
  plugins: [typography],
  theme: {
    extend: {
      fontFamily: {
        title: ["Overpass", ...defaultTheme.fontFamily.sans],
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

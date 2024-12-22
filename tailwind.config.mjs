/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: {
            100: "#FFFFFF",
            200: "#e0e0e0",
            300: "#9b9b9b",
          },
          accent: {
            100: "#7F7F7F",
            200: "#ffffff",
          },
          text: {
            100: "#FFFFFF",
            200: "#777777",
          },
          bg: {
            100: "#000000",
            200: "#161616",
            300: "#2c2c2c",
          },
        },
        light: {
          primary: {
            100: "#1E2022",
            200: "#34373b",
            300: "#F0F5F9",
          },
          accent: {
            100: "#788189",
            200: "#e1e4e6",
          },
          text: {
            100: "#1E2022",
            200: "#52616B",
          },
          bg: {
            100: "#F0F5F9",
            200: "#C9D6DF",
            300: "#bfc7d1",
          },
        },
      },
    },
  },
  plugins: [],
};

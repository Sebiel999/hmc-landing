/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Grotesk", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
      },
      colors: {
        green: "var(--green)",
        black: "var(--black)",
        dark: "var(--dark)",
        white: "var(--white)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        action: "var(--action)",
        'mb': {
          '50': '#eef7ff',
          '100': '#dceeff',
          '200': '#b2dfff',
          '300': '#6dc6ff',
          '400': '#20a8ff',
          '500': '#008dff',
          '600': '#006edf',
          '700': '#0057b4',
          '800': '#004a94',
          '900': '#003366',
          '950': '#002651',
        },
      },
    },
  },
  plugins: [],
};

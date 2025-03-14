/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
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
        'sb': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#1b1b1b',
        },
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

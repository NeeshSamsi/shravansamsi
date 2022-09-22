/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFF4DC",
        dark: "#22201C",
        "dark-off": "#2E2C26",
        accent: "#FFBA25",
      },
      fontFamily: {
        sans: "Poppins",
        serif: "Noto Serif",
      },
      screens: {
        "2xl": "1920px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [require("tailwind-hamburgers"), require('@headlessui/tailwindcss')],
};

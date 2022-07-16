/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: "#f67599",
        grey: {
          100: "#FFFFFF",
          200: "#afb1bd",
          300: "#4a4a4a",
          500: "#2a2a2a",
          600: "#333333",
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        secondary: '#f67599',
        grey: {
          100: "#FFFFFF",
          200: '#afb1bd',
          300: "#4a4a4a",
          500: "#2a2a2a",
          600: '#333333'
        },
      },
    },
  },
  plugins: [],
}

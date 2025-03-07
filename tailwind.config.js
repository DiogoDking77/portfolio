/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}


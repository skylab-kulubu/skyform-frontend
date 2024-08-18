/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
          'sky-green': '#27a68e',
          'sky-pink' : '#eadaff',
          'sky-back' : '#06032c'
        },
        fontFamily: {
          bebasNeue: ['"Bebas Neue"', "sans-serif"]
        }
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};


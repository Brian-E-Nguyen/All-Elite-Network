/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { max: '639px' },
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      'elite-gold-dark': '#b19534',
      'elite-gold-light': '#e2b20a',
      yellow: colors.yellow,
      red: colors.red,
      black: colors.black,
      neutral: colors.neutral,
    },
    extend: {},
  },
  plugins: [],
};

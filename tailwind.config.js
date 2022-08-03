/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      eliteGold: '#d6bc6d',
    },
    extend: {
      colors: {
        red: colors.red,
        white: colors.white,
        black: colors.black,
        gray: colors.gray,
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
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
    },
    extend: {},
  },
  plugins: [],
};

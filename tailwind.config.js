/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'elrow-yellow': '#FFD600',
        'elrow-purple': '#8585FF',
        'elrow-orange': '#FF502B',
        'elrow-pink': '#E92A5F',
        'elrow-cream': '#FFFACF',
        'elrow-black': '#101010',
      },
      fontFamily: {
        'woodburger': ['Bebas Neue', 'sans-serif'],
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

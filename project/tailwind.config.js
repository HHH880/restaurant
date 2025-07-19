/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#8B0000',
        'dark-burgundy': '#5D0000',
        gold: '#D4AF37',
        cream: {
          50: '#FFFEF7',
          100: '#FDF6E3',
          200: '#F5E6D3'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
      }
    },
  },
  plugins: [],
};
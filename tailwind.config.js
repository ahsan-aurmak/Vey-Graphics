/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A192F',
          slate: '#64718A',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(10, 25, 47, 0.8)',
      },
    },
  },
  plugins: [],
};

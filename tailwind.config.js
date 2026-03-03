/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0A192F',
          slate: '#64718A',
          mist: '#A8B7CC',
          steel: '#1A2D4A',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        card: '0 24px 70px -34px rgba(5, 14, 30, 0.9)',
        glow: '0 0 0 1px rgba(168, 183, 204, 0.12), 0 30px 80px -45px rgba(168, 183, 204, 0.6)',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0B0F12',
          light: '#161B1F',
        },
        secondary: {
          light: '#E6EEF0',
          mid: '#B9C8C9',
          dark: '#809599',
        },
        accent: {
          DEFAULT: '#00bf99',
          hover: '#00d9a8',
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
        quantico: ['Quantico', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        audiowide: ['Audiowide', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

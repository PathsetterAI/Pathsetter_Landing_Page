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
          bg: '#000000',
          light: '#121212',
        },
        secondary: {
          light: '#FFFFFF',
          mid: '#A1A1AA',
          dark: '#52525B',
        },
        accent: {
          DEFAULT: '#00bf99',
          hover: '#00d9a8',
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        accent: ['Outfit', 'sans-serif'],
        michroma: ['Michroma', 'sans-serif'],
        unbounded: ['Unbounded', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
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

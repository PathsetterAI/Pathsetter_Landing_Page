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
          bg: 'var(--bg-base)',
          light: 'var(--bg-surface)',
        },
        secondary: {
          light: 'var(--text-primary)',
          mid: 'var(--text-secondary)',
          dark: 'var(--text-muted)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: 'var(--accent-hover)',
        },
      },
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

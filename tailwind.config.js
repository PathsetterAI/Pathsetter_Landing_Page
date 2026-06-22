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
          light: 'var(--accent-light)',
        },
        brand: {
          yellow: 'var(--brand-yellow)',
          amber: 'var(--brand-yellow-deep)',
          cream: 'var(--brand-yellow-light)',
        },
        border: 'var(--border-color)',
      },
      fontFamily: {
        primary: ['var(--font-primary)', 'sans-serif'],
        accent: ['var(--font-accent)', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

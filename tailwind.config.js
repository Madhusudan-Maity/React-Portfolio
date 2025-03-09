import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
        'pattern-dots': "repeating-radial-gradient(circle, currentColor, currentColor 2px, transparent 2px, transparent 7px)",
      },
      backgroundSize: {
        'grid-pattern': '24px 24px',
        'pattern-dots': '20px 20px',
      },
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#a78bfa',
          500: '#adb5bd',
          600: '#7c3aed',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
        accent: {
          DEFAULT: '#7c3aed',
          hover: '#6d28d9',
        },
      },
      screens: {
        'xs': '475px',
        ...defaultTheme.screens,
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'spin-slow': 'spin 20s linear infinite',
        'reverse-spin': 'reverse-spin 15s linear infinite',
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
          to: {
            transform: 'rotate(0deg)'
          },
        }
      },
    },
  },
  plugins: [],
}
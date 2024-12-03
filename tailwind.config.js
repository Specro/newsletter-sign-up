/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      },
      colors: {
        tomato: '#FF6257',
        'dark-slate-gray': '#242742',
        'charcoal-gray': '#36384E',
        gray: '#9294A0',
        indigo: '#36384D',
        orange: '#FF6A3A',
        rose: '#FF537A'
      },
      maxWidth: {
        'sign-up': '930px',
        'confirm': '500px'
      },
      boxShadow: {
        button: '0 15px 25px 0 rgba(255, 106, 58, 0.5)'
      },
      fontSize: {
        '6xl': '3.5rem',
        '5xl': '2.5rem'
      },
      borderRadius: {
        '4xl': '36px'
      }
    },
  },
  plugins: [],
}


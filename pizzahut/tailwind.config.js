/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /* fontFamily: {
        'Frankfurter': 'Frankfurter',
      }, */
      colors: {
        'pizzaGray' : '#2F2B29', 
        'pizzaRed' : '#D4000F',
        'pizzaYellow' : '#FBEA6C',
        'pizzaGrayAlt' : '#E6E6E6',
        'pizzaTextGray' : '#333',
        
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
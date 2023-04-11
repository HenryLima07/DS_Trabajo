/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Frankfurter': 'Frankfurter',
      },
      colors: {
        'chinaButtons' : '#D92827', 
        'chinaGreen' : '#00A84F',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
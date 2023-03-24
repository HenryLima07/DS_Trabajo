/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "wendysSimpleFont": "wendysSimpleFont",
        "wendysFont": "wendysFont"
      },

      colors:{
        "wendys-background": '#CD2028',
        "wendys-blue": "#029CD5",
        'wendys-darkblue': '#027daa',
      },
      backgroundSize:{
        "normalWaterMarkSize": "40rem",
        "mediumWaterMarkSize": "32rem",
        "smallWaterMarkSize": "80%"
      }
    },
  },
  plugins: [
    //require('tw-elements/dist/plugin')

  ],
}
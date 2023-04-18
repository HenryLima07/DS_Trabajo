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
        "starbucks-Green": "#006F42",
        "starbucks-Gray": "#E6E6E6",
      },
      backgroundSize:{
        "normalWaterMarkSize": "40rem",
        "mediumWaterMarkSize": "32rem",
        "smallWaterMarkSize": "80%"
      },
      backgroundPosition:{
        "normalWaterMarkPositon" : "120% 70%",
        "mediumWaterMarkPositon" : "110% 110%",
        "smallWaterMarkPositon": "130% 110%"
      }
      
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')

  ],
}
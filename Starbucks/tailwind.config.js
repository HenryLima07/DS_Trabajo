/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "mohave": "mohave",
        "ronnia": "ronnia",
        "avenirMedium": "AvenirLTStd-Medium",
        "lato": "lato",
        "bebasN": "bebas neue",
        "openSans": "open-sans"
      },

      colors:{
        "starbucks-Green": "#006F42",
        "starbucks-Gray": "#E6E6E6",
        "starbucks-Dark-Gray": "#888888",
        "starbucks-Black": "#1E1E1E",
        "starbucks-red-buttons": "#C4122F",
        "starbucks-Green-alt": "#D4E9E2",

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
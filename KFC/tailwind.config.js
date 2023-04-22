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
        "bebasN": "bebas neue",
        "ronnia": "ronnia",
        "avenirMedium": "AvenirLTStd-Medium",
        "lato": "lato",
        "BNT": "BigNoodleTitling",
        "pacifico": "pacifico",
        "cheddar": "cheddar",
        "neo": "neo",
        "soho": "soho",
          
      },

      colors:{
        "kfc-red": "#820023",
        "kfc-red-alt": "#F6E3D1",
        "kfc-red-buttons": "#C4122F",
        "kfc-white": "#FFFFFF",
        "kfc-gray": "#333333",
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
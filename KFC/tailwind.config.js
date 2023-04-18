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
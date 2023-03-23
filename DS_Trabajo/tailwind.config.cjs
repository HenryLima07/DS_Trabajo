/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "wendys-background": '#CD2028',
        "wendys-blue": "#029CD5",
      }
    },
  },
  plugins: [],
}
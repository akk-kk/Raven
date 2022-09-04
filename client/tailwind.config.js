/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          
          DEFAULT:"#1A623F",
          dark:"#0E4D2F"
        }
      },
      fontFamily:{
        poppins:['Poppins', "sans-serif"]
      },
      dropShadow:{
        '3xl':"7px 4px 9px rgba(0, 0, 0, 0.3)"
      }
    },
  },
  plugins: [],
}
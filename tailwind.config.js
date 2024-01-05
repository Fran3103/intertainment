/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors:{
        'red': '#FC4747',
        'white':'#ffffff',
        'darkBlue': '#10141E',
        'blue': '#161D2F',
        'lightBlue': '#5A698F',
        'gray': '#74777d',
        'transparent' : 'rgba(0,0,0,0)'
        
    }
    },
    plugins: [],
  }

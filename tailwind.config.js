/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        gridTemplateColumns: {
            // Simple 16 column grid
            '16': 'repeat(16, minmax(0, 1fr))'}
      },
      screens: {
        'md': '700px',
        // => @media (min-width: 640px) { ... }
  
        'xl': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        '2xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '3xl': '1440px'
         // => @media (min-width: 1440px) { ... }
      },
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

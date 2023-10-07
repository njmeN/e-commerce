/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Exo':['Exo', 'sans-serif']
      },
      container:{
        center:true,
      }

    },
  },
  plugins: [],
}


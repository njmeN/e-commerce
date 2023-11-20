/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      content:{
        'nav-highlight':'url("img/Rectangle\ 55.svg")'
      },
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


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      // google font Start
      fontFamily: {
        'dm': ['DM Sans'],

      },
      // google font End  

      // colors Start
      colors: {
        menuColor: '#767676',
        menuColorh: '#232323',
        shopColor: '#F5F5F3',
         arrivalColor: '#979797'

      },

      // colors End 


      // Container Part

      maxWidth: {
        'headerContainer': '1320px',
        'banerContainer': '962px',

      },
      // Container Part End

      //  Width Part Start
      width: {

        logoW: '20%',
        menuW: '80%'


      },

      //  Width Part Start

      //  bannerImage Start

      backgroundImage: {
        bannerImg: "url('/img/hero-pattern.svg')",
        bnrImg: "url('../src/assets/Intro.png')"

      },



      //  bannerImage End




    },
  },
  plugins: [],
}


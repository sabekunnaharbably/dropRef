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
        hdBg: '#160C6D',
        hbColor: '#FDBB57',
       
        },
      
     // colors End 


      // Container Part

      maxWidth: {
        'headerContainer': '1320px',
        'banerContainer': '962px',

      },

      // Color Part

    },
  },
  plugins: [],
}


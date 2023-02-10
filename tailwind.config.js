/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    
    extend: {
      screens: {
        mn: '375px',
        sm: '642px',
        md: '770px' ,
        lg: '1026px' ,
        xl: '1282px' ,
        '2xl': '1537px'    
    },

      colors: {
        'grennOne': '#337d26',
        'grennTwo': '#266a1d',
        'grennThree': '#1a5713',
        'grennFour': '#0d450a',
        'grennFive': '#003200',

        'darkSecondary': '#242933'
      },

      fontFamily: {
        flame: ['Flame']
      },

      container: {
        center: true
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: true,
  },
}

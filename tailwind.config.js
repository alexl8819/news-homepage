/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    screens: {
      'xs': '375px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        '4.5xl': ['2.5rem', {
          lineHeight: '2.5rem'
        }]
      },
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)'
      },
      backgroundImage: {
        'web3-desktop': 'url("./assets/images/image-web-3-desktop.jpg")',
        'web3-mobile': 'url("./assets/images/image-web-3-mobile.jpg")'
      }
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}

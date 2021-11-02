const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        magnetdarkblue: '#0F1831',
        magnetblue: '#192953',
        magnetyellow: '#FFCC80',
        magnetred: '#FF174F',

        gray: colors.trueGray,
        lightGray: '#EBEBEB'
      },
      screens: {
        'xxs': '525px',
        'xs': '585px',
        'ms': '680px',
        'm': '730px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

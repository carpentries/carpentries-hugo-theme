const colors = require('tailwindcss/colors')
// red, teal, sky, indigo, purple, slate,
module.exports = (theme) => ({
  primary: {

    50: "#E2E9F9",
    100: "#C8D5F3",
    200: "#8DA8E7",
    300: "#577EDB",
    400: "#2A59C6",
    500: "green",
    600: "#183372",
    700: "#122654",
    800: "#0C1937",
    900: "#060D1D",
    950: "#03060D"
  },
  blue: {
    'light': '#E6F1FF',
    'bright': '#0044D7',
    'mid': '#002B66',
    'hover': '#0a58ca',
    'dark':'#081457'
  },
  offwhite: '#FFF7F1',
  gray: {
    'light': '#F8F8F8',
    'mid': '#585858',
    'dark': '#383838'
  },
  red: {
    'bright': '#FF4955'
  },
  secondary: {
    ...colors.slate,
  }
})
const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: colors.cyan,
        lightBlue: colors.lightBlue,
        trueGray: colors.trueGray,
        lime: colors.lime,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

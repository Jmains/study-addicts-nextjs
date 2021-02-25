const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

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
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
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

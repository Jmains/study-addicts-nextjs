// https://nextjs.org/docs/advanced-features/customizing-postcss-config  (To make storybook work)

module.exports = {
  plugins: {
    tailwindcss: {},
    // "postcss-flexbugs-fixes": {},
    // "postcss-preset-env": {
    //   autoprefixer: {
    //     flexbox: "no-2009",
    //   },
    //   stage: 3,
    //   features: {
    //     "custom-properties": false,
    //   },
    // },
    autoprefixer: {},
  },
};

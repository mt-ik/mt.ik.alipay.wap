module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 0,
    },
    "postcss-pxtorem": {
      rootValue: 32,
      propWhiteList: ['*']
    },
  }
}
module.exports = {
  plugins: {
    autoprefixer: {},
    cssnano: {},
    "postcss-mixins": {},
    "postcss-preset-env": {
      stage: 0,
    },
    "postcss-pxtorem": {
      rootValue: 32,
      propWhiteList: ['*']
    },
    "postcss-write-svg": {},
  }
}
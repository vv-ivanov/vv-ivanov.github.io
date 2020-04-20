module.exports = {
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "lodash",
    ["module:fast-async", { spec: true }],
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
  ],
  presets: [
    [
      "@vue/cli-plugin-babel/preset",
      {
        loose: true,
        exclude: ["transform-async-to-generator", "transform-regenerator"],
      },
    ],
  ],
};

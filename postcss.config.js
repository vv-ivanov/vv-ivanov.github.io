module.exports = {
  plugins: {
    autoprefixer: {
      grid: true,
    },
    "postcss-sorting": {
      order: [
        "custom-properties",
        "dollar-variables",
        "declarations",
        "at-rules",
        "rules",
      ],

      "properties-order": "alphabetical",

      "unspecified-properties-position": "bottom",
    },
  },
};

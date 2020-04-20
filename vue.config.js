process.env.VUE_APP_VERSION = require("./package.json").version;
const path = require("path");

module.exports = {
  lintOnSave: false, //process.env.NODE_ENV !== 'production',
  chainWebpack: (config) => {
    config.devtool("none");
    config.devServer.hot(true);
    config.plugin("define").tap((options) => {
      options[0]["process.env"]["VUE_APP_MODERN_BUILD"] =
        process.env.VUE_CLI_MODERN_BUILD;
      return options;
    });
    config.resolve.alias.set(
      "modules",
      path.resolve(__dirname, "node_modules/")
    );
    config.resolve.alias.set("public", path.resolve(__dirname, "public/"));
    config.resolve.alias.set("@", path.resolve(__dirname, "src/"));
    config.resolve.alias.set("assets", path.resolve(__dirname, "src/assets"));
  },
  configureWebpack: {
    plugins: [],
  },
  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
  publicPath:
    process.env.NODE_ENV === "production" ? process.env.VUE_APP_BASEPATH : "/", //"./",
  productionSourceMap: true,
  assetsDir: "./assets",
};

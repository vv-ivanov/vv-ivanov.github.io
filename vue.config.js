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
  pwa: {
    // configure the workbox plugin
    manifestPath: "icons/manifest.json",
    themeColor: "#f51549",
    iconPaths: {
      favicon16: "icons/favicon-16x16.png",
      favicon32: "icons/favicon-32x32.png",
      favicon48: "icons/favicon-48x48.png",
      appleTouchIcon: "icons/apple-touch-icon-152x152.png",
      safariMaskIcon: false,
      msTileImage: false,
    },
    workboxOptions: {
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          // Cache the Google Fonts stylesheets with a stale while revalidate strategy.
          urlPattern: new RegExp(/^https:\/\/fonts\.googleapis\.com/),
          handler: "staleWhileRevalidate",
          options: {
            cacheName: "google-fonts-stylesheets",
            // cacheableResponse: {
            //   statuses: [0, 200]
            // }
          },
        },
        {
          // Cache the Google Fonts webfont files with a cache first strategy for 1 year.
          urlPattern: new RegExp(/^https:\/\/fonts\.gstatic\.com/),
          handler: "cacheFirst",
          options: {
            cacheName: "google-fonts-webfonts",
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 365,
            },
          },
        },
      ],
    },
  },
};

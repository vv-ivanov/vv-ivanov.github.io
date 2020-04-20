// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "core-js/stable";
import Vue from "vue";
import router from "./route/index";

import App from "./App.vue";
// other imports removed for brevity

// common components
import store from "./store/";
import i18n from "./i18n";

const isProd = process.env.NODE_ENV === "production";
const isModernBuild = process.env.VUE_APP_MODERN_BUILD === true;

//other
Vue.config.productionTip = false;

//init app
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");

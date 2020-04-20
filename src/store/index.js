import Vue from "vue";
import Vuex from "vuex";
import schedule from "./modules/schedule";
import VueLocalStorage from "vue-localstorage";

Vue.use(Vuex);
Vue.use(VueLocalStorage);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    schedule,
  },
  strict: debug,
});

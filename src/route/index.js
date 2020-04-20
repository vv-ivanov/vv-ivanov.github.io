import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base:
    process.env.NODE_ENV === "production" ? process.env.VUE_APP_BASEPATH : "/",
  routes: [
    {
      path: "/main",
      name: "Main",
      component: () => import("@/components/pages/Main.vue"),
    },
    {
      path: "/chat",
      name: "Chat",
      component: () => import("@/components/pages/Chat.vue"),
    },
    {
      path: "/spa",
      name: "Spa",
      component: () => import("@/components/pages/Spa.vue"),
    },
  ],
  mode: "history",
});

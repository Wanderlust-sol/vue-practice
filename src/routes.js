import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/pages/Main.vue";
import Next from "./pages/Next.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/next",
      component: Next,
    },
  ],
});

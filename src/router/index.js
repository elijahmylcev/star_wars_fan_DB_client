import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/starships",
    name: "Starships",
    component: () => import("@/views/Starships.vue"),
  },
  {
    path: "/films",
    name: "Films",
    component: () => import("@/views/Films.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

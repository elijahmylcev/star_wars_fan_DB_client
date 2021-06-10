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
    path: "/planets",
    name: "Planets",
    component: () => import("@/views/Planets.vue"),
  },
  {
    path: "/people",
    name: "People",
    component: () => import("@/views/People.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;

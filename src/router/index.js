import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Starships from '@/views/Starships';
import Films from '@/views/Films.vue'

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
    component: Starships,
  },
  {
    path: "/films",
    name: "Films",
    component: Films,
  },
];

const router = new VueRouter({
  // mode: "history",
  routes,
});

export default router;

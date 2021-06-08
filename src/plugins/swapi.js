import Vue from "vue";
import SwapiService from "@/services/swapi-service.js";

export const swapiPlugin = {
  install(Vue) {
    Vue.prototype.$swapi = new SwapiService();
  },
};

Vue.use(swapiPlugin);

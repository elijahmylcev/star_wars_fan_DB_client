import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/dist/darkly/bootstrap.min.css";
// import 'https://bootswatch.com/5/darkly/bootstrap.min.css'
import "@/plugins/swapi";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

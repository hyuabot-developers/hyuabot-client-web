import "@mdi/font/css/materialdesignicons.css";
import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import Vuetify from "vuetify";

Vue.config.productionTip = false;
Vue.use(Vuetify);
const opts = {};
const vuetify = new Vuetify(opts);
new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
  icons: { iconfont: "mdi" },
}).$mount("#app");

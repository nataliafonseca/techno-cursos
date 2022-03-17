import Vue from "vue";

import App from "./App.vue";
import LoadingComponent from "./components/LoadingComponent";
import router from "./router";

Vue.config.productionTip = false;

Vue.component("LoadingComponent", LoadingComponent);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import { router } from "./routes.js";

Vue.config.productionTip = false;

import GlobalComponent from "./components/GlobalComponent";

Vue.component(GlobalComponent.name, GlobalComponent);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");

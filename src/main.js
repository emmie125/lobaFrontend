import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";
import "@/scss/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './validation';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueAxios, axios);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(Cloudinary, {
  configuration: { cloudName: "emmieportfoliollaravel" },
  components: [CldImage, CldTransformation],
});
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

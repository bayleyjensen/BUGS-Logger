import Vue from "vue";
// @ts-ignore
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VModal from "vue-js-modal";
// Vue.config.productionTip = false;
Vue.use(VModal);
// @ts-ignore
new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

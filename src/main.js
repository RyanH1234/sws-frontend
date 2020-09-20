import Vue from 'vue'
import App from './App.vue'

import router from "./router";
import store from "./store";
import axios from "./axios";
import cookies from "vue-cookies";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.use(cookies);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

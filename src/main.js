import Vue from 'vue'
import App from './App.vue'
import Dash from './components/Dash/dashboard.vue';

import router from "./router";
import store from "./store";
import axios from "./axios";
import cookies from "vue-cookies";


Vue.component('app-dash', Dash);

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.use(cookies);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/Login/Login.vue";
import Dash from "../components/Dash/Dash.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/dash",
    name: "Dash", 
    component: Dash
  }
]

const router = new VueRouter({
  routes,
});

export default router;
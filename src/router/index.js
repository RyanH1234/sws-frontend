import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../components/Login/Login.vue";
import Dash from "../components/Dash/Dash.vue";
import Add from "../components/Device/Add.vue";
import Analytics from "../components/Analytics/Analytics.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/dash",
    name: "dash", 
    component: Dash
  },
  {
    path: "/add",
    name: "add",
    component: Add
  },
  {
    path: "/analytics",
    name: "analytics",
    component: Analytics
  }
]

const router = new VueRouter({
  routes,
});

export default router;
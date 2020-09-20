<template>
  <div id="app">
    <div class="app-container" v-if="isLoggedIn">
      <Nav />
      <router-view></router-view>
    </div>
    <div class="app-container" v-else>
      <login />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login/Login.vue";
import Nav from "@/components/Nav/Nav";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Login,
    Nav,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  overflow: auto;
}

.app-container {
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>

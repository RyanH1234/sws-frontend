<template>
  <div id="app">
    <div class="app-container" v-if="isLoggedIn">
      <router-view></router-view>
    </div>
    <div class="app-container" v-else>
      <login />
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login/Login.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Login,
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
}

.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

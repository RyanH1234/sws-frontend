<template>
  <div> <Button class='logout' @click="logout()"> Logout </Button> </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["setLoggedIn"]),

    logout() {
      this.$cookies.remove("token");
      this.setLoggedIn(false);
    }
  }
}
</script>

<style scoped> 
  .logout {
    background-color: blue
  }
</style>
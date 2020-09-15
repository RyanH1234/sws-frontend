<template>
  <div> <Button @click="logout()"> Logout </Button> </div>
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
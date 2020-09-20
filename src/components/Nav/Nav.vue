<template>
  <div class="nav-header">
    <div class="nav-container">
      <div class="menu-item">
        <a href="#">Dashboard</a>
      </div>
      <div class="menu-item">
        <a href="#">Add Device</a>
      </div>
      <div class="menu-item">
        <a href="#">Data Analysis</a>
      </div>
    </div>
    <Button class="logout" @click="logout()">Logout</Button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      others: [
        {
          title: "2019",
          link: "#",
        },
        {
          title: "2018",
          link: "#",
        },
        {
          title: "2017",
          link: "#",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["setLoggedIn"]),

    logout() {
      this.$cookies.remove("token");
      this.setLoggedIn(false);
    },
  },
};
</script>

<style>
.logout {
  padding: 10px;
}

.nav-header {
  width: 100%;
  background-color: #222;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-container {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.nav-container .menu-item {
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

.nav-container .menu-item.active,
.nav-container .menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
}

.nav-container .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
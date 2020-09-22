<template>
  <div class="nav-header">
    <div class="nav-container">
      <div class="menu-item" @click="goTo('dash')" :class="{selected: getCurrentPage === 'dash'}">
        <a href="#">Dashboard</a>
      </div>
      <div class="menu-item" @click="goTo('add')" :class="{selected: getCurrentPage === 'add'}">
        <a href="#">Add Device</a>
      </div>
      <div
        class="menu-item"
        @click="goTo('analytics')"
        :class="{selected: getCurrentPage === 'analytics'}"
      >
        <a href="#">Data Analysis</a>
      </div>
    </div>
    <Button class="logout" @click="logout()">Logout</Button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters(["getCurrentPage"]),
  },
  methods: {
    ...mapMutations(["setLoggedIn", "setCurrentPage"]),
    goTo(name) {
      this.setCurrentPage(name);
      this.$router.push({ name });
    },
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-container {
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.nav-container .menu-item {
  padding: 10px 20px;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.selected {
  background-color: #444;
  border-bottom: 3px solid #ff5858 !important;
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
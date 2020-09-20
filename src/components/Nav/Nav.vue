<template>
  <header>
    <nav>
      <div class="menu-item">
        <a href="#">Home</a>
      </div>
      <div class="menu-item">
        <a href="#">About</a>
      </div>
      <div class="menu-item">
        <a href="#">Contact</a>
      </div>
      <nav-dropdown title="Others" :items="others" />
    </nav>
    <Button class="logout" @click="logout()">Logout</Button>
  </header>
</template>

<script>
import NavDropdown from "@/components/Nav/NavDropdown";
import { mapMutations } from "vuex";

export default {
  name: "navbar",
  components: {
    NavDropdown,
  },
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

header {
  width: 100%;
  background-color: #222;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

nav {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

nav .menu-item {
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
nav .menu-item:hover {
  background-color: #444;
  border-bottom-color: #ff5858;
}

nav .menu-item a {
  color: inherit;
  text-decoration: none;
}
</style>
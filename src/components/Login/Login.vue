<template>
  <b-container>
    <b-row class="justify-content-md-center mt-4">
      <b-col col md="8">
        <b-card
          header="Smart Weather Station (SWS)"
          header-bg-variant="primary"
          header-text-variant="white"
        >
          <b-card-text>
            <b-form>
              <b-form-group description="Enter your email" label="Email">
                <b-form-input v-model="email" required></b-form-input>
              </b-form-group>
              <b-form-group description="Enter your Password" label="Password">
                <b-form-input v-model="password" type="password" required></b-form-input>
              </b-form-group>
              <b-form-group>
                <b-button @click="login" type="submit" variant="outline-primary">Login</b-button>
              </b-form-group>
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data: () => {
    return {
      show: false,
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["setLoggedIn"]),

    storeTokenInCookie(token) {
      this.$cookies.set("token", token);
    },

    login() {
      const url = "/user/login";
      const params = {
        email: this.email,
        password: this.password,
      };
      this.$axios
        .post(url, { params })
        .then((resp) => {
          const token = resp.data;

          this.setLoggedIn(true);
          this.storeTokenInCookie(token);

          this.$axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${token}`;

          this.$router.push({ name: "Dash" });
        })
        .catch((err) => {
          console.error(err);
        });
    },
    checkIfTokenExists() {
      const token = this.$cookies.get("token");
      if (token) {
        this.$axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${token.token}`;
        this.setLoggedIn(true);
      } else {
        // prevent "glitching" of login screen
        this.show = true;
      }
    },
  },
  mounted() {
    this.checkIfTokenExists();
  },
};
</script>

<style scoped>
input {
  outline: none;
}

button:hover {
  cursor: pointer;
  opacity: 0.8;
}

.login-container {
  width: 50%;
  height: 70%;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.login-container input {
  width: 200px;
  border: 0px;
  border-bottom: 2px solid black;
  margin: 10px 0px 10px 0px;
}

.login-container button {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  margin-top: 20px;
}

@media only screen and (max-width: 600px) {
  .login-container {
    width: 90%;
    height: 90%;
  }
}
</style>

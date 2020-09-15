import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedIn: false,
    user: null,
  },
  getters: {
    isLoggedIn: (state) => {
      return state.loggedIn;
    },
    getCurrentUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    setLoggedIn: (state, setTo) => {
      state.loggedIn = setTo;
    },
    setCurrentUser: (state, setTo) => {
      state.user = setTo;
    },
  }
});

export default store;
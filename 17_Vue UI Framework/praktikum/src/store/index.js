import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const persistedstate = createPersistedState({
  paths: ["newsList"],
});

export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    newsList: [],
  },
  getters: {},
  mutations: {
    setNewsList(state, payLoad) {
      state.newsList = payLoad;
    },
  },
  actions: {
    fetchnews(store) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=justinbieber&apiKey=605657776e1d48939b4d6351ef55f5e9"
        )
        .then((response) => {
          store.commit("setNewsList", response.data.articles);
        });
    },
  },
});

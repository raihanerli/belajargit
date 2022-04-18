import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";

Vue.use(Vuex);

const persistedstate = createPersistedState({
  paths: ["newsList"],
});

export default new Vuex.Store({
  plugins: [persistedstate],
  state: {
    newsList: [],
  },
  mutations: {
    setNewsList(state, payLoad) {
      state.newsList = payLoad;
    },
  },
  actions: {
    fetchNews(store, keyword) {
      axios
        .get(
          "https://newsapi.org/v2/everything?q=" + keyword +"&apiKey=605657776e1d48939b4d6351ef55f5e9"
        )
        .then((response) => {
          store.commit("setNewsList", response.data.articles);
        });
    },
  },
});

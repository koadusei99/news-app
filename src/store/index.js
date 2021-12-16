import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios").default;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    generalNews: [],
  },
  getters: {
    generalNews(state) {
      return state.generalNews;
    },
  },
  mutations: {
    POPULATE_GENERAL_NEWS(state, payload) {
      state.generalNews = payload;
    },
  },
  actions: {
    fetchNews({ commit }, payload) {
      console.log("fetchinggggg", payload, process.env.VUE_APP_API_KEY);
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${payload}&apiKey=${process.env.VUE_APP_API_KEY}`
        )
        .then(function (response) {
          // handle success
          console.log(response);
          if (response.status === 200) {
            commit("POPULATE_GENERAL_NEWS", response.data.articles);
            console.log("SUCCESSFUL");
          }
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
  },
  modules: {},
});

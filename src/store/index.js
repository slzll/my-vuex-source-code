import Vue from "vue";
import Vuex from "./vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 1
  },
  getters: {
    getNum(state) {
      return state.num;
    }
  },
  mutations: {
    incre(state, payload) {
      state.num += payload;
    },
    minus(state, payload) {
      state.num -= payload;
    }
  },
  actions: {
    asyncIncre({ commit }, payload) {
      setTimeout(() => {
        commit("incre", payload);
      }, 1000);
    }
  },
  modules: {}
});

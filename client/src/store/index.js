import Vue from "vue";
import Vuex from "vuex";
// @ts-ignore
import axios from "axios";

Vue.use(Vuex);

const _bugApi = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 8000
});
export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {},
    notes: []
  },
  mutations: {
    addBug(state, payload) {
      state.bugs.push(payload);
    },
    setBugs(state, payload) {
      state.bugs = payload;
    },
    setActiveBug(state, payload) {
      state.activeBug = payload;
    }
  },
  actions: {
    async addBug({ commit, dispatch }, bug) {
      let res = await _bugApi.post("bugs", bug);
      commit("addBug", res.data);
    },
    async getAllBugs({ commit, dispatch }) {
      let res = await _bugApi.get("bugs");
      console.log(res.data);
      commit("setBugs", res.data);
    },
    async getActiveBug({ commit, dispatch }, id) {
      let res = await _bugApi.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
  },
  modules: {}
});

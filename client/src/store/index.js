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
    notes: [],
    activeNotes: []
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
    },
    addNote(state, payload) {
      state.notes.push(payload);
      state.activeNotes.push(payload);
    },
    setActiveNotes(state, payload) {
      state.activeNotes = payload;
    }
  },
  actions: {
    async addBug({ commit, dispatch }, bug) {
      let res = await _bugApi.post("bugs", bug);
      commit("addBug", res.data);
      commit("setActiveBug", res.data);
    },
    async getAllBugs({ commit, dispatch }) {
      let res = await _bugApi.get("bugs");
      commit("setBugs", res.data);
    },
    async getActiveBug({ commit, dispatch }, id) {
      let res = await _bugApi.get("bugs/" + id);
      commit("setActiveBug", res.data);
    },
    async addNote({ commit, dispatch }, note) {
      let res = await _bugApi.post("notes", note);
      console.log("this is our comment", res.data);
      commit("addNote", res.data);
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _bugApi.get("bugs/" + id + "/notes");
      commit("setActiveNotes", res.data);
    },
    async deleteNote({ commit, dispatch }, note) {
      await _bugApi.delete("notes/" + note.id);
      dispatch("getNotesByBugId", note.bug);
    },
    async closeBug({ commit, dispatch }, id) {
      let res = await _bugApi.delete("bugs/" + id);
      dispatch("getActiveBug", id);
    },
    async editBug({ commit, dispatch }, editedBug) {
      let res = await _bugApi.put("bugs/" + editedBug.bug, editedBug);
      commit("setActiveBug", res.data);
    }
  },
  modules: {}
});

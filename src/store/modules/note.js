import Vue from "vue";

import {
  ADD_MESSAGE,
  SET_NOTES,
  DELETE_NOTE,
  SET_GRID,
  SET_SEARCH,
} from "../mutationTypes";

export default {
  state: {
    search: "",
    message: false,
    grid: true,
    note: {
      title: "",
      descr: "",
      priority: "general",
    },
    notes: [
      {
        title: "First Note",
        descr: "Description for first note",
        date: new Date(Date.now()).toLocaleString(),
        priority: "important",
      },
      {
        title: "Second Note",
        descr: "Description for second note",
        date: new Date(Date.now()).toLocaleString(),
        priority: "general",
      },
      {
        title: "Third Note",
        descr: "Description for third note",
        date: new Date(Date.now()).toLocaleString(),
        priority: "general",
      },
    ],
  },
  mutations: {
    [ADD_MESSAGE](state, payload) {
      Vue.set(state, "message", payload);
    },
    [SET_NOTES](state, payload) {
      Vue.set(state, "notes", payload);
    },
    [DELETE_NOTE](state, payload) {
      Vue.set(state, "notes", payload);
    },
    [SET_GRID](state) {
      Vue.set(state, "grid", !state.grid);
    },
    [SET_SEARCH](state, payload) {
      Vue.set(state, "search", payload);
    },
  },
  actions: {
    addNote({ commit, state }, options) {
      const { title, descr, priority } = options;
      const notes = [...state.notes];

      if (!title) {
        commit("ADD_MESSAGE", true);
        return;
      } else {
        commit("ADD_MESSAGE", false);
      }

      if (priority === "important") {
        notes.unshift({
          title,
          descr,
          date: new Date(Date.now()).toLocaleString(),
          priority,
        });

        commit("SET_NOTES", notes);
      } else {
        notes.push({
          title,
          descr,
          date: new Date(Date.now()).toLocaleString(),
          priority,
        });

        commit("SET_NOTES", notes);
      }
    },
    deleteNote({ commit, state }, index) {
      const notes = state.notes;
      notes.splice(index, 1);

      commit("DELETE_NOTE", notes);
    },
    setSearchText({ commit }, searchText) {
      commit("SET_SEARCH", searchText);
    },
  },
  getters: {
    getMessage(state) {
      return state.message;
    },
    getNotes(state, { getSearchText }) {
      let val = getSearchText;
      if (!val) {
        return state.notes;
      }
      // Small
      val = val.trim().toLowerCase();
      // Filter
      return state.notes.filter((item) => {
        if (item.title.toLowerCase().indexOf(val) !== -1) {
          return item;
        }
      });
    },
    getGrid(state) {
      return state.grid;
    },
    getSearchText(state) {
      return state.search;
    },
  },
};

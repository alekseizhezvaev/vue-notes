import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import node from "./modules/note";

export default new Vuex.Store({
  modules: { node },
});

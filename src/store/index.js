import Vue from "vue";
import Vuex from "vuex";
import auth from "./module/auth";
import personTrust from "./module/personTrust";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, personTrust },
});

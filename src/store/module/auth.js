import axios from "axios";
import uri from "../../utils/config";

export default {
  state: {
    error: "",
    user: {},
    isAuthenticated: false,
    isNotAuthorized: null,
    isLoadingAuthorized: false,
    image_profil: "",
  },
  mutations: {
    ERROR_SIGNUP(state, payload) {
      state.error = payload.response.data.errors;
    },
    SET_AUTHENTIFICATION(state) {
      state.isAuthenticated = true;
    },
    SET_UNAUTHORIZATION(state, payload) {
      state.isNotAuthorized = payload;
      console.log("SET_UNAUTHORIZATION", state.isNotAuthorized);
    },
    SET_IS_LOADING_AUTHORIZED(state, payload) {
      state.isLoadingAuthorized = payload;
    },
    SET_USER_AUTHORIZED(state, payload) {
      state.user = payload;
      console.log("test", state.user);
    },
  },
  actions: {
    loginUser({ commit }, payload) {
      const urlApi = `${uri}auth/login`;
      const options = {
        url: urlApi,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "X-Requested-With": "XMLHttpRequest",
        },
        data: payload,
      };
      commit("SET_IS_LOADING_AUTHORIZED", true);
      localStorage.removeItem("tokenKey");
      commit("SET_UNAUTHORIZATION", null);
      return new Promise((resolve, reject) => {
        axios(options)
          .then((data) => {
            console.log("data", resolve(data));
            commit("SET_UNAUTHORIZATION", false);
            resolve(data);
            commit("SET_IS_LOADING_AUTHORIZED", false);
          })
          .catch((response) => {
            reject(response);
            commit("SET_IS_LOADING_AUTHORIZED", false);
            commit("SET_UNAUTHORIZATION", true);
          });
      });
    },
    signupUser(context, payload) {
      const urlApi = `${uri}auth/register`;
      const options = {
        url: urlApi,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        data: payload,
      };
      axios(options)
        .then((response) => {
          console.log(response.data);
          context.commit("authentification");
        })
        .catch((error) => {
          console.log(payload.response.data.errors);
          context.commit("ERROR_SIGNUP", error);
        });
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
};

import axios from "axios";
import uri from "../../utils/config";

export default {
  state: {
    error: "",
    user: {},
    isAuthenticated: false,
    isAuthorized: false,
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
    SET_AUTHORIZATION(state, payload) {
      state.isAuthorized = payload;
      console.log("isAuthorized", state.isAuthorized);
    },
    SET_IS_LOADING_AUTHORIZED(state, payload) {
      state.isLoadingAuthorized = payload;
      console.log("isAuthorized", state.isAuthorized);
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
        },
        data: payload,
      };
      commit("SET_IS_LOADING_AUTHORIZED", true);
      localStorage.removeItem("tokenKey");
      return new Promise((resolve, reject) => {
        axios(options)
          .then(({ data }) => {
            // commit("SET_ISLOADING_AUTHORIZED_USER", false);
            // commit("SET_ERROR", false);
            // commit("SET_USER_CONNECTED", data);

            // localStorage.setItem("tokenKey", data.authorization.token);
            resolve(data);
            console.log(data);
            commit("SET_IS_LOADING_AUTHORIZED", false);

          })
          .catch((response) => {
            reject(response);
            // commit("SET_ERROR", true);
            // commit("SET_ISLOADING_AUTHORIZED_USER", false);
            commit("SET_IS_LOADING_AUTHORIZED", false);

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

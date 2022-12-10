import axios from "axios";
import uri from "../../utils/config";


export default {
  state: {
    error: "",
    user: {},
    isAuthenticated: false,
    isAuthorized: false,
    image_profil: "",
  },
  mutations: {
    ERROR_SIGNUP(state, payload) {
      state.error = payload.response.data.errors;
    },
    authentification(state) {
      state.isAuthenticated = true;
    },
    authorization(state) {
      state.isAuthorized = true;
      console.log("isAuthorized", state.isAuthorized);
    },
    userauthorized(state, payload) {
      state.user = payload;
      console.log("test", state.user);
    },
  },
  actions: {
    async loginUser(context, payload) {
      const urlApi = `${uri}auth/login`;
      const options = {
        url: urlApi,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        data: payload,
      };
      await axios(options)
        .then((data) => {
          sessionStorage.setItem("access_token", data.data.access_token);
          context.commit("authorization");
          context.commit("userauthorized", response.user);
          console.log(data.data.name);
        })
        .catch(() => {});
    },
    async signupUser(context, payload) {
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
      await axios(options)
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

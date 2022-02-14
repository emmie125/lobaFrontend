import axios from "axios";

export default {
  state: {
    error: "",
    user: "bonjour",
    user_id: 0,
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
      state.user = payload.data.name;
      state.image_profil = payload.data.image_profil;
      state.user_id = payload.data.id;
      console.log("test", state.user_id);
      console.log("test", state.image_profil);
    },
  },
  actions: {
    async loginUser(context, payload) {
      const urlApi = "http://127.0.0.1:8000/api/auth/login";
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
          console.log(data.data.name);
        })
        .catch(() => {});
    },
    async signupUser(context, payload) {
      const urlApi = "http://127.0.0.1:8000/api/auth/signup";
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
    async connectedUser(context) {
      const url = "http://127.0.0.1:8000/api/user";
      const options = {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      };
      await axios
        .get(url, options)
        .then((response) => {
          context.commit("userauthorized", response);
          console.log("userauthorized", response.data.name);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
};

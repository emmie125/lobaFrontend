import axios from "axios";

export default {
  state: {
    error: "",
    email: "",
    isAuthenticated: false,
    isAuthorized: false,
  },
  mutations: {
    error_singup(state, payload) {
      state.error = payload.response.data.errors;
    },
    authentification(state) {
      state.isAuthenticated = true;
    },
    authorization(state) {
      state.isAuthorized = true;
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
          console.log(data.data);
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
          context.commit("error_singup", error);
        });
    },
  },
  getter: {},
};

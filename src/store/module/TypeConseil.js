import axios from "axios";
export default {
  state: {
    isTypeConseil: {},
    typeConseil: [],
    isloadingTypeConseil: false,
  },
  mutations: {
    CREATED_TYPE_CONSEIL(state, payload) {
      state.isTypeConseil = payload.data;
    },
    SET_TYPE_CONSEIL(state, payload) {
      state.typeConseil = payload.data;
      console.log("SET_TYPE_CONSEIL", state.typeConseil);
    },
    SET_LOADING_TYPE_CONSEIL(state) {
      state.isloadingTypeConseil = true;
      console.log("SET_LOADING_TYPE_CONSEIL", state.isloadingTypeConseil);
    },
  },
  actions: {
    async createdTypeConseil(context, payload) {
      const urlApi = "http://127.0.0.1:8000/api/type_conseils/";
      const options = {
        url: urlApi,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
        method: "POST",
        data: payload,
      };
      await axios(options)
        .then((response) => {
          context.commit("CREATED_TYPE_CONSEIL", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async updatedTypeConseil(context, payload) {
      console.log("payload ->", payload);
      const urlApi = `http://127.0.0.1:8000/api/type_conseils/${payload.id}`;
      const options = {
        url: urlApi,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
        method: "PUT",
        data: payload,
      };
      await axios(options)
        .then((response) => {
          context.commit("CREATED_TYPE_CONSEIL", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deletedTypeConseil(context, payload) {
      console.log("payload ->", payload);
      const urlApi = `http://127.0.0.1:8000/api/type_conseils/${payload}`;
      const options = {
        url: urlApi,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
        method: "DELETE",
      };
      await axios(options)
        .then((response) => {
          context.commit("CREATED_TYPE_CONSEIL", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTypeConseil({ commit }) {
      const urlApi = `http://127.0.0.1:8000/api/type_conseils/`;
      const options = {
        url: urlApi,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      };
      return new Promise((resolve, reject) => {
        axios(options)
          .then(({ data }) => {
            commit("SET_TYPE_CONSEIL", data);
            resolve(data);
            commit("SET_LOADING_TYPE_CONSEIL", data);
            console.log("response.data.data", data.data);
          })
          .catch((response) => {
            console.log(response);
            reject(response);
          });
      });
    },
  },
};

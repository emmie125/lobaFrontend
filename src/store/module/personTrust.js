import axios from "axios";
export default {
  state: {
    ispersonTrust: {},
    personTrust: [],
    isloadingPerson: false,
  },
  mutations: {
    CREATED_PERSON_TRUST(state, payload) {
      state.ispersonTrust = payload.data;
    },
    SET_PERSON_TRUST(state, payload) {
      state.personTrust = payload.data;
      console.log("SET_PERSON_TRUST", state.personTrust);
    },
    SET_LOADING_PERSON_TRUST(state) {
      state.isloadingPerson = true;
      console.log("SET_LOADING_PERSON_TRUST", state.isloadingPerson);
    },
  },
  actions: {
    async createdPersonTrust(context, payload) {
      const urlApi = "http://127.0.0.1:8000/api/person_trusts/";
      const options = {
        url: urlApi,
        method: "POST",
        data: payload,
      };
      await axios(options)
        .then((response) => {
          context.commit("CREATED_PERSON_TRUST", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getPersonTrust({ commit }) {
      const urlApi = `http://127.0.0.1:8000/api/person_trusts/`;
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
            commit("SET_PERSON_TRUST", data);
            resolve(data);
            commit("SET_LOADING_PERSON_TRUST");
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

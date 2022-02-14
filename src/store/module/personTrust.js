import axios from "axios";
export default {
  data: {
    ispersonTrust: {},
    personTrust: [],
  },
  mutations: {
    CREATED_PERSON_TRUST(state, payload) {
      state.ispersonTrust = payload.data;
    },
    SET_PERSON_TRUST(state, payload) {
      state.personTrust = payload.data;
      console.log("state.personTrust", state.personTrust);
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
    async getPersonTrust(context) {
      const urlApi = "http://127.0.0.1:8000/api/person_trusts/";
      const options = {
        url: urlApi,
        method: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      };
      await axios(options)
        .then((response) => {
          context.commit("SET_PERSON_TRUST", response.data);
          console.log("response.data.data", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};

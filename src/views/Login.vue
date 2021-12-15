<template>
  <div class="container">
    <b-row class="p-5">
      <h1 class="text-center ml">LOBA</h1>

      <b-col class="col-md-6 offset-md-3 container-form mt-5">
        <h2 class="text-center ml">Connectez-vous à votre compte</h2>

        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            class="m-4"
            id="input-group-1"
            label="Adresse mail:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Entre ton email"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            class="m-4"
            label="Password:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              type="password"
              v-model="form.password"
              placeholder="Entre ton password"
              required
            ></b-form-input>
          </b-form-group>
          <b-row class="text-center fluid m-3 pt-2 pb-2">
            <b-button
              type="submit"
              class="pl-3 pr-3 pt-2 pb-2"
              variant="primary"
              >connexion</b-button
            >
          </b-row>
          <b-row class="text-center fluid m-3 pt-2 pb-2">
            <b-button
              :to="{ name: 'signup' }"
              class="pl-3 pr-3 pt-2 pb-2 btn-secondary"
              variant="primary"
              >Créer un compte</b-button
            >
          </b-row>
        </b-form>
        <b-row class="text-end m-3">
          <b-link> mot de passe oublié</b-link>
        </b-row>
      </b-col>
    </b-row>
    <b-row></b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      const data = JSON.stringify(this.form);
      const urlApi = "http://127.0.0.1:8000/api/auth/login";
      const options = {
        url: urlApi,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        data,
      };
      await axios(options)
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container-form {
  border: 1px solid #d81b60;
  padding: 30px;
  border-radius: 10px;
  background-color: white;
}
h1 {
  color: white;
  font-weight: normal;
}
h2 {
  font-size: 26px;
  font-weight: 100;
}
button {
  background-color: #d81b60;
  color: white;
  border-color: #d81b60;
  &:hover {
    background-color: #d81b60;
    color: white;
    border-color: #d81b60;
  }
}
a {
  color: black;
  &:hover {
    color: black;
  }
}
.btn-secondary {
  background-color: white;
  color: #d81b60;
  border-color: #d81b60;

  &:hover {
    background-color: white;
    color: #d81b60;
    border-color: #d81b60;
  }
}
</style>

<template>
  <b-container
    style="background-color: #d81b60"
    class="justify-content-center"
    fluid
  >
    <b-row class="p-5" lg="12">
      <h1 class="text-center ml">LOBA</h1>

      <b-col class="col-md-6 offset-md-3 container-form mt-5">
        <h2 class="text-center ml">Connectez-vous à votre compte</h2>
        <p style="color: #d81b60" class="m-4">{{ error }}</p>
        <p>
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
        </p></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: "",
      show: true,
    };
  },
  computed: {
    ...mapState({
      isAuthorized: (state) => state.auth.isAuthorized,
    }),
  },
  methods: {
    ...mapActions(["loginUser"]),
    async onSubmit(event) {
      event.preventDefault();
      await this.loginUser(this.form);

      console.log("login isAuthorized", this.isAuthorized);
      if (this.isAuthorized) {
        this.$router.push({ name: "home" });
      } else {
        this.error = " mot de passe ou adresse e-mail incorrecte";
      }
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
@import "@/scss/main.scss";
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

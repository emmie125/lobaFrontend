<template>
  <b-container class="" fluid>
    <b-row class="h-100">
      <b-col class="container-login">
        <b-row>
          <b-col>
            <b-img
              rounded="circle"
              center
              width="125"
              heigth="125"
              src="violence-victime.jpg"
              alt="Center image"
            ></b-img>
          </b-col>
          <b-col lg="12">
            <h1 class="text-center text-white">LOBA</h1>
          </b-col>
        </b-row>
        <b-row class="h-100 align-items-center">
          <h1 class="text-center text-white">Application d'aide aux victimes de violences</h1>
          <div class="mx-auto">
          </div>
        </b-row>
      </b-col>
      <b-col class="col-lg-6 align-content-center p-5">
        <b-row class="align-items-center mt-5">
          <h2 class="text-center ml">Connectez-vous à votre compte</h2>
          <p class="m-4 error-text">{{ error }}</p>
          <b-col>
            <b-form @submit="onSubmit" v-if="show" class="mx-6">
              <b-form-group
                class="m-4"
                id="input-group-1"
                label="Adresse mail:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  class="py-3"
                  v-model="form.email"
                  type="email"
                  placeholder="Entre ton email"
                  required
                ></b-form-input>
              </b-form-group>

              <b-form-group
                id="input-group-2"
                class="m-4"
                label="Mot de passe:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  v-model="form.password"
                  placeholder="Entre ton mot de passe"
                  required
                  class="py-3"
                ></b-form-input>
              </b-form-group>
              <b-row class="text-center fluid m-3 pt-2 pb-2">
                <b-button
                  type="submit"
                  class="pl-3 pr-3 py-2"
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
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  components: {},
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
.container-login {
  background-color: $colorPrimary;
}
.container-fluid {
  height: 100vh;
}
.container-form {
  padding: 30px;
  border-radius: 10px;
  background-color: white;
}
.error-text {
  color: $colorPrimary;
}
h1 {
  color: $colorPrimary;
  font-weight: normal;
}
h2 {
  font-size: 26px;
  font-weight: 100;
}
button {
  background-color: $colorPrimary;
  color: white;
  border-color: $colorPrimary;
  &:hover {
    background-color: $colorPrimary;
    color: white;
    border-color: $colorPrimary;
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
  color: $colorPrimary;
  border-color: $colorPrimary;

  &:hover {
    background-color: white;
    color: $colorPrimary;
    border-color: $colorPrimary;
  }
}
</style>

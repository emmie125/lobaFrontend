<template>
  <b-container fluid>
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
      <b-col class="col-lg-6 align-content-center p-5 container-form mt-5">
        <b-row class="text-center" lg="12">
      </b-row>
        <h2 class="text-center">
          Inscrivez-vous gratuitement et découvrez Loba dès aujourd'hui
        </h2>
        <b-form @submit="onSubmit" v-if="show">
          <b-form-group
            class="m-4"
            id="input-group-1"
            label="Nom:"
            label-for="input-1"
            description=""
          >
            <b-form-input
              id="input-1"
              v-model="form.name"
              placeholder="Nom"
              required
              class="py-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="m-4"
            id="input-group-2"
            label="Adresse e-mail"
            label-for="input-2"
            description=""
          >
            <b-form-input
              id="input-2"
              v-model="form.email"
              type="email"
              placeholder="Adresse e-mail"
              required
              class="py-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="m-4"
            id="input-group-2"
            label="Numero de telephone"
            label-for="input-2"
            description=""
          >
            <b-form-input
              id="input-2"
              v-model="form.phone_number"
              placeholder="Numero de telephone"
              required
              class="py-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-4"
            class="m-4"
            label="Mot de passe"
            label-for="input-4"
          >
            <b-form-input
              id="input-4"
              type="password"
              v-model="form.password"
              placeholder="Mot de passe"
              required
              class="py-2"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-5"
            class="m-4"
            label="Mot de passe confirme:"
            label-for="input-5"
          >
            <b-form-input
              id="input-5"
              type="password"
              v-model="form.password_confirmation"
              placeholder="Mot de passe"
              required
              class="py-2"
            ></b-form-input>
          </b-form-group>
          <b-row class="text-center fluid m-3 pt-2 pb-2">
            <b-button
              type="submit"
              class="px-4 py-2"
              variant="primary"
              >créer un compte</b-button
            >
          </b-row>
          <b-row class="text-center fluid m-3 pt-2 pb-2">
            <b-button
            :to="{ name: 'login' }"
            class="px-4 py-2  btn-secondary"
            >Connexion</b-button>
              </b-row>
        </b-form>
      </b-col>
    </b-row>
    <b-modal
      size="md"
      ref="my-modal"
      centered
      hide-footer
      hide-header
      button-size="lg"
      class="text-center"
    >
      <div class="d-block text-center mb-4 mt-4">
        <h3>Votre compte a été créé avec succès</h3>
      </div>
      <div class="text-center mb-4">
        <b-button
          class="text-center"
          variant="outline-danger"
          block
          @click="hideModal"
          >Bienvenu(e)</b-button
        >
      </div>
    </b-modal>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Signup",
  data() {
    return {
      form: {
        email: "",
        password: "",
        password_confirmation: "",
        name: "",
        phone_number: null,
      },
      show: true,
    };
  },
  computed: {
    ...mapState(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["signupUser"]),
    onSubmit(event) {
      event.preventDefault();
      this.signupUser(this.form);
      if (!this.isAuthenticated) {
        this.$refs["my-modal"].show();
      }
    },
    hideModal() {
      this.$refs["my-modal"].hide();
      this.$router.push({ name: "login" });
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
h1 {
  color: $colorPrimary;
  font-weight: normal;
}
h3 {
  font-size: 20px;
}
h2 {
  font-size: 26px;
  font-weight: 100;
}
button {
  background-color: $colorPrimary;
  color: white;
  border-color: white;
  &:hover {
    background-color: $colorPrimary;
    color: white;
    border-color: white;
  }
}
span {
  color: white;
}
</style>

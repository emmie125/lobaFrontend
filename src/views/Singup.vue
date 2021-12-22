<template>
  <div class="" fluid>
    <b-row class="p-5">
      <b-row class="text-center" lg="12">
        <b-col class="text-center" lg="6" md="4">
          <h1>LOBA</h1>
        </b-col>
        <b-col lg="5" class="text-end" md="7" sm="12">
          <span> Vous avez déjà un compte? </span>
          <b-button
            :to="{ name: 'login' }"
            class="pl-5 pr-5 pt-2 pb-2 btn-secondary"
            variant="primary"
            >Connexion</b-button
          >
        </b-col>
      </b-row>

      <b-col class="col-md-6 offset-md-3 container-form mt-5">
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
            ></b-form-input>
          </b-form-group>
          <b-row class="text-center fluid m-3 pt-2 pb-2">
            <b-button
              type="submit"
              class="pl-4 pr-4 pt-2 pb-2"
              variant="primary"
              >créer un compte</b-button
            >
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
  </div>
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
h3 {
  font-size: 20px;
}
h2 {
  font-size: 26px;
  font-weight: 100;
}
button {
  background-color: #d81b60;
  color: white;
  border-color: white;
  &:hover {
    background-color: #d81b60;
    color: white;
    border-color: white;
  }
}
span {
  color: white;
}
.btn-secondary {
  background-color: #d81b60;
  color: white;
  border-color: white;
  margin-left: 10px;
  &:hover {
    background-color: #d81b60;
    color: white;
    border-color: white;
  }
}
</style>

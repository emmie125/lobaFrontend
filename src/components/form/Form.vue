<template>
  <div class="justify-content-center">
    <div class="container-profil">
      <label class="container-image" for="image">
        <b-img :src="imageProfil" :alt="imageProfil" for="image"></b-img>
        <span>Cliquer sur l'image afin de sélectionner une image</span>
      </label>
      <label @click="cloudinaryUploadImage" class="btn-profil" variant="primary"
        >Modifier la photo de profil</label
      >
    </div>
    <b-form @submit="onSubmit" @reset="onReset" class="ml-3 mr-3">
      <b-form-group
        id="input-group-1"
        label="Nom:"
        class="mt-3 text-start"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Entre ton nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Numéro :"
        class="mt-3 text-start"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="form.phoneNumber"
          placeholder="Entre ton numéro"
          type="tel"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3">
        <b-form-file
          v-model="imageInput"
          type="file"
          accept="image/*"
          id="image"
          plain
          class="image-input"
        ></b-form-file>
      </b-form-group>
      <div class="d-flex justify-content-end">
        <b-button type="submit" class="btn-primary" variant="outline-light">{{
          labelButtonSubmit
        }}</b-button>
        <b-button
          type="reset"
          class="btn-secondary btn-reset"
          variant="outline-light"
        >
          Annuler</b-button
        >
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  name: "Form",
  props: {
    isUpdating: {
      type: Boolean,
      required: false,
    },
    personUpdate: {
      type: Object,
      required: false,
      default: () => {
        return {};
      },
    },
  },
  components: {},
  data() {
    return {
      personUpdated: this.personUpdate,
      form: {
        name: "",
        phoneNumber: "",
      },
      imageProfil: "avatarprofil.jpg",
      imageInput: null,
      labelButtonSubmit: "Enregistrer",
    };
  },
  computed: {
    ...mapState({
      ispersonTrust: (state) => state.personTrust.ispersonTrust,
    }),
  },
  methods: {
    ...mapActions(["createdPersonTrust"]),
    async onSubmit(event) {
      event.preventDefault();
      this.form.imageProfil = this.imageProfil;
      // alert(JSON.stringify(this.form));
      await this.createdPersonTrust(this.form);
      console.log(this.ispersonTrust);
    },
    async cloudinaryUploadImage() {
      console.log("Image profil", this.imageInput);
      const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/emmieportfoliollaravel/image/upload`;
      const formData = new FormData();
      formData.append("file", this.imageInput);
      formData.append("upload_preset", "mypreset");

      await axios
        .post(cloudinaryUploadURL, formData)
        .then((response) => {
          this.imageProfil = response.data.secure_url;
          console.log(this.imageProfil);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
    personUpdateForm() {
      this.form.name = this.personUpdate.name;
      this.form.phoneNumber = this.personUpdate.phoneNumber;
      this.imageProfil = this.personUpdate.imageProfil;
      this.labelButtonSubmit = "Modifier";
    },
    onReset() {
      this.personUpdate = {};
      this.form.name = "";
      this.form.phoneNumber = "";
      this.labelButtonSubmit = "Enregistrer";
      this.imageProfil = "avatarprofil.jpg";
      this.$emit("onCancel");
    },
  },
  mounted() {
    if (this.isUpdating) {
      this.personUpdateForm();
    }
  },
  watch: {
    personUpdate() {
      this.personUpdateForm();
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
@import "./form.scss";
</style>

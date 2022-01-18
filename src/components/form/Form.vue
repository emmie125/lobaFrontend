<template>
  <div class="justify-content-center">
    <b-row class="container-form text-center">
      <b-avatar badge-offset="-0.2em" size="8rem" class="avatar-person">
        <template #badge>
          <Icon icon="ic:baseline-photo-camera" />
        </template>
      </b-avatar>
    </b-row>
    <b-form @submit="onSubmit" class="container-form">
      <b-form-group id="input-group-1" label="Nom:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Entre ton nom"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Numéro :" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.number"
          placeholder="Entre ton numéro"
          type="tel"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-file
          v-model="imageProfil"
          class="mt-3"
          type="file"
          accept="image/*"
          plain
        ></b-form-file>
      </b-form-group>
      <b-button type="submit" class="btn-form" variant="primary"
        >Enregistrer</b-button
      >
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import { Icon } from "@iconify/vue2";
export default {
  name: "Form",
  components: {
    Icon,
  },
  data() {
    return {
      form: {
        name: "",
        number: "",
      },
      imageProfil: null,
      imageResults: null,
    };
  },
  computed: {
    isUploaded() {
      const checkImgSrc = RegExp(/^https:\/\//);
      return checkImgSrc.test(this.recipe.image);
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
      this.cloudinaryUploadImage();
    },
    async cloudinaryUploadImage() {
      console.log("Image profil", this.imageProfil.name);
      const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/emmieportfoliollaravel/image/upload`;
      const formData = new FormData();
      formData.append("file", this.imageProfil.name);
      formData.append("upload_preset", "mypreset");
      formData.append("cloud_name", "emmieportfoliollaravel");

      let requestObj = {
        url: cloudinaryUploadURL,
        body: formData,
      };

      await axios
        .post(requestObj)
        .then((response) => {
          this.imageResults = response.data;
          console.log(this.imageResults);
          console.log("public_id", this.results.public_id);
        })
        .catch((error) => {
          console.log(JSON.stringify(error));
        });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
@import "./form.scss";
</style>

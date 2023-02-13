<template>
  <b-container class="home mx-0 px-0" fluid>
    <b-row class="mx-0 px-0">
      <b-col class="mx-0 px-0"
        ><Header :username="user" :src="imageProfil"
      /></b-col>
      <b-col lg="9" md="10" class="container-route">
        <router-view />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import Header from "../components/header/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      user: (state) => state.auth.user.name,
      imageProfil: (state) => state.auth.user.image_profil,
    }),
  },
  methods: {
    ...mapActions([""]),
  },
  mounted() {},
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  background-color: white;
   margin-top: 5%;
}
</style>

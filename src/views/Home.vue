<template>
  <b-container class="home" fluid>
    <Header :username="user" :src="imageProfil" />
    <router-view />
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
   mounted() {
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  background-color: white !important;
}
</style>

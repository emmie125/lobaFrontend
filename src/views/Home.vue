<template>
  <b-container id="app" class="home app" fluid>
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
      user: (state) => state.auth.user,
      imageProfil: (state) => state.auth.image_profil,
    }),
  },
  methods: {
    ...mapActions(["connectedUser"]),
  },
  mounted() {
    this.connectedUser();
    console.log("user", this.user);
    console.log("image_profil", this.imageProfil);
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  background-color: white !important;
}
</style>

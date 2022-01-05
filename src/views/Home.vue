<template>
  <b-container id="app" class="home app" fluid>
    <Header v-show="!isAuthorized" :username="user" />
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
    ...mapState(["isAuthorized", "user"]),
  },
  methods: {
    ...mapActions(["connectedUser"]),
  },
  mounted() {
    console.log(this.isAuthorized);
    console.log("user", this.user);
    if (!this.isAuthorized) {
      this.connectedUser();
    }
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.home {
  background-color: white !important;
}
</style>

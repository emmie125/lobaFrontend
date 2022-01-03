<template>
  <b-container id="app" class="home app" fluid>
    <Header v-show="!authorization" :username="user" />
    <router-view />
  </b-container>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from "vuex";
import Header from "./components/header/Header.vue";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      user: "b",
    };
  },
  computed: {
    ...mapState(["authorization"]),
  },
  methods: {
    ...mapActions(["connectedUser"]),
  },
  mounted() {
    if (!this.authorization) this.user = this.connectedUser().name;
  },
};
</script>
<style lang="scss" scoped>
.app {
  margin: 0 auto;
  background-color: #d81b60;
  overflow-x: hidden;
}
.home {
  background-color: white !important;
}
</style>

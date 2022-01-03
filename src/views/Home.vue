<template>
  <b-container class="home" fluid> </b-container>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {},
  methods: {
    ...mapActions(["connectedUser"]),
  },
  mounted() {
    this.connectedUser();
  },
};
</script>
<style lang="scss" scoped>
.home {
  background-color: white !important;
}
</style>

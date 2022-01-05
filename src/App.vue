<template>
  <b-container id="app" class="home app" fluid>
    <router-view />
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {
    console.log();
  },
  created() {},
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";

.app {
  overflow-x: hidden;
  background-color: $colorPrimary;
}
</style>

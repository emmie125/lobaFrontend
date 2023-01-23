<template>
  <b-container id="app" class="app" fluid>
    <router-view></router-view>
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
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";

.app {
  margin: 0 0 !important;
  padding: 0 0 !important;
  overflow-y: hidden;
}
</style>

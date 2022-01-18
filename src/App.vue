<template>
  <div id="app" class="app" fluid>
    <router-view />
  </div>
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
  margin: 0 0 !important;
}
</style>

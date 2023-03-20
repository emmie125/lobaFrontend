<template>
  <b-container fluid>
    <b-row>
      <b-col class="d-flex justify-content-center">
        <rating
          class="fs-3"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Rating from "../components/rating/Rating.vue";

export default {
  components: {
    Rating,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.container {
 
}
.icon-rating {
}
</style>

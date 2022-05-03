<template>
  <b-container>
    <b-row>
      <b-col>
        <rating
          class="fs-3"
          iconRatingEmpty="ant-design:heart"
          iconRatingFull="ant-design:heart-filled"
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
  margin-top: 15%;
}
.icon-rating {
}
</style>

<template>
  <b-row>
    <b-col>
      <b-col v-model="stateRating" @click="rating">
        <Icon v-if="stateRating" icon="ant-design:heart-filled" color="#c40002"/>
        <Icon v-else icon="ant-design:heart" color="#c40002" />
      </b-col>
    </b-col>
  </b-row>
</template>
<script>
import { Icon } from "@iconify/vue2";

export default {
  props: {
    iconRatingEmpty: {
      type: String,
      require: true,
    },
    iconRatingFull: {
      type: String,
      require: true,
    },
  },
  components: {
    Icon,
  },
  data() {
    return {
      stateRating: false,
    };
  },
  computed: {
    isRating() {
      return !this.stateRating;
    },
  },
  methods: {
    rating() {
      this.stateRating = !this.stateRating;
      // this.$emit("rating", this.stateRating);
    },
  },
};
</script>
<style lang="scss" scoped>
.icon-rating {
}
</style>

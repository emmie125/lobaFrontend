<template>
  <b-row>
    <b-col>
      <b-col v-model="stateRating" @click="rating">
        <Icon v-if="stateRating" :icon="iconRatingFull" class="text-danger" />
        <Icon v-else :icon="iconRatingEmpty" class="text-danger" />
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

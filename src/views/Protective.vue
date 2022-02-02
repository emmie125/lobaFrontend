<template>
  <p></p>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      personTrust: (state) => state.personTrust.personTrust,
    }),
  },
  methods: {
    ...mapActions(["getPersonTrust"]),
  },
  mounted() {
    console.log("this.personTrust", this.personTrust);
  },
};
</script>

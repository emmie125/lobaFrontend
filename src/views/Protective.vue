<template>
  <div class="container">
    <b-row
      lg="12"
      style=""
      class="container_person"
      v-for="(person, index) in personTrust"
      :key="index"
      fluid
      align-h="center"
    >
      <b-col lg="4" style="width: 150px" class="justify-content-center">
        <b-img
          :src="person.imageProfil"
          class="image"
          img-fuild
          :alt="person.name"
        ></b-img>
      </b-col>
      <b-col lg="8" class="container_person_identity" fluid>
        <div class="container_person_identity_information">
          <h2>{{ person.name }}</h2>
          <p>{{ person.phoneNumber }}</p>
        </div>
        <div class="btn_person">
          <i><Icon icon="carbon:overflow-menu-horizontal" /></i>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "",
        width: 100,
        height: 100,
      },
    };
  },
  computed: {
    ...mapState({
      personTrust: (state) => state.personTrust.personTrust,
    }),
    personTrustAll() {
      return this.personTrust.slice();
    },
  },
  watch: {
    personTrust() {
      this.getPersonTrust();
    },
  },
  methods: {
    ...mapActions(["getPersonTrust"]),
  },
  async created() {
    await this.getPersonTrust();
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.container {
}
.image {
  padding: 15px 0px;
  width: 100%;
  border-radius: 15px !important;
}
.container_person {
  @include borderRadius;
  border: 1px solid $colorSecondary;
  margin-bottom: 15px;
  &:hover {
    cursor: pointer;
  }
}
.container_person_identity {
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  text-align: center !important;
  align-self: center;
  &_information {
    width: 100%;
    text-align: start;
    align-self: center;
  }
  .btn_person {
    width: 100%;
    text-align: end;
    justify-content: center;
    align-self: center;
  }
}
</style>

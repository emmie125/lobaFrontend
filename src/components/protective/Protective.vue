<template>
  <div class="container">
    <div class="d-flex align-items-center" v-if="personTrust == null">
      <strong>Loading...</strong>
      <b-spinner class="ml-auto"></b-spinner>
    </div>
    <b-row
      lg="12"
      v-else
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
          <b-button-group>
            <b-dropdown right text="Menu">
              <b-dropdown-item>Item 1</b-dropdown-item>
              <b-dropdown-item>Item 2</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>
            <i><Icon icon="carbon:overflow-menu-horizontal" /></i>
          </b-button-group>
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
  props: ["personTrust", "isloadingPerson"],
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
    ...mapState({}),
  },
  watch: {},
  methods: {
    ...mapActions([""]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
h2 {
  font-weight: 600;
  font-size: 20px;
}
p {
  font-size: 12px;
  color: $colorAlternative;
}
.container {
}
.image {
  padding: 15px 0px;
  width: 100%;
  border-radius: 15px;
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

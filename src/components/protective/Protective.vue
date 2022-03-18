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
          <b-dropdown
            right
            toggle-class="text-decoration-none outline-none border-white"
            variant="#d81b60"
            class="btn-dropdown-container"
            no-caret
          >
            <template #button-content class="bg-transparent">
              <i class="btn-dropdown"
                ><Icon icon="carbon:overflow-menu-horizontal"
              /></i>
            </template>
            <b-dropdown-item @click="onUpdate(person)"
              >Modifier</b-dropdown-item
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Voir</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Supprimer</b-dropdown-item>
          </b-dropdown>
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
    onUpdate(person) {
      console.log(person);
      this.$emit("updatePerson", person);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
@import "./protective.scss";
</style>

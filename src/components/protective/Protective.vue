<template>
  <div class="container pt-3 pb-3">
    <div class="d-flex align-items-center" v-if="personTrust == null">
      <strong>Loading...</strong>
      <b-spinner class="ml-auto"></b-spinner>
    </div>
    <b-row
      lg="12"
      md="8"
      sm="5"
      v-else
      style=""
      class="container_person justify-content-between"
      v-for="(person, index) in personTrust"
      :key="index"
      fluid
    >
      <b-col lg="5" md="3" sm="2" style="" class="justify-content-center px-0">
        <b-img
          :src="person.imageProfil"
          class="image"
          img-fuild
          :alt="person.name"
        ></b-img>
      </b-col>
      <b-col lg="4" md="3" sm="2" class="container_person_identity">
        <div class="container_person_identity_information">
          <h2>{{ person.name }}</h2>
          <p>{{ person.phoneNumber }}</p>
        </div>
      </b-col>
      <b-col lg="3" md="2" sm="1" class="container_person_identity">
        <b-dropdown
          right
          toggle-class="text-decoration-none outline-none border-white"
          variant="outline-light"
          class="btn-dropdown-container"
          no-caret
        >
          <template #button-content class="bg-transparent">
            <i class="btn-dropdown"
              ><Icon icon="carbon:overflow-menu-horizontal"
            /></i>
          </template>
          <b-dropdown-item @click="onUpdate(person)">Modifier</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Voir</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item @click="onDelete(person.id)"
            >Supprimer</b-dropdown-item
          >
        </b-dropdown>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Icon } from "@iconify/vue2";
export default {
  name: "Protective",
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
      this.$emit("updatePerson", person);
    },
    onDelete(id) {
      this.$emit("deletePerson", id);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
@import "./protective.scss";
</style>

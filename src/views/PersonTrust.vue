<template>
  <b-container class="justify-content-center container_person">
    <b-row lg="5" class="justify-content-center text-center h-80">
      <b-col
        lg="5"
        class="justify-content-center text-center person_trust_container"
      >
        <b-tabs content-class="mt-3 " justified>
          <b-tab title="Protecteurs" exact exact-active-class="active-link"
            ><Protective
              class="container_card_body"
              :personTrust="personTrust"
              @updatePerson="onUpdatePerson"
              @deletePerson="onDeletePerson"
          /></b-tab>
          <b-tab title="Historique" exact exact-active-class="active-link"
            ><p>I'm the second tab</p></b-tab
          >
        </b-tabs>
      </b-col>
      <b-col lg="6" class="person_trust_container_create">
        <Form
          :personUpdate="personUpdate"
          :isUpdating="isUpdating"
          @createdPersonTrust="onCreatedPersonTrust"
          @updatedPersonTrust="onUpdatedPersonTrust"
          v-if="isShowForm"
          class=""
          @onCancel="cancelPerson"
        />

        <b-row
          v-else
          class="justify-content-center align-items-center text-center h-100"
        >
          <div class="justify-content-center text-center">
            <div>
              <Icon
                class="icon_trust_people"
                icon="majesticons:paper-airplane"
              />
            </div>
            <h3>Vos protecteurs</h3>
            <p>
              Permettre à un proche ou un groupe de proche de vous venir en
              aide.
            </p>
            <b-button
              class="btn-primary"
              active-class="btn-primary"
              variant="outline-light"
              id="show-btn"
              @click="Form"
              >Ajouter un protecteur</b-button
            >
          </div>
        </b-row>
      </b-col>
    </b-row>
    <b-modal ref="modal-option-delete" id="my-modal"
      >Hello From My Modal!</b-modal
    >
  </b-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Icon } from "@iconify/vue2";
import Form from "../components/form/Form.vue";
import Protective from "../components/protective/Protective.vue";

export default {
  components: {
    Icon,
    Form,
    Protective,
  },
  data() {
    return {
      isShowForm: false,
      personUpdate: {},
      isUpdating: false,
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.auth.user.id,
      personTrust: (state) => state.personTrust.personTrust,
      isloadingPerson: (state) => state.personTrust.isloadingPerson,
    }),
  },
  methods: {
    ...mapActions([
      "connectedUser",
      "getPersonTrust",
      "createdPersonTrust",
      "updatedPersonTrust",
    ]),
    Form() {
      this.isShowForm = true;
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    onCreatedPersonTrust(form) {
      this.createdPersonTrust(form);
      this.$bvToast.toast(`Toast with action link`, {
        href: "#foo",
        title: "Example",
      });
      this.getPersonTrusts();
    },
    onUpdatedPersonTrust(form) {
      console.log("updatedPersonTrust ->", form);
      this.updatedPersonTrust(form);

      this.$bvToast.toast(`Toast with action link`, {
        text: "#foo",
        title: "Example",
        solid: true,
        appendToast: true,
        variant: "success",
      });
      this.getPersonTrusts();
    },
    async getPersonTrusts() {
      await this.getPersonTrust();
    },
    onUpdatePerson(person) {
      this.isShowForm = true;
      this.isUpdating = true;
      this.personUpdate = person;
    },
    cancelPerson() {
      this.personUpdate = {};
      this.isShowForm = false;
      this.isUpdating = false;
    },
    onDeletePerson() {
      this.$refs["modal-option-delete"].show();
    },
  },
  mounted() {
    this.getPersonTrusts();
    console.log("user id", this.userId);
    console.log("getPersonTrust()", this.personTrust);
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.container_person {
  margin-top: 13vh;
  height: 80vh;
}
.container_person_trust {
  border: 1px solid $colorSecondary;
}
.person_trust_container_create {
  border: 1px solid $colorSecondary;
}
.container_card_body {
  height: 70vh;

  overflow-y: scroll !important;
}
.icon_trust_people {
  height: 110px;
  width: 110px;
  padding: 30px;
  border: 1px solid $colorPrimary;
  border-radius: 50%;
  /* background-color: $colorPrimary; */
  color: $colorPrimary;
  margin-bottom: 30px;
}

h3 {
  font-weight: 300;
}
p {
  margin-bottom: $colorPrimary;
}
a {
  color: black;
  border: transparent !important;
  &:hover {
    color: $colorPrimary !important;
  }
}
.active-link {
  color: $colorPrimary !important;
  background-color: white !important;
  border: transparent !important;
}
</style>

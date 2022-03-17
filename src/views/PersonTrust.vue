<template>
  <b-container class="justify-content-center container_person_trust">
    <b-row lg="12" class="justify-content-center text-center h-100">
      <b-col
        lg="6"
        class="justify-content-center text-center person_trust_container"
      >
        <b-tabs content-class="mt-3" justified>
          <b-tab title="Protecteurs" active
            ><Protective class="container_card_body" :personTrust="personTrust"
          /></b-tab>
          <b-tab title="Historique"><p>I'm the second tab</p></b-tab>
        </b-tabs>
      </b-col>
      <b-col lg="6" class="person_trust_container_create">
        <b-row
          class="justify-content-center align-items-center text-center h-100"
        >
          <Form v-if="isCreatePerson" class="p-3" :user_id="userId" />
          <div class="justify-content-center text-center" v-else>
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
              class="btn-protecteur"
              id="show-btn"
              @click="showForm"
              squared
              >Ajouter un protecteur</b-button
            >
          </div>
        </b-row>
      </b-col>
    </b-row>
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
      isCreatePerson: false,
    };
  },
  computed: {
    ...mapState({
      userId: (state) => state.auth.user.id,
      personTrust: (state) => state.personTrust.personTrust,
      isloadingPerson: (state) => state.personTrust.isloadingPerson,
    }),
    createPerson() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.isCreatePerson = true;
      return this.isCreatePerson;
    },
  },
  methods: {
    ...mapActions(["connectedUser", "getPersonTrust"]),
    showForm() {
      this.createPerson();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
    async getPersonTrusts() {
      await this.connectedUser();
      await this.getPersonTrust(this.userId);
    },
  },
  async mounted() {
    await this.getPersonTrusts();
    console.log("user id", this.userId);
    console.log("getPersonTrust()", this.personTrust);
  },
  watch: {
    // personTrust() {
    //   this.getPersonTrusts();
    // },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.container_person_trust {
  margin-top: 13vh;
  height: 87vh;
  border: 1px solid $colorSecondary;
}
.person_trust_container_create {
  height: 87vh;
  border: 1px solid $colorSecondary;
}
.container_card_body {
  height: 600px;
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
.btn-protecteur {
  margin-top: $colorPrimary;
  border: 1px solid $colorPrimary;
  background-color: $colorPrimary;
  color: white;
  outline-color: $colorPrimary;
  &:focus {
    border: 1px solid $colorPrimary !important;
  }
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

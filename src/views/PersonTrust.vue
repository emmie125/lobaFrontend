<template>
  <b-container class="justify-content-center container_person_trust">
    <b-row lg="12" class="justify-content-center text-center h-100">
      <b-col
        lg="6"
        class="justify-content-center text-center person_trust_container"
      >
        <b-row>
          <b-card-header class="text-center w-100" header-tag="nav" fluid>
            <b-nav card-header tabs fill fluid>
              <b-nav-item
                :to="{ name: 'protective' }"
                exact
                exact-active-class="active-link"
                >Protecteurs</b-nav-item
              >
              <b-nav-item
                :to="{ name: 'historical' }"
                exact
                exact-active-class="active-link"
                >Historique</b-nav-item
              >
            </b-nav>
          </b-card-header>
          <b-card-body class="container_card_body">
            <b-row>
              <router-view></router-view>
            </b-row>
          </b-card-body>
        </b-row>
      </b-col>
      <b-col lg="6" class="person_trust_container_create">
        <b-row
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
              class="btn-protecteur"
              id="show-btn"
              @click="showModal"
              squared
              >Ajouter un protecteur</b-button
            >
          </div>
        </b-row>
      </b-col>
    </b-row>
    <b-modal ref="my-modal" size="700px" hide-footer hide-header centered>
      <Form class="p-3" :user_id="userId" />
    </b-modal>
  </b-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Icon } from "@iconify/vue2";
import Form from "../components/form/Form.vue";
export default {
  components: {
    Icon,
    Form,
  },
  computed: {
    ...mapState({
      userId: (state) => state.auth.user_id,
    }),
  },
  methods: {
    ...mapActions(["connectedUser", ""]),
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs["my-modal"].toggle("#toggle-btn");
    },
  },
  async mounted() {
    await this.connectedUser();
    console.log("user", this.userId);
  },
  watch: {},
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

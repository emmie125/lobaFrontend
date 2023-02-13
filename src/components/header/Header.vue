<template>
  <b-navbar toggleable="sm" class="navbar" fixed="top">
    <b-row class="mx-0 px-0">
      <b-col class="mx-0 px-0">
        <b-row>
          <b-col>
            <b-navbar-brand :to="{ name: 'home' }" class="logo">
              <Logo />
            </b-navbar-brand>
          </b-col>
        </b-row>
        <b-row class="navbar_container_menu mx-0 px-0">
          <b-navbar-toggle target="navbar-toggle-collapse">
            <Icon icon="bx:menu" />
          </b-navbar-toggle>

          <b-collapse
            id="navbar-toggle-collapse"
            class="navbar_container_menu_link justify-content-centre mx-0 px-0"
            is-nav
          >
            <b-navbar-nav class="nav">
              <b-nav-item :to="{ name: 'home' }" class="nav-item"
                >Accueil</b-nav-item
              >
              <b-nav-item :to="{ name: 'persontrust' }" class="nav-item"
                > Personne de
                confiance</b-nav-item
              >
              <b-nav-item :to="{ name: 'settings' }" class="nav-item"
                >
                Parametre</b-nav-item
              >
              <b-button class="btn-secondary" pill variant="outline-light">
                <Icon icon="bxs:phone-call"
              /></b-button>

              <b-dropdown
                id="dropdown-offset"
                toggle-class="text-decoration-none outline-none border-none mx-0 px-0"
                variant="#d81b60"
                class="btn-dropdown-container"
                no-caret
                block
              >
                <template #button-content class="bg-transparent ">
                  <b-avatar
                    variant="secondary"
                    :src="src"
                    size="34px"
                  ></b-avatar>
                </template>
                <b-dropdown-item>Profil</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Deconnexion</b-dropdown-item>
              </b-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-row>
      </b-col>
    </b-row>
  </b-navbar>
</template>
<script>
// @ is an alias to /src
import { Icon } from "@iconify/vue2";
import Logo from "../logo/Logo.vue";

export default {
  name: "Header",
  props: { username: { type: String }, src: { type: String } },
  components: {
    Logo,
    Icon,
  },
  computed: {
    usernamAvatar() {
      return this.username.slice(0);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
@import "./header.scss";
</style>

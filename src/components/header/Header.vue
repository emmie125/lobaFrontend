<template>
  <b-navbar
    toggleable="sm"
    fixed="top"
    class="navbar justify-content-center"
    align-h="center"
    fluid
  >
    <b-row class="navbar_container">
      <b-navbar-brand :to="{ name: 'home' }" class="logo">
        <Logo />
      </b-navbar-brand>
      <b-row class="navbar_container_menu">
        <b-navbar-toggle target="navbar-toggle-collapse">
          <Icon icon="bx:menu" />
        </b-navbar-toggle>

        <b-collapse
          id="navbar-toggle-collapse"
          class="navbar_container_menu_link"
          is-nav
        >
          <b-navbar-nav class="nav">
            <b-nav-item :to="{ name: 'actuality' }" class="nav-item"
              ><Icon class="iconHeader" icon="ant-design:home-filled"
            /></b-nav-item>
            <b-nav-item :to="{ name: 'persontrust' }" class="nav-item"
              ><Icon class="iconHeader" icon="bi:people-fill"
            /></b-nav-item>
            <b-nav-item :to="{ name: 'settings' }" class="nav-item"
              ><Icon class="iconHeader" icon="ant-design:setting-filled"
            /></b-nav-item>
            <b-button class="btn-secondary" pill variant="outline-light">
              <Icon icon="bxs:phone-call"
            /></b-button>

            <b-dropdown
              id="dropdown-offset"
              offset="25"
              toggle-class="text-decoration-none outline-none border-none m-ml-2"
              variant="#d81b60"
              class="btn-dropdown-container"
              no-caret
            >
              <template #button-content class="bg-transparent">
                <b-avatar variant="secondary" :src="src" size="34px"></b-avatar>
              </template>
              <b-dropdown-item>Profil</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Deconnexion</b-dropdown-item>
            </b-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-row>
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

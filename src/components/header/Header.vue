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
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>

        <b-collapse
          id="navbar-toggle-collapse"
          class="navbar_container_menu_link"
          is-nav
        >
          <b-navbar-nav class="">
            <b-nav-item href="/" class="nav-item"
              ><Icon class="iconHeader" icon="ant-design:home-filled"
            /></b-nav-item>
            <b-nav-item :to="{ name: 'persontrust' }" class="nav-item"
              ><Icon class="iconHeader" icon="bi:people-fill"
            /></b-nav-item>
            <b-nav-item :to="{ name: 'settings' }" class="nav-item"
              ><Icon class="iconHeader" icon="ant-design:setting-filled"
            /></b-nav-item>
            <b-nav-item class="d-flex justify-content-center profil">
              <div class="d-flex justify-content-between" style="width: 100%">
                <em>{{ username }}</em>
                <div class="ml-5" style="width: 30%">
                  <b-img
                    :src="src"
                    style="width: 100%"
                    fluid
                    alt="Responsive image"
                  ></b-img>
                </div>
              </div>
            </b-nav-item>
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

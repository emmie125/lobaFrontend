<template>
  <b-container class="justify-content-center container_person_trust">
    <b-row lg="12" class="justify-content-center text-center h-100">
      <b-col lg="6" class="justify-content-center text-center">
        <b-card-header class="text-center" header-tag="nav">
          <b-nav card-header fill>
            <b-nav-item
              :to="{ name: 'protective' }"
              exact
              exact-active-class="active"
              >Protecteurs</b-nav-item
            >
            <b-nav-item
              :to="{ name: 'historical' }"
              exact
              exact-active-class="active"
              >Historique</b-nav-item
            >
          </b-nav>
        </b-card-header>
        <b-card-body>
          <router-view></router-view>
        </b-card-body>
      </b-col>
      <b-col lg="6" class="">
        <b-row
          class="justify-content-center align-items-center text-center h-100"
        >
          <div><Icon icon="majesticons:paper-airplane" /></div>
          <div><b-button>Ajouter un protecteur</b-button></div>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
  components: {
    Icon,
  },
};
</script>
<style lang="scss" scoped>
.container_person_trust {
  border: 1px solid black;
  margin-top: 10vh;
  height: 90vh;
}
</style>

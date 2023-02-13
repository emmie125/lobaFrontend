import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Singup from "../views/Singup.vue";
import Home from "../views/Home.vue";
import Actuality from "../views/Actuality.vue";
import PersonTrust from "../views/PersonTrust.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Singup,
  },
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        name: "home",
        component: Actuality,
      },
      {
        path: "/persontrust",
        name: "persontrust",
        component: PersonTrust,
      },
      {
        path: "/settings",
        name: "settings",
        component: Settings,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

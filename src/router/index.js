import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

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
    component: require("../views/Singup.vue").default,
  },
  {
    path: "/",
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("access_token")) next({ name: "login" });
      else next();
    },
    name: "home",
    redirect: "/actuality",
    component: require("../views/Home.vue").default,
    children: [
      {
        path: "/actuality",
        name: "actuality",
        component: require("../views/Actuality.vue").default,
      },
      {
        path: "/persontrust",
        name: "persontrust",
        component: require("../views/PersonTrust.vue").default,
      },
      {
        path: "/settings",
        name: "settings",
        component: require("../views/Settings.vue").default,
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

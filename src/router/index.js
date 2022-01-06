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
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Singup.vue"),
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    children: [
      { path: "/", name: "home" },
      {
        path: "/persontrust",
        name: "persontrust",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/PersonTrust.vue"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/Settings.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !sessionStorage.getItem("access_token"))
    next({ name: "login" });
  else next();
});

export default router;

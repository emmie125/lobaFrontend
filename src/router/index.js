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
    beforeEnter: (to, from, next) => {
      if (!sessionStorage.getItem("access_token")) next({ name: "login" });
      else next();
    },
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    children: [
      { path: "/" },
      {
        path: "/persontrust",
        name: "persontrust",
        component: () =>
          import(
            /* webpackChunkName: "persontrust" */ "../views/PersonTrust.vue"
          ),

        children: [
          {
            path: "/persontrust/persontrust",
            name: "protective",
            // redirect: "persontrust",
            component: () =>
              import(
                /* webpackChunkName: "persontrust" */ "../views/Protective.vue"
              ),
          },
          {
            path: "/persontrust/historical",
            name: "historical",
            component: () =>
              import(
                /* webpackChunkName: "historical" */ "../views/Historical.vue"
              ),
          },
        ],
      },
      {
        path: "/settings",
        name: "settings",
        component: () =>
          import(/* webpackChunkName: "setting" */ "../views/Settings.vue"),
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

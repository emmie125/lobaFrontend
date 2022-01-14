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
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    children: [
      { path: "/", name: "home" },
      {
        path: "/persontrust",
        name: "persontrust",
        component: () =>
          import(
            /* webpackChunkName: "persontrust" */ "../views/PersonTrust.vue"
          ),
        children: [
          {
            path: "/persontrust",
            name: "protective",
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

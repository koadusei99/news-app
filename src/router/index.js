import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/general",
    component: Home,
    children: [
      {
        path: "/general",
        name: "General",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/News.vue"),
        props: true,
      },
      {
        path: "/tech",
        name: "Tech",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/Technology.vue"),
        props: true,
      },
      {
        path: "/sports",
        name: "Sports",
        component: () =>
          import(/* webpackChunkName: "tech" */ "../components/Sports.vue"),
      },
      {
        path: "/entertainment",
        name: "Entertainment",
        component: () =>
          import(
            /* webpackChunkName: "tech" */ "../components/Entertainment.vue"
          ),
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

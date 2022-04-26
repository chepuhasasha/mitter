import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home/View.vue"),
  },
  {
    path: "/ui",
    name: "ui",
    component: () => import("../views/UI/View.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login/View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

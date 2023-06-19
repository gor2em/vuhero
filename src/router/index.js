import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    name: "app",
    path: "/",
    redirect: { name: "dashboard" },
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        name: "dashboard",
        path: "dashboard",
        component: () => import("../views/dashboard/Dashboard.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

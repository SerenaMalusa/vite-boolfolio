import { createRouter, createWebHistory } from "vue-router";

import AppProjectsIndex from "./components/pages/AppProjectsIndex.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppProjectsIndex,
    },
  ],
});

export { router };

import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/pages/AppHome.vue";
import AppProjectsShow from "./components/pages/AppProjectsShow.vue";
import AppProjectsIndex from "./components/pages/AppProjectsIndex.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/projects",
      name: "projects.index",
      component: AppProjectsIndex,
    },
    {
      path: "/projects/:slug",
      name: "projects.show",
      component: AppProjectsShow,
    },
  ],
});

export { router };

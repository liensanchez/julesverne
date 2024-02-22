import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView/Home.vue";
import Styles from "../views/StylesView/Styles.vue";
import Error from "../views/Error/Error.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/styles-guide",
    name: "styles-guide",
    component: Styles,
  },
  {
    path: "/404",
    name: "error",
    component: Error,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

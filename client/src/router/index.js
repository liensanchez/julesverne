import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView/Home.vue";
import Styles from "../views/StylesView/Styles.vue";
import Books from "../views/Books/Books.vue"
import About from "../views/About/About.vue"
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
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/404",
    name: "error",
    component: Error,
  },
  {
    path: "/download-books",
    name: "download",
    component: Books,
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

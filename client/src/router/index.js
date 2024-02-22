import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView/Home.vue'
import Styles from '../views/StylesView/Styles.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/styles-guide',
    name: 'styles-guide',
    component: Styles
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

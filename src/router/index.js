import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/index.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LandingPage,
      name: "Landing Page"
    }
  ]
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import AuthPage from '../views/AuthPage.vue'

const routes = [
  {
    path: '/',
    name: 'Auth',
    component: AuthPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

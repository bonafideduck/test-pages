import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/duckdown1',
    name: 'DuckDown 1',
    component: () => import('../views/DuckDown1.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

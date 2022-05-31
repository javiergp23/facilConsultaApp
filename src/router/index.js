import { createRouter, createWebHistory } from 'vue-router'
import PaginaUnoViews from '../views/PaginaUnoViews.vue'
import PaginaDosViews from '../views/PaginaDosViews.vue'
import PaginaTresViews from '../views/PaginaTresViews.vue'
import PaginaFinalViews from '../views/PaginaFinalViews.vue'

const routes = [
  {
    path: '/',
    name: 'PaginaUnoViews',
    component: PaginaUnoViews
  },
  {
    path: '/PaginaDosViews',
    name: 'PaginaDosViews',
    component: PaginaDosViews
  },
  {
    path: '/PaginaTresViews',
    name: '/PaginaTresViews',
    component: PaginaTresViews
  },
  {
    path: '/PaginaFinalViews',
    name: '/PaginaFinalViews',
    component: PaginaFinalViews
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

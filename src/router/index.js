import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RequestsView from '../views/RequestsView.vue'
import PlaceOrdersView from '../views/PlaceOrdersView'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },

  {
    path: '/fazer-pedido',
    name: 'fazer-pedido',
    component: PlaceOrdersView
  },

  {
    path: '/pedidos',
    name: 'pedidos',
    component: RequestsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

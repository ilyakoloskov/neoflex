import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from '../pages/catalog.vue'
import Cart from '../pages/cart.vue'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router

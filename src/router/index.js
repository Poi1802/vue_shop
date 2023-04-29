import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/main/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/products',
      name: 'product.index',
      component: () => import('../views/product/Index.vue')
    },
    {
      path: '/wish',
      name: 'wish',
      component: () => import('../views/Wish.vue')
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'main',
			component: () => import('../views/main/Index.vue'),
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('../views/About.vue'),
		},
		{
			path: '/products',
			name: 'product.index',
			component: () => import('../views/product/Index.vue'),
		},
		{
			path: '/products/:id',
			name: 'product.show',
			component: () => import('../views/product/Show.vue'),
		},
		{
			path: '/wish',
			name: 'wish',
			component: () => import('../views/Wish.vue'),
		},
		{
			path: '/cart',
			name: 'cart',
			component: () => import('../views/Cart.vue'),
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/Login.vue'),
		},
		{
			path: '/register',
			name: 'register',
			component: () => import('../views/Register.vue'),
		},
	],
});

export default router;

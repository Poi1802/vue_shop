import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
	state: () => ({
		products: JSON.parse(localStorage.getItem('cart')) ?? [],
	}),

	actions: {
		addProduct(product, qty = 1) {
			product.qty = qty;

			if (this.products.some(({ id }) => id === product.id)) {
				this.products = this.products.filter(({ id }) => id != product.id);
				return;
			}

			this.products.push(product);

			localStorage.setItem('cart', JSON.stringify(this.products));
		},

		deleteProduct(id) {
			this.products = this.products.filter((product) => id != product.id);

			localStorage.setItem('cart', JSON.stringify(this.products));
		},
	},
});

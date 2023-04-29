import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
	state: () => ({
		products: [],
	}),

	actions: {
		addProduct(product) {
			if (this.products.some(({ id }) => id === product.id)) {
				this.products = this.products.filter(({ id }) => id != product.id);
				return;
			}

			this.products.push(product);
		},

		deleteProduct(id) {
			this.products = this.products.filter((product) => id != product.id);
		},
	},
});

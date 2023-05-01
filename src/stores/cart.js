import axios from 'axios';
import { defineStore } from 'pinia';
import { onMounted, ref } from 'vue';

const API_URL = import.meta.env.VITE_API_URL;

export const useCartStore = defineStore('cart', {
	state: () => ({
		cartId: null,
		products: JSON.parse(localStorage.getItem('cart')) ?? [],
	}),

	actions: {
		addProduct(product, qty = 1) {
			product.qty = qty;

			if (this.products.some(({ id }) => id === product.id)) {
				this.products = this.products.filter(({ id }) => id != product.id);

				const product_ids = this.products.map((product) => product.id);
				axios
					.patch(`${API_URL}/api/carts/${this.cartId}`, {
						product_ids: JSON.stringify(product_ids),
					})
					.then((res) => console.log(res.data))
					.catch((err) => console.log(err));

				return;
			}

			this.products.push(product);

			if (this.products.length === 1) {
				const data = new FormData();
				data.append('user_id', 1);
				data.append(
					'product_ids',
					JSON.stringify(this.products.map((product) => product.id))
				);
				data.append('paid', 0);

				axios
					.post(`${API_URL}/api/carts`, data)
					.then((res) => console.log(res.data))
					.catch((err) => console.log(err));
			} else {
				const product_ids = this.products.map((product) => product.id);
				axios
					.patch(`${API_URL}/api/carts/${this.cartId}`, {
						product_ids: JSON.stringify(product_ids),
					})
					.then((res) => console.log(res.data));
			}

			localStorage.setItem('cart', JSON.stringify(this.products));
		},

		deleteProduct(id) {
			this.products = this.products.filter((product) => id != product.id);

			localStorage.setItem('cart', JSON.stringify(this.products));
		},

		fetchProducts(id) {
			axios.get(`${API_URL}/api/carts/${id}`).then((res) => {
				res.data.products.forEach((product) => {
					product.qty = 1;
				});

				this.cartId = res.data.cart_id;

				if (!this.products[0]) {
					localStorage.setItem('cart', JSON.stringify(res.data.products));
					this.products = res.data.products;
				}
			});
		},

		increaseQty(id) {
			const product = this.products.find((product) => product.id === id);

			if (product.qty <= product.count) {
				product.qty++;

				localStorage.setItem('cart', JSON.stringify(this.products));
			}
		},

		decreaseQty(id) {
			const product = this.products.find((product) => product.id === id);

			if (product.qty > 1) {
				product.qty--;

				localStorage.setItem('cart', JSON.stringify(this.products));
			}
		},
	},
});

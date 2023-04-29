import { defineStore } from 'pinia';

export const useWishListStore = defineStore('wishList', {
	state: () => ({
		wishes: [],
	}),

	actions: {
		addWish(product) {
			if (this.wishes.some(({ id }) => id === product.id)) {
				this.wishes = this.wishes.filter(({ id }) => id != product.id);
				return;
			}

			this.wishes.push(product);
		},

		deleteWish(id) {
			this.wishes = this.wishes.filter((product) => id != product.id);
		},
	},
});

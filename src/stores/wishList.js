import { defineStore } from 'pinia';

export const useWishListStore = defineStore('wishList', {
	state: () => ({
		wishes: JSON.parse(localStorage.getItem('wishList')) ?? [],
	}),

	actions: {
		addWish(product) {
			if (this.wishes.some(({ id }) => id === product.id)) {
				this.wishes = this.wishes.filter(({ id }) => id != product.id);
				return;
			}

			this.wishes.push(product);

			localStorage.setItem('wishList', JSON.stringify(this.wishes));
		},

		deleteWish(id) {
			this.wishes = this.wishes.filter((product) => id != product.id);

			localStorage.setItem('wishList', JSON.stringify(this.wishes));
		},
	},
});

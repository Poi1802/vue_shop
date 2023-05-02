<template>
	<tr>
		<td>
			<div class="wishlist-thumb">
				<img src="src/assets/images/shop/cart-product-thumb-1.jpg" alt="" />
			</div>
		</td>
		<td>
			<h5>{{ giveTitle(product.title) }}</h5>
		</td>
		<td>
			<p class="price">{{ product.price }} ₽</p>
		</td>
		<td v-if="product.published">
			<p class="instock">Продается</p>
		</td>
		<td v-else>
			<p class="instock unstock">Нет в наличии</p>
		</td>
		<td class="add-to-cart-btn">
			<a
				@click.prevent="this.cartStore.addProduct(product)"
				v-if="!isInCart"
				href="#"
				class="btn--primary style2"
				>В корзину</a
			>
			<a
				@click.prevent="this.cartStore.addProduct(product)"
				v-else
				href="#"
				class="btn--primary style2 activeCart"
				>Из корзины</a
			>
		</td>
		<td>
			<div @click.prevent="wishStore.deleteWish(product.id)" class="remove">
				<i class="flaticon-cross"></i>
			</div>
		</td>
	</tr>
</template>

<script>
export default {
	props: {
		product: Object,
	},
	computed: {
		isInCart() {
			if (this.cartStore.products[0]) {
				return this.cartStore.products.some(({ id }) => id === this.product.id);
			}
		},
	},
	methods: {
		giveTitle(title) {
			if (title.length > 25) {
				return title.slice(0, 25) + '...';
			}

			return title;
		},
	},
	inject: {
		cartStore: {
			from: 'cartStore',
			default: {},
		},
	},
};
</script>

<style lang="sass" scoped>
.remove
  transition: all 0.3s ease-in-out

  &:hover
    color: red

.unstock
  background-color: #eb4f34 !important

.activeCart
  background-color: #f39c66
  transform: scale(1.1)
</style>

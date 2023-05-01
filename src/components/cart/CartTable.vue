<template>
	<table class="cart-table">
		<thead class="cart-header">
			<tr>
				<th class="">Product Name</th>
				<th class="price">Price</th>
				<th>Quantity</th>
				<th>Subtotal</th>
				<th class="hide-me"></th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="product in cartStore.products">
				<td>
					<div class="thumb-box">
						<a href="shop-details-1.html" class="thumb">
							<img src="src/assets/images/shop/cart-product-thumb-1.jpg" alt="" />
						</a>
						<a href="shop-details-1.html" class="title">
							<h5>{{ giveTitle(product.title) }}</h5>
						</a>
					</div>
				</td>
				<td>{{ product.price }} ₽</td>
				<td class="qty">
					<div class="qtySelector text-center">
						<span @click="cartStore.decreaseQty(product.id)" class="decreaseQty"
							><i class="flaticon-minus"></i>
						</span>
						<div class="qtyValue">{{ product.qty }}</div>
						<span @click="cartStore.increaseQty(product.id)" class="increaseQty">
							<i class="flaticon-plus"></i>
						</span>
					</div>
				</td>
				<td class="sub-total">{{ product.price * product.qty }} ₽</td>
				<td>
					<div @click.prevent="cartStore.deleteProduct(product.id)" class="remove">
						<i class="flaticon-cross"></i>
					</div>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
	data: () => ({
		cartStore: useCartStore(),
	}),
	props: {
		product: Object,
	},
	mounted() {},
	methods: {
		giveTitle(title) {
			if (title.length > 25) {
				return title.slice(0, 25) + '...';
			}

			return title;
		},
		increaseQty() {
			if (this.product.qty <= this.product.count) {
				this.product.qty++;
			}
		},
		decreaseQty() {
			if (this.product.qty > 1) {
				this.product.qty--;
			}
		},
	},
};
</script>

<style lang="sass" scoped>
.qtyValue
  margin: auto
</style>

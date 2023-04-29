<template>
	<div class="col-xl-4 col-lg-6 col-6 wow fadeInUp animated">
		<div class="products-three-single w-100 mt-30">
			<div class="products-three-single-img">
				<a href="shop-details-3.html" class="d-block">
					<img
						src="src/assets/images/home-three/productss2-1.jpg"
						class="first-img"
						alt="" />
					<img
						src="src/assets/images/home-three/productss2-hover-1.png"
						alt=""
						class="hover-img" />
				</a>
				<div class="products-grid-one__badge-box">
					<span class="bg_base badge new">New</span>
				</div>
				<a
					@click.prevent="cartStore.addProduct(product)"
					href="cart.html"
					class="addcart btn--primary style2"
					:class="{ activeCart: isInCart }">
					<template v-if="!isInCart">В корзину</template>
					<template v-else>Из корзины</template>
				</a>
				<div class="products-grid__usefull-links">
					<ul>
						<li>
							<a
								@click.prevent="wishStore.addWish(product)"
								href="#"
								class="wishIcon"
								:class="{
									activeWish: wishStore.wishes.some(({ id }) => id === product.id),
								}">
								<i class="flaticon-heart"> </i>
								<span>избранное</span>
							</a>
						</li>
						<li>
							<a :href="`#popup${product.id}`" class="popup_link">
								<i class="flaticon-visibility"></i>
								<span>просмотреть</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div :id="`popup${product.id}`" class="product-gird__quick-view-popup mfp-hide">
				<div class="container">
					<div class="row justify-content-between align-items-center">
						<div class="col-lg-6">
							<div class="quick-view__left-content">
								<div class="tabs">
									<div class="popup-product-thumb-box">
										<ul>
											<li class="tab-nav popup-product-thumb">
												<a href="#tabb1">
													<img src="src/assets/images/shop/products-v6-img5.jpg" alt="" />
												</a>
											</li>
											<li class="tab-nav popup-product-thumb">
												<a href="#tabb2">
													<img src="src/assets/images/shop/products-v6-img6.jpg" alt="" />
												</a>
											</li>
											<li class="tab-nav popup-product-thumb">
												<a href="#tabb3">
													<img src="src/assets/images/shop/products-v6-img7.jpg" alt="" />
												</a>
											</li>
										</ul>
									</div>
									<div class="popup-product-main-image-box">
										<div id="tabb1" class="tab-item popup-product-image">
											<div class="popup-product-single-image">
												<img src="src/assets/images/shop/products-v6-img5.jpg" alt="" />
											</div>
										</div>
										<div id="tabb2" class="tab-item popup-product-image">
											<div class="popup-product-single-image">
												<img src="src/assets/images/shop/products-v6-img6.jpg" alt="" />
											</div>
										</div>
										<div id="tabb3" class="tab-item popup-product-image">
											<div class="popup-product-single-image">
												<img src="src/assets/images/shop/products-v6-img7.jpg" alt="" />
											</div>
										</div>
										<button class="prev"><i class="flaticon-back"></i></button>
										<button class="next"><i class="flaticon-next"></i></button>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="popup-right-content">
								<h3>{{ product.title }}</h3>
								<p class="text">{{ product.title }}</p>
								<div class="price">
									<h2>{{ product.price }} ₽</h2>
								</div>
								<div class="color-varient">
									<a
										v-for="color in product.colors"
										href="#0"
										@click.prevent="selectedColor = color.id"
										:style="{ 'background-color': color.title }"
										class="color-name"
										:class="{ activeColor: selectedColor == color.id }">
										<span>{{ color.title }}</span>
									</a>
								</div>
								<div class="count">
									<h6>Всего: {{ product.count }}</h6>
								</div>
								<div class="add-product">
									<h6>Кол-во:</h6>
									<div class="button-group">
										<div class="qtySelector text-center">
											<span @click="reduceQty" class="decreaseQty">
												<i class="flaticon-minus"></i>
											</span>
											<input type="text" class="qtyValue" :value="qty" />
											<span @click="addQty" class="increaseQty">
												<i class="flaticon-plus"></i>
											</span>
										</div>
										<button
											@click.prevent="cartStore.addProduct(product)"
											class="btn--primary"
											:class="{ activeCartBtn: isInCart }">
											<template v-if="!isInCart">В корзину</template>
											<template v-else>Из корзины</template>
										</button>
									</div>
								</div>
								<div class="payment-method">
									<a href="#0">
										<img src="src/assets/images/payment_method/method_1.png" alt="" />
									</a>
									<a href="#0">
										<img src="src/assets/images/payment_method/method_2.png" alt="" />
									</a>
									<a href="#0">
										<img src="src/assets/images/payment_method/method_3.png" alt="" />
									</a>
									<a href="#0">
										<img src="src/assets/images/payment_method/method_4.png" alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="products-three-single-content text-center">
				<span>{{ product.category.title }}</span>
				<h5>
					<a href="shop-details-3.html"> {{ product.title }} {{ product.id }} </a>
				</h5>
				<p>{{ product.price }} ₽</p>
			</div>
		</div>
	</div>
</template>

<script>
import { useCartStore } from '../../stores/cart';
import { useWishListStore } from '../../stores/wishList';

export default {
	props: {
		product: {
			type: Object,
			default: {},
		},
	},
	data: () => ({
		qty: 1,
		selectedColor: null,
		wishStore: useWishListStore(),
		cartStore: useCartStore(),
	}),
	computed: {
		isInCart() {
			return this.cartStore.products.some(({ id }) => id === this.product.id);
		},
	},
	methods: {
		addQty() {
			if (this.qty === this.product.count) {
				return;
			}

			this.qty++;
		},
		reduceQty() {
			if (this.qty === 1) {
				return;
			}

			this.qty--;
		},
	},
};
</script>

<style lang="sass" scoped>
.activeCart
  background-color: #f39c66
  transform: scale(1.1)

.activeCartBtn
  background-color: #f39c66
  border-color: #f39c66
  color: white
  transform: scale(1.1)

.wishIcon
  &:active
    transform: scale(1.1)

.activeWish
  background-color: #f39c66
  transform: scale(1.1)
  i
    color: white

.qtySelector
  span
    cursor: pointer

.activeColor
  transform: scale(1.1)
  box-shadow: 0.2em 0.2em 0.1em 0 rgba(15, 28, 63, 0.275)

.count
  h6
    text-transform: uppercase
    font-weight: 600
</style>

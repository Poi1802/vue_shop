<template>
	<!-- ==========Preloader========== -->
	<div v-if="isLoading" class="loader"><span>ZheKarte...</span></div>
	<!-- ==========Preloader========== -->
	<main>
		<!--Start Shop Details Breadcrumb-->
		<div class="shop-details-breadcrumb wow fadeInUp animated overflow-hidden">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="shop-details-inner">
							<ul class="shop-details-menu">
								<li><a href="index.html">Home</a></li>
								<li class="active">Shop Details</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--End Shop Details Breadcrumb-->
		<!--Start Shop Details Top-->
		<section class="shop-details-top two">
			<div class="container">
				<div class="row mt--30">
					<DetailSlider />
					<div class="col-xl-6 col-lg-6 mt-30 wow fadeInUp animated">
						<div class="shop-details-top-right">
							<div class="shop-details-top-right-content-box">
								<div class="shop-details-top-review-box"></div>
								<div class="shop-details-top-title">
									<h3>Gold Diamond Bracelet</h3>
								</div>
								<div class="shop-details-top-price-box">
									<h3>$30.00</h3>
								</div>
								<div class="shop-details-top-color-sky-box">
									<h4 v-if="checkedColor.id">Цвет: ({{ checkedColor.title }})</h4>
									<h4 v-else>Выберите цвет</h4>
									<ul class="color-option">
										<li v-for="color in product.colors" :key="color.id">
											<a
												href="#0"
												@click.prevent="checkColor(color)"
												style="border-radius: 50%; width: 40px; height: 40px"
												:style="{ 'background-color': color.title }"
												class="color-option-single"
												:class="{ activeColor: checkedColor.id === color.id }">
											</a>
										</li>
									</ul>
								</div>
								<div class="product-quantity">
									<h4>Quantity</h4>
									<div class="product-quantity-box d-flex align-items-center flex-wrap">
										<div class="qty mr-2">
											<div class="qtySelector text-center">
												<span class="decreaseQty"><i class="flaticon-minus"></i> </span>
												<input type="text" class="qtyValue" value="1" />
												<span class="increaseQty"> <i class="flaticon-plus"></i> </span>
											</div>
										</div>
										<div class="product-quantity-check">
											<i class="flaticon-select"></i>
											<p>In Stock</p>
										</div>
									</div>
								</div>
								<div class="shop-details-top-order-now">
									<i class="flaticon-point"></i>
									<p>Закажите сейчас, осталось всего: {{ product.count }}</p>
								</div>
								<div class="shop-details-top-cart-box-btn mb-4">
									<button
										@click.prevent="cartStore.addProduct(product, productQty)"
										href="cart.html"
										class="addcart btn--primary style2"
										:class="{ activeCart: isInCart }">
										<template v-if="!isInCart">В корзину</template>
										<template v-else>Из корзины</template>
									</button>
								</div>
								<div class="shop-details-top-buy-now-btn mb-2">
									<a href="#" class="btn--primary">Buy It Now</a>
								</div>
								<ul class="shop-details-top-category-tags">
									<li>Category: <span>Gold Diamond</span></li>
									<li>Tags: <span>platinum watch, gold ring, women jewellary</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End Shop Details Top-->
		<!-- productdrescription-tabStart -->
		<section class="product pt-60 pb-60 wow fadeInUp overflow-hidden">
			<div class="container">
				<div class="row wow fadeInUp animated">
					<div class="col-12">
						<ul
							class="nav product-details-nav nav-one nav-pills justify-content-center"
							id="pills-tab-two"
							role="tablist">
							<li class="nav-item" role="presentation">
								<button
									class="nav-link active"
									id="pills-description-tab"
									data-bs-toggle="pill"
									data-bs-target="#pills-description"
									type="button"
									role="tab"
									aria-controls="pills-description"
									aria-selected="true">
									Description
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div class="row wow fadeInUp animated">
					<div class="tab-content" id="pills-tabContent-two">
						<div
							class="tab-pane fade show active"
							id="pills-description"
							role="tabpanel"
							aria-labelledby="pills-description-tab">
							<div class="product-drescription">
								<h4>Product Details:</h4>
								<p>
									{{ product.description }}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- productdrescription-tab End -->
		<!-- recent-products Start -->
		<!-- <section
			v-if="recentProducts"
			class="recent-products pt-60 pb-120 overflow-hidden wow fadeInUp">
			<div class="container">
				<div class="row">
					<div class="col-12 wow fadeInUp animated">
						<div class="section-head text-center">
							<h2>Recent Products</h2>
						</div>
					</div>
				</div>
				<div class="row mt-30 wow fadeInUp animated">
					<div class="d-flex">
						<Product
							v-for="recentProduct in recentProducts"
							:key="recentProduct.id"
							:product="product" />
					</div>
				</div>
			</div>
		</section> -->
		<!-- recent-products End -->
	</main>
</template>

<script>
import DetailSlider from '@/components/product/DetailSlider.vue';
import RecentProduct from '@/components/product/RecentProduct.vue';
import Product from '../../components/product/Product.vue';
import { useCartStore } from '../../stores/cart';

export default {
	data: () => ({
		product: {},
		recentProducts: [],
		checkedColor: {},
		isLoading: false,
		productQty: 1,
		cartStore: useCartStore(),
	}),

	computed: {
		isInCart() {
			if (this.cartStore.products[0]) {
				return this.cartStore.products.some(({ id }) => id === this.product.id);
			}
		},
	},

	components: {
		DetailSlider,
		RecentProduct,
		Product,
	},

	mounted() {
		$(document).trigger('change');

		this.getProduct();
	},

	updated() {},

	methods: {
		getProduct() {
			this.isLoading = true;

			this.axios
				.get(`${this.API_URL}/api/products/${this.$route.params.id}`)
				.then((res) => {
					this.product = res.data.product;
					this.recentProducts = res.data.recentProducts;
				})
				.catch()
				.finally(() => (this.isLoading = false));
		},

		checkColor(colorObj) {
			this.checkedColor = colorObj;
		},

		trigger() {
			$(document).trigger('change');
			console.log(this.trigger);
		},
	},
};
</script>

<style lang="sass" scoped>
.activeColor
  transform: scale(1.1)
  box-shadow: 0.4em 0.2em 0.1em 0 rgba(15, 28, 63, 0.225)

.activeCart
  background-color: #f39c66
  transform: scale(1.03)
</style>

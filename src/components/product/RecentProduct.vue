<template>
	<div class="products-grid-one">
		<div class="products-grid-one__product-image">
			<div class="products-grid-one__badge-box">
				<span class="bg_base badge new">New</span>
			</div>
			<a href="shop-details-1.html" class="d-block products-grid__image_holder">
				<img src="/src/assets/images/shop/products-img1.jpg" alt="Alt" />
			</a>
			<div class="products-grid__usefull-links">
				<ul>
					<li>
						<a href="wishlist.html">
							<i class="flaticon-heart"> </i> <span> wishlist</span>
						</a>
					</li>
					<li>
						<a href="compare.html">
							<i class="flaticon-left-and-right-arrows"></i>
							<span> compare</span>
						</a>
					</li>
					<li>
						<a :href="`#view-popup${product.id}`" class="popup_link">
							<i class="flaticon-visibility"></i> <span> quick view</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<div :id="`view-popup${product.id}`" class="product-gird__quick-view-popup mfp-hide">
			<div class="container">
				<div class="row justify-content-between align-items-center">
					<div class="col-lg-6">
						<div class="quick-view__left-content">
							<div class="tabs">
								<div class="popup-product-thumb-box">
									<ul>
										<li class="tab-nav popup-product-thumb">
											<a href="#tab7">
												<img src="/src/assets/images/shop/products-img1.jpg" alt="img" />
											</a>
										</li>
										<li class="tab-nav popup-product-thumb">
											<a href="#tab8">
												<img src="/src/assets/images/shop/products-img2.jpg" alt="img" />
											</a>
										</li>
										<li class="tab-nav popup-product-thumb">
											<a href="#tab9">
												<img src="/src/assets/images/shop/products-img3.jpg" alt="img" />
											</a>
										</li>
									</ul>
								</div>
								<div class="popup-product-main-image-box">
									<div id="tab7" class="tab-item popup-product-image">
										<div class="popup-product-single-image">
											<img src="/src/assets/images/shop/products-img1.jpg" alt="img" />
										</div>
									</div>
									<div id="tab8" class="tab-item popup-product-image">
										<div class="popup-product-single-image">
											<img src="/src/assets/images/shop/products-img2.jpg" alt="img" />
										</div>
									</div>
									<div id="tab9" class="tab-item popup-product-image">
										<div class="popup-product-single-image">
											<img src="/src/assets/images/shop/products-img3.jpg" alt="img" />
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
							<h3>Blacked Neckles Set</h3>
							<div class="ratting">
								<i class="flaticon-star"></i> <i class="flaticon-star"></i>
								<i class="flaticon-star"></i> <i class="flaticon-star"></i>
								<i class="flaticon-star"></i> <span>(100)</span>
							</div>
							<p class="text">Hydrating Plumping Intense Shine Lip Colour</p>
							<div class="price">
								<h2>$45 USD <del> $50 USD</del></h2>
								<h6>In stuck</h6>
							</div>
							<div class="add-product">
								<h6>Qty:</h6>
								<div class="button-group">
									<div class="qtySelector text-center">
										<span class="decreaseQty"><i class="flaticon-minus"></i> </span>
										<input type="number" class="qtyValue" value="1" />
										<span class="increaseQty">
											<i class="flaticon-plus"></i>
										</span>
									</div>
									<button class="btn--primary">Add to Cart</button>
								</div>
							</div>
							<div class="payment-method">
								<a href="#0">
									<img src="/src/assets/images/payment_method/method_1.png" alt="" />
								</a>
								<a href="#0">
									<img src="/src/assets/images/payment_method/method_2.png" alt="" />
								</a>
								<a href="#0">
									<img src="/src/assets/images/payment_method/method_3.png" alt="" />
								</a>
								<a href="#0">
									<img src="/src/assets/images/payment_method/method_4.png" alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="products-grid__content">
			<a href="cart.html" class="products-grid__cart-btn btn--primary">
				<span class="one"> Add to Cart </span>
				<span class="two"> <i class="flaticon-shopping-cart"> </i> </span>
			</a>
			<div class="ratting">
				<i class="flaticon-star"></i> <i class="flaticon-star"></i>
				<i class="flaticon-star"></i> <i class="flaticon-star"></i>
				<i class="flaticon-star"></i>
			</div>
			<h5 class="product_name">
				<a href="shop-details-1.html">Diamond Bracelet </a>
			</h5>
			<div class="price d-flex align-content-center justify-content-center">
				<p>$2909</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: Object,
	},
};
</script>

<style lang="sass" scoped></style>

<template>
	<!-- header-default start -->
	<header class="header-style-3">
		<!-- Start Desktop Menu -->
		<div class="menubox">
			<div class="container-fluid">
				<div class="row d-lg-none d-block">
					<div class="mobile-menu">
						<div class="mobile-menu__menu-top border-bottom-0">
							<div class="container">
								<div class="row">
									<div
										class="menu-info d-flex justify-content-between align-items-center">
										<div class="menubar"><span></span> <span></span> <span></span></div>
										<a href="/" class="logo">
											<img src="src/assets/images/logo/logo.png" alt="" />
										</a>
										<div class="cart-holder">
											<router-link
												:to="{ name: 'cart' }"
												class="cart cart-icon position-relative">
												<i class="flaticon-shopping-cart"></i>
												<span v-if="cartStore.products[0]"
													>({{ cartStore.products.length }})</span
												>
											</router-link>
										</div>
										<div class="cart-holder">
											<router-link
												:to="{ name: 'wish' }"
												class="cart cart-icon position-relative">
												<i class="flaticon-heart"></i>
												<span v-if="wishStore.wishes[0]"
													>({{ wishStore.wishes.length }})</span
												>
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="menu-closer"></div>
						<div class="mobile-menu__sidebar-menu">
							<div class="menu-closer two">
								<span> Close Menu</span>
								<span class="cross"><i class="flaticon-cross"></i></span>
							</div>
							<div class="search-box-holder">
								<form action="#0">
									<div class="form-group search-box menu">
										<input
											type="text"
											class="form-control"
											placeholder="Search for products" />
										<span class="search-icon">
											<i class="flaticon-magnifying-glass"></i>
										</span>
									</div>
								</form>
							</div>
							<ul class="page-dropdown-menu">
								<li class="dropdown-list">
									<a href="/"> <span>Home</span> </a>
								</li>
								<li class="dropdown-list">
									<router-link :to="{ name: 'product.index' }">
										<span>Shop </span>
									</router-link>
								</li>
								<li class="dropdown-list">
									<router-link :to="{ name: 'about' }">О нас</router-link>
								</li>
								<template v-if="!userStore.token">
									<li><RouterLink :to="{ name: 'login' }">Login </RouterLink></li>
									<li>
										<RouterLink :to="{ name: 'register' }">Register </RouterLink>
									</li>
								</template>
								<li v-else>
									<a @click.prevent="userStore.logout" href="#"> Logout </a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="d-lg-block d-none">
					<div class="row g-0 position-relative">
						<div
							class="col-lg-3 d-flex align-items-center justify-content-center border-rit">
							<div class="logo">
								<a href="/"> <img src="src/assets/images/logo/logo.png" alt="" /> </a>
							</div>
						</div>
						<div class="col-lg-9 g-0 p-0">
							<div class="row g-0 holder">
								<div class="col-12">
									<div class="some-info">
										<p class="d-flex align-items-center">
											<span class="icon"> <i class="flaticon-power"></i> </span> Welcome
											to ZheKarte Online Shop
										</p>
										<div class="right d-flex align-items-center">
											<!-- <div class="language currency">
												<select>
													<option>USD</option>
													<option value="1">INR</option>
													<option value="2">BDT</option>
												</select>
											</div>
											<div class="language two">
												<select>
													<option>ENGLISH</option>
													<option value="1">GERMAN</option>
													<option value="4">FRENCH</option>
												</select>
											</div> -->
											<router-link v-if="!userStore.token" :to="{ name: 'login' }">
												Sign In / Register
											</router-link>
											<a @click.prevent="userStore.logout" v-else href="#"> Logout </a>
										</div>
									</div>
								</div>
							</div>
							<div class="border-one"></div>
							<div class="row g-0 holder">
								<div class="col-12">
									<div class="mega-menu-default mega-menu d-lg-block d-none">
										<div class="d-flex align-items-center justify-content-between">
											<nav>
												<ul
													class="page-dropdown-menu d-flex align-items-center justify-content-center">
													<li class="dropdown-list">
														<a href="/"> <span>Home</span> </a>
													</li>
													<li class="dropdown-list">
														<router-link :to="{ name: 'product.index' }">
															<span>Shop </span>
														</router-link>
													</li>
													<li class="dropdown-list">
														<router-link :to="{ name: 'about' }">О нас</router-link>
													</li>
												</ul>
											</nav>

											<div class="right d-flex align-items-center justify-content-end">
												<ul class="main-menu__widge-box d-flex align-items-center">
													<li class="d-lg-block d-none">
														<a href="my-account.html"><i class="flaticon-user"></i> </a>
													</li>
													<li class="d-lg-block d-none">
														<router-link :to="{ name: 'wish' }" class="number"
															><i class="flaticon-heart"></i>
															<span v-if="wishStore.wishes[0]" class="count"
																>({{ wishStore.wishes.length }})</span
															>
														</router-link>
													</li>
													<li class="cartm">
														<router-link :to="{ name: 'cart' }" class="number cart-icon">
															<i class="flaticon-shopping-cart"></i>
															<span v-if="cartStore.products[0]" class="count"
																>({{ cartStore.products.length }})</span
															>
														</router-link>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a href="shop-grid.html" class="offer-link"> Offer </a>
					</div>
				</div>
			</div>
		</div>

		<div class="sticy-header">
			<div class="mobile-menu d-lg-none d-block">
				<div class="mobile-menu__menu-top border-bottom-0">
					<div class="container">
						<div class="row">
							<div class="menu-info d-flex justify-content-between align-items-center">
								<div class="menubar"><span></span> <span></span> <span></span></div>
								<a href="/" class="logo">
									<img src="src/assets/images/logo/logo.png" alt="" />
								</a>
								<div class="cart-holder">
									<router-link
										:to="{ name: 'cart' }"
										class="cart cart-icon position-relative">
										<i class="flaticon-shopping-cart"></i>
										<span v-if="cartStore.products[0]"
											>({{ cartStore.products.length }})</span
										>
									</router-link>
								</div>
								<div class="cart-holder">
									<router-link
										:to="{ name: 'wish' }"
										class="cart cart-icon position-relative">
										<i class="flaticon-heart"></i>
										<span v-if="wishStore.wishes[0]"
											>({{ wishStore.wishes.length }})</span
										>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="container position-relative d-lg-block d-none">
				<div class="d-flex align-items-center justify-content-between">
					<a href="/" class="logo me-2">
						<img src="src/assets/images/logo/logo.png" alt="" />
					</a>
					<div class="mega-menu-default mega-menu d-lg-block d-none">
						<div class="container">
							<div class="row">
								<nav>
									<ul
										class="page-dropdown-menu d-flex align-items-center justify-content-center">
										<li class="dropdown-list">
											<a href="/"> <span>Home</span> </a>
										</li>
										<li class="dropdown-list">
											<router-link :to="{ name: 'product.index' }">
												<span>Shop </span>
											</router-link>
										</li>
										<li class="dropdown-list">
											<router-link :to="{ name: 'about' }">О нас</router-link>
										</li>
									</ul>
									<ul class="main-menu__widge-box d-flex align-items-center">
										<li class="d-lg-block d-none">
											<a href="my-account.html"><i class="flaticon-user"></i> </a>
										</li>
										<li class="d-lg-block d-none">
											<router-link :to="{ name: 'wish' }" class="number"
												><i class="flaticon-heart"></i>
												<span v-if="wishStore.wishes[0]" class="count"
													>({{ wishStore.wishes.length }})</span
												>
											</router-link>
										</li>
										<li class="cartm">
											<router-link :to="{ name: 'cart' }" class="number cart-icon">
												<i class="flaticon-shopping-cart"></i>
												<span v-if="cartStore.products[0]" class="count"
													>({{ cartStore.products.length }})</span
												>
											</router-link>
										</li>
										<li>
											<router-link v-if="!userStore.token" :to="{ name: 'login' }">
												Sign In / Register
											</router-link>
											<a @click.prevent="userStore.logout" v-else href="#"> Logout </a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="sidebar-content-closer"></div>
	</header>
</template>

<script>
import { useCartStore } from '../stores/cart';
import { useWishListStore } from '../stores/wishList';
import { useUserStore } from '../stores/user';

export default {
	data: () => ({
		wishStore: useWishListStore(),
		cartStore: useCartStore(),
		userStore: useUserStore(),
	}),
	mounted() {
		this.cartStore.fetchProducts(1);
	},
	computed: {},
};
</script>

<style lang="sass" scoped>
.main-menu__widge-box
  margin-bottom: 10px
  margin-left: 22px

.wish-icon-mob
  margin-left: 10px
</style>

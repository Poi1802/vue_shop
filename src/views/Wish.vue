<template>
	<main class="overflow-hidden">
		<!--Start Breadcrumb Style2-->
		<section class="breadcrumb-area">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="breadcrumb-content text-center wow fadeInUp animated">
							<h2>Wishlist</h2>
							<div class="breadcrumb-menu">
								<ul>
									<li>
										<a href="/"><i class="flaticon-home pe-2"></i>Home</a>
									</li>
									<li><i class="flaticon-next"></i></li>
									<li class="active">Wishlist</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End Breadcrumb Style2-->
		<!--Start Wishlist-->
		<section class="wishlist pt-120 pb-120">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 wow fadeInUp animated">
						<div class="wishlist-table-box">
							<div class="wishlist-table-outer">
								<table class="wishlist-table">
									<thead class="wishlist-header">
										<tr>
											<th>Картинка</th>
											<th>Название</th>
											<th>Цена</th>
											<th>Статус</th>
											<th>В корзину</th>
											<th>Удалить</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="product in wishStore.wishes">
											<td>
												<div class="wishlist-thumb">
													<img
														src="src/assets/images/shop/cart-product-thumb-1.jpg"
														alt="" />
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
												<a href="cart.html" class="btn--primary style2">В корзину</a>
											</td>
											<td>
												<div
													@click.prevent="wishStore.deleteWish(product.id)"
													class="remove">
													<i class="flaticon-cross"></i>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End Wishlist-->
	</main>
</template>

<script>
import { useWishListStore } from '../stores/wishList';

export default {
	data: () => ({
		wishStore: useWishListStore(),
	}),
	mounted() {},
	methods: {
		giveTitle(title) {
			if (title.length > 25) {
				return title.slice(0, 25) + '...';
			}

			return title;
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
</style>

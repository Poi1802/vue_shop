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
										<WishRow v-for="product in wishStore.wishes" :product="product" />
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
import WishRow from '../components/wish/WishRow.vue';

export default {
	data: () => ({
		wishStore: useWishListStore(),
	}),
	components: {
		WishRow,
	},
	mounted() {
		console.log(this.cartStore);
	},

	methods: {
		giveTitle(title) {
			if (title.length > 25) {
				return title.slice(0, 25) + '...';
			}

			return title;
		},
	},
	inject: ['cartStore'],
};
</script>

<style lang="sass" scoped>
.remove
  transition: all 0.3s ease-in-out

  &:hover
    color: red
</style>

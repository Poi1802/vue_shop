<template>
	<!-- ==========Preloader========== -->
	<div v-if="isLoading" class="loader"><span>ZheKarte...</span></div>
	<!-- ==========Preloader========== -->
	<main class="overflow-hidden">
		<BreadCrumb />

		<Categories />
		<!--Start product-grid-->
		<div class="product-grid pt-60 pb-120">
			<div class="container">
				<div class="row gx-4">
					<div class="col-xl-3 col-lg-4">
						<div ref="mobileSidebar" class="shop-grid-sidebar">
							<button
								@click.prevent="toggleMobileSidebar"
								class="remove-sidebar d-lg-none d-block">
								<i class="flaticon-cross"> </i>
							</button>
							<Sidebar
								@clickPriceFilter="clickPriceFilter"
								@clickCategoryFilter="clickCategoryFilter"
								@clickColorFilter="clickColorFilter"
								@clickTagFilter="clickTagFilter"
								v-model="searched"
								:prices="productsPrice" />
						</div>
					</div>
					<div class="col-xl-9 col-lg-8">
						<div class="row">
							<div class="col-xl-12">
								<div
									class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
									<div class="left-box wow fadeInUp animated">
										<p>Showing 1–12 of {{ renderProducts.length }} Results</p>
									</div>
									<div
										class="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
										<div class="short-by">
											<div class="select-box">
												<select class="wide">
													<option data-display="Последние">Последние</option>
													<option value="1">Бестселлер</option>
													<option value="2">По алфавиту, А-Я</option>
													<option value="3">По алфавиту, Я-А</option>
													<option value="3">По цене, от низкой</option>
													<option value="3">По цене, от выокой</option>
													<option value="3">Старые</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-12">
								<div class="tab-content" id="pills-tabContent">
									<div
										class="tab-pane fade show active"
										id="pills-grid"
										role="tabpanel"
										aria-labelledby="pills-grid-tab">
										<div class="row">
											<Product
												v-for="product in paginateProducts"
												:key="product.id"
												:product="product" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<Pagination @changePage="changePage" :maxPage="maxPage" :page="page" />
					</div>
				</div>
			</div>
		</div>
		<!--End product-grid-->
	</main>
</template>

<script>
import BreadCrumb from '@/components/product/BreadCrumb.vue';
import Categories from '@/components/product/Categories.vue';
import Product from '@/components/product/Product.vue';
import Sidebar from '@/components/product/Sidebar.vue';
import Pagination from '@/components/product/Pagination.vue';

export default {
	data: () => ({
		products: [],
		renderProducts: [],
		page: 1,
		maxPage: null,
		isLoading: false,
		priceRange: [],
		checkedCategories: [],
		checkedTags: [],
		checkedColors: [],
		searched: '',
	}),
	components: {
		BreadCrumb,
		Categories,
		Product,
		Sidebar,
		Pagination,
	},
	computed: {
		paginateProducts() {
			const start = (this.page - 1) * 12;
			const end = start + 12;

			this.renderProducts = this.products;

			if (this.priceRange) {
				this.renderProducts = this.renderProducts.filter(
					({ price }) => price >= this.priceRange[0] && price <= this.priceRange[1]
				);
			}

			if (this.checkedCategories.length > 0) {
				this.renderProducts = this.renderProducts.filter(({ category }) =>
					this.checkedCategories.includes(category.id)
				);
			}

			if (this.checkedColors.length > 0) {
				this.renderProducts = this.renderProducts.filter(({ colors }) =>
					colors.some((color) => this.checkedColors.includes(color.id))
				);
			}

			if (this.checkedTags.length > 0) {
				this.renderProducts = this.renderProducts.filter(({ tags }) =>
					tags.some((tag) => this.checkedTags.includes(tag.id))
				);
			}

			if (this.searched !== '') {
				this.renderProducts = this.renderProducts.filter(({ title }) =>
					title.toLocaleLowerCase().includes(this.searched.toLocaleLowerCase())
				);
				console.log(this.renderProducts);
			}

			return this.renderProducts.slice(start, end);
		},
		productsPrice() {
			return this.products.map(({ price }) => Number(price));
		},
	},
	mounted() {
		$(document).trigger('change');
		this.getProducts();
	},
	methods: {
		getProducts() {
			this.isLoading = true;
			this.axios
				.get(`${this.API_URL}/api/products`)
				.then((res) => {
					this.products = res.data.data;
					this.initPriceRange();
					$(document).trigger('change');
				})
				.catch((err) => console.log(err))
				.finally(() => {
					$(document).trigger('change');
					this.isLoading = false;
				});
		},

		toggleMobileSidebar() {
			if (this.$refs.mobileSidebar.className === 'shop-grid-sidebar') {
				this.$refs.mobileSidebar.className =
					this.$refs.mobileSidebar.className + ' active';
			} else {
				this.$refs.mobileSidebar.className = 'shop-grid-sidebar';
			}
		},

		changePage(page) {
			this.page = page;
		},

		initPriceRange() {
			this.priceRange = [0, Math.max.apply(Math, this.productsPrice)];

			$('#price-range').slider({
				range: true,
				min: 0,
				max: this.priceRange[1],
				values: this.priceRange,
				slide: function (event, ui) {
					$('#priceRange').val(ui.values[0] + '₽' + ' - ' + ui.values[1] + '₽');
				},
			});
			$('#priceRange').val(
				$('#price-range').slider('values', 0) +
					' ₽' +
					' - ' +
					$('#price-range').slider('values', 1) +
					' ₽'
			);
		},

		clickPriceFilter() {
			this.priceRange = $('#price-range').slider('values');
		},
		clickCategoryFilter(categories) {
			this.checkedCategories = categories;
		},
		clickColorFilter(colors) {
			this.checkedColors = colors;
		},
		clickTagFilter(tags) {
			this.checkedTags = tags;
		},
	},
	watch: {
		renderProducts() {
			this.maxPage = Math.ceil(this.renderProducts.length / 12);
			$(document).trigger('change');
		},
	},
};
</script>

<style lang="sass" scoped></style>

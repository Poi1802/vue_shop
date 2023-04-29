<template>
	<div class="row">
		<div class="col-12 d-flex justify-content-center wow fadeInUp animated">
			<ul class="pagination text-center">
				<li class="next">
					<a @click.prevent="prevPage" href="#0"
						><i class="flaticon-left-arrows" aria-hidden="true"></i>
					</a>
				</li>
				<li v-for="num in maxPage" :key="num">
					<a
						@click.prevent="selectPage(num)"
						:class="{
							active: page === num,
						}"
						href="#0">
						{{ num }}</a
					>
				</li>
				<li class="next">
					<a @click.prevent="nextPage" href="#0"
						><i class="flaticon-next-1" aria-hidden="true"></i>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		page: 1,
	}),
	props: {
		maxPage: Number,
	},
	methods: {
		nextPage() {
			if (this.page === this.maxPage) {
				return;
			}

			this.page++;

			this.$emit('changePage', this.page);
		},

		prevPage() {
			if (this.page === 1) {
				return;
			}

			this.page--;

			this.$emit('changePage', this.page);
		},

		selectPage(page) {
			console.log(page);
			this.page = page;

			this.$emit('changePage', this.page);
		},
	},
};
</script>

<style lang="sass" scoped>
.active
  box-shadow: 0.24em 0.24em 0.2em 0 rgba(15, 28, 63, 0.225)
</style>

<template>
	<div class="sidebar-holder">
		<form
			@submit.prevent="clickSearchBtn"
			class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
			<div class="footer-input-box p-0 wow fadeInUp animated">
				<input
					ref="searchField"
					class="search-field"
					type="text"
					placeholder="Найти товар" />
				<button type="submit" class="subscribe_btn">
					<i class="flaticon-magnifying-glass"></i>
				</button>
			</div>
		</form>
		<div class="single-sidebar-box mt-30 wow fadeInUp animated">
			<h4>Выберите категории</h4>
			<div class="checkbox-item">
				<form>
					<div
						v-for="category in categories"
						:key="category.id"
						@click="clickCategory(category.id)"
						class="form-group">
						<input type="checkbox" :checked="checkedCategories.includes(category.id)" />
						<label :for="category.title">{{ category.title }}</label>
					</div>
				</form>
			</div>
		</div>
		<div class="single-sidebar-box mt-30 wow fadeInUp animated">
			<h4>Выберите цвета</h4>
			<ul class="color-option">
				<li v-for="color in colors" :key="color.id">
					<a
						href="#0"
						@click.prevent="clickColor(color.id)"
						style="border-radius: 50%"
						:style="{ 'background-color': color.title }"
						class="color-option-single"
						:class="{ activeColor: checkedColors.includes(color.id) }">
						<span class="colorSpan"> {{ color.title }}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="single-sidebar-box mt-30 wow fadeInUp animated">
			<h4>Фильтр по цене</h4>
			<div class="slider-box">
				<div id="price-range" class="slider"></div>
				<div class="output-price">
					<label for="priceRange">Цена:</label>
					<input type="numeric" id="priceRange" readonly />
				</div>
				<button @click="$emit('clickPriceFilter', true)" class="filterbtn" type="submit">
					Отфильтровать
				</button>
			</div>
		</div>
		<div class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0">
			<h4>Выберите теги</h4>
			<ul class="popular-tag">
				<li v-for="tag in tags" :key="tag.id">
					<a
						@click.prevent="clickTag(tag.id)"
						:class="{ activeTag: checkedTags.includes(tag.id) }"
						href="#0"
						>{{ tag.title }}</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	data: () => ({
		tags: [],
		categories: [],
		colors: [],
		checkedCategories: [],
		checkedTags: [],
		checkedColors: [],
	}),
	props: {
		prices: {
			type: Array,
			default: [],
		},
		modelValue: {
			type: String,
			default: '',
		},
	},
	mounted() {
		this.getTags();
		this.getCategories();
		this.getColors();

		// this.$refs.searchField.focus();
	},
	methods: {
		getTags() {
			this.axios.get(`${this.apiUrl}/api/tags`).then((res) => {
				this.tags = res.data.data;
			});
		},
		getCategories() {
			this.axios.get(`${this.apiUrl}/api/categories`).then((res) => {
				this.categories = res.data.data;
			});
		},
		getColors() {
			this.axios
				.get(`${this.apiUrl}/api/colors`)
				.then((res) => {
					this.colors = res.data.data;
				})
				.catch((err) => console.log(err));
		},
		clickTag(id) {
			if (this.checkedTags.includes(id)) {
				this.checkedTags = this.checkedTags.filter((catId) => catId !== id);
			} else {
				this.checkedTags.push(id);
			}

			this.$emit('clickTagFilter', this.checkedTags);
		},
		clickCategory(id) {
			if (this.checkedCategories.includes(id)) {
				this.checkedCategories = this.checkedCategories.filter((catId) => catId !== id);
			} else {
				this.checkedCategories.push(id);
			}

			this.$emit('clickCategoryFilter', this.checkedCategories);
		},
		clickColor(id) {
			if (this.checkedColors.includes(id)) {
				this.checkedColors = this.checkedColors.filter((catId) => catId !== id);
			} else {
				this.checkedColors.push(id);
			}

			this.$emit('clickColorFilter', this.checkedColors);
		},
		clickSearchBtn() {
			this.$emit('update:modelValue', this.$refs.searchField.value);
		},
	},
};
</script>

<style lang="sass" scoped>
.activeTag
  background: #f69c63

.activeColor
  transform: scale(1.1)
  box-shadow: 0.4em 0.2em 0.1em 0 rgba(15, 28, 63, 0.225)

.colorSpan
  pointer-events: none
</style>

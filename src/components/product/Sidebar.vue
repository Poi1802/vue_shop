<template>
  <div class="sidebar-holder">
    <form action="#0" class="footer-default__subscrib-form m-0 p-0 wow fadeInUp animated">
      <div class="footer-input-box p-0 "> <input type="email" placeholder="Email address" name="email">
        <button type="submit" class="subscribe_btn"> <i class="flaticon-magnifying-glass"></i> </button>
      </div>
    </form>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated ">
      <h4>Select Categories</h4>
      <div class="checkbox-item">
        <form>
          <div v-for="category in categories" :key="category.id" @click="clickCategory(category.id)" class="form-group">
            <input type="checkbox" :checked="checkedCategories.includes(category.id)"> <label :for="category.title">{{
              category.title }}</label>
          </div>
        </form>
      </div>
    </div>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated">
      <h4>Color Option </h4>
      <ul class="color-option">
        <li v-for="color in colors" :key="color.id"> <a href="#0" :style="{ 'background-color': color.title }"
            class="color-option-single">
            <span> {{ color.title }}</span> </a> </li>
      </ul>
    </div>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated">
      <h4>Filter By Price</h4>
      <div class="slider-box">
        <div id="price-range" class="slider"></div>
        <div class="output-price"> <label for="priceRange">Price:</label> <input type="numeric" id="priceRange" readonly>
        </div>
        <button @click="$emit('clickPriceFilter', true)" class="filterbtn" type="submit"> Filter </button>
      </div>
    </div>
    <div class="single-sidebar-box mt-30 wow fadeInUp animated pb-0 border-bottom-0 ">
      <h4>Tags </h4>
      <ul class="popular-tag">
        <li v-for="tag in tags" :key="tag.id"><a @click.prevent="clickTag(tag.id)" href="#0">{{ tag.title }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tags: [],
    categories: [],
    colors: [],
    checkedCategories: []
  }),
  props: {
    prices: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.getTags()
    this.getCategories()
    this.getColors()
  },
  methods: {
    getTags() {
      this.axios.get(`${this.apiUrl}/api/tags`)
        .then(res => {
          this.tags = res.data.data
        })
    },
    getCategories() {
      this.axios.get(`${this.apiUrl}/api/categories`)
        .then(res => {
          this.categories = res.data.data
        })
    },
    getColors() {
      this.axios.get(`${this.apiUrl}/api/colors`)
        .then(res => {
          this.colors = res.data.data
        })
        .catch(err => console.log(err))
    },
    clickTag(id) {
      console.log(id);
    },
    clickCategory(id) {
      if (this.checkedCategories.includes(id)) {
        this.checkedCategories = this.checkedCategories.filter(catId => catId !== id)
      } else {
        this.checkedCategories.push(id)
      }
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
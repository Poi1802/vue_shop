<template>
  <!-- ==========Preloader========== -->
  <div v-if="isLoading" class="loader"><span>ZheKarte...</span></div>
  <!-- ==========Preloader========== -->
  <main class="overflow-hidden ">
    <BreadCrumb />

    <Categories />
    <!--Start product-grid-->
    <div class="product-grid pt-60 pb-120">
      <div class="container">
        <div class="row gx-4">
          <div class="col-xl-3 col-lg-4">
            <div class="shop-grid-sidebar"> <button class="remove-sidebar d-lg-none d-block"> <i class="flaticon-cross">
                </i> </button>
              <Sidebar @clickPriceFilter="clickPriceFilter" :prices="productsPrice" />
            </div>
          </div>
          <div class="col-xl-9 col-lg-8">
            <div class="row">
              <div class="col-xl-12">
                <div class="shop-grid-page-top-info p-0 justify-content-md-between justify-content-center">
                  <div class="left-box wow fadeInUp animated">
                    <p>Showing 1–12 of {{ products.length }} Results</p>
                  </div>
                  <div class="right-box justify-content-md-between justify-content-center wow fadeInUp animated">
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
                  <div class="tab-pane fade show active" id="pills-grid" role="tabpanel" aria-labelledby="pills-grid-tab">
                    <div class="row">
                      <Product v-for="product in paginateProducts" :key="product.id" :product="product" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12 d-flex justify-content-center wow fadeInUp animated">
                <ul class="pagination text-center">
                  <li class="next"><a @click.prevent="page--" href="#0"><i class="flaticon-left-arrows"
                        aria-hidden="true"></i> </a></li>
                  <li v-for="num in maxPage" :key="num"><a @click.prevent="page = num" :class="{
                      'active': page === num
                    }" href="#0">{{ num }}</a></li>
                  <li class="next"><a @click.prevent="page++" href="#0"><i class="flaticon-next-1" aria-hidden="true"></i>
                    </a></li>
                </ul>
              </div>
            </div>
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

export default {
  data: () => ({
    products: [],
    page: 1,
    maxPage: null,
    isLoading: false
  }),
  components: {
    BreadCrumb, Categories, Product, Sidebar
  },
  computed: {
    paginateProducts() {
      const start = (this.page - 1) * 12;
      const end = start + 12;
      return this.products.slice(start, end)
    },
    productsPrice() {
      return this.products.map(({ price }) => Number(price))
    }
  },
  mounted() {
    $(document).trigger('change')
    this.getProducts()
  },
  methods: {
    getProducts() {
      this.isLoading = true;
      this.axios.get(`${this.apiUrl}/api/products`)
        .then(res => {
          this.products = res.data.data
          this.maxPage = Math.ceil(this.products.length / 12)

          this.initPriceRange();

        })
        .catch(err => console.log(err))
        .finally(() => {
          $(document).trigger('change')
          this.isLoading = false
        })
    },

    initPriceRange() {
      $("#price-range").slider({
        range: true,
        min: 0,
        max: Math.max.apply(Math, this.productsPrice),
        values: [0, Math.max.apply(Math, this.productsPrice)],
        slide: function (event, ui) {
          $("#priceRange").val(ui.values[0] + "₽" + " - " + ui.values[1] + '₽');
        }
      });
      $("#priceRange").val($("#price-range").slider("values", 0) + " ₽" + " - " + $("#price-range").slider("values", 1) + ' ₽');
    },

    clickPriceFilter() {
      console.log($("#price-range").slider('values'));
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
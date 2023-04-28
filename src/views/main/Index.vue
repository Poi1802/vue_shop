<template>
  <div>
    <main class="overflow-hidden">
      <MainSlider />

      <MainSwitcher />

      <MainLatestProducts />

      <MainBestsellers />

      <MainCategories />

      <MainFeatures />

      <MainReviews />

      <MainGallery />
    </main>
  </div>
</template>

<script>
import MainSlider from '@/components/main/MainSlider.vue'
import MainSwitcher from '@/components/main/MainSwitcher.vue'
import MainLatestProducts from '@/components/main/MainLatestProducts.vue'
import MainBestsellers from '@/components/main/MainBestsellers.vue'
import MainCategories from '@/components/main/MainCategories.vue'
import MainFeatures from '@/components/main/MainFeatures.vue'
import MainReviews from '@/components/main/MainReviews.vue'
import MainGallery from '@/components/main/MainGallery.vue'

export default {
  mounted() {
    // window.Slick = $('.banner-slide3 slick slick-initialized slick-slider slick-dotted');
    $(document).trigger('change')
  },
  components: {
    MainSwitcher,
    MainSlider,
    MainLatestProducts,
    MainBestsellers,
    MainCategories,
    MainFeatures,
    MainReviews,
    MainGallery,
  }
}
</script>
 <!-- Slick Slider Js -->
 <!-- <script src="src/assets/js/plugin/slick.min.js"></script> -->
<style lang="sass" scoped>

</style>
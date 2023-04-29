<template>
	<div>
		<!-- ==========Preloader========== -->
		<div class="loader"><span>ZheKarte...</span></div>
		<!-- ==========Preloader========== -->
		<!--===scroll bottom to top===-->
		<a href="#0" class="scrollToTop"><i class="flaticon-up-arrow"></i></a>
		<!--===scroll bottom to top===-->

		<VHeader />

		<RouterView></RouterView>

		<vFooter></vFooter>
	</div>
</template>

<script>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import VHeader from './components/vHeader.vue';

export default {
	data: () => ({
		kek: 'sadfsaf',
	}),
	mounted() {
		$(document).trigger('change');
	},
	components: { vFooter: Footer, RouterView, VHeader },
};
</script>

<style lang="sass" scoped></style>

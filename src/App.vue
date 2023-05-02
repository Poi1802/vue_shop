<template>
	<div>
		<!-- ==========Preloader========== -->
		<div class="loader"><span>ZheKarte...</span></div>
		<!-- ==========Preloader========== -->
		<!--===scroll bottom to top===-->
		<a href="#0" class="scrollToTop"><i class="flaticon-up-arrow"></i></a>
		<!--===scroll bottom to top===-->

		<VHeader />

		<RouterView :key="$route.fullPath"></RouterView>

		<vFooter></vFooter>
	</div>
</template>

<script>
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import VHeader from './components/vHeader.vue';
import { useUserStore } from './stores/user';
import { useCartStore } from './stores/cart';

export default {
	data: () => ({
		kek: 'sadfsaf',
		userStore: useUserStore(),
	}),
	mounted() {
		$(document).trigger('change');
		this.userStore.getToken();
	},
	updated() {
		this.userStore.getToken();
	},
	provide: () => ({
		cartStore: useCartStore(),
	}),
	components: { vFooter: Footer, RouterView, VHeader },
};
</script>

<style lang="sass" scoped></style>

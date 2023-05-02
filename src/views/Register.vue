<template>
	<main class="overflow-hidden">
		<!--Start Breadcrumb Style2-->
		<section class="breadcrumb-area">
			<div class="container">
				<div class="row">
					<div class="col-xl-12">
						<div class="breadcrumb-content text-center">
							<h2>Register</h2>
							<div class="breadcrumb-menu">
								<ul>
									<li>
										<a href="index.html"><i class="flaticon-home pe-2"></i>Home</a>
									</li>
									<li><i class="flaticon-next"></i></li>
									<li class="active">Register</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End Breadcrumb Style2-->
		<!--Start Login Page-->
		<section class="login-page pt-120 pb-120">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-xl-6 col-lg-8 col-md-9">
						<div
							class="login-register-form"
							style="background-image: url('src/assets/images/inner-pages/login-bg.png')">
							<div class="top-title text-center">
								<h2>Register</h2>
								<p>
									Already have an account?
									<router-link :to="{ name: 'login' }">Log in</router-link>
								</p>
							</div>
							<form @submit.prevent="userRegister" class="common-form">
								<div class="form-group">
									<input
										v-model="name"
										type="text"
										class="form-control"
										placeholder="Your Name" />
								</div>
								<div class="form-group">
									<input
										v-model="lastName"
										type="text"
										class="form-control"
										placeholder="Your Last name" />
								</div>
								<div class="form-group">
									<input
										v-model="email"
										type="email"
										class="form-control"
										placeholder="Your Email" />
								</div>
								<div class="form-group eye">
									<input
										v-model="password"
										type="password"
										id="password-field"
										class="form-control"
										placeholder="Password" />
								</div>
								<div class="form-group eye">
									<input
										v-model="passwordConfirmation"
										type="password"
										id="password-field"
										class="form-control"
										placeholder="Password-confirmation" />
								</div>
								<div class="checkk">
									<div class="form-check p-0 m-0">
										<input type="checkbox" id="remember" />
										<label class="p-0" for="remember">
											Accept the Terms and Privacy Policy
										</label>
									</div>
								</div>
								<button type="submit" class="btn--primary style2">Register</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!--End Login Page-->
	</main>
</template>

<script>
import { useUserStore } from '../stores/user';

export default {
	data: () => ({
		name: '',
		lastName: '',
		email: '',
		password: '',
		passwordConfirmation: '',
		userStore: useUserStore(),
	}),

	methods: {
		userRegister() {
			console.log(123);
			const data = {
				name: this.name,
				last_name: this.lastName,
				email: this.email,
				password: this.password,
				password_confirmation: this.passwordConfirmation,
			};

			this.userStore.register(data);
		},
	},
};
</script>

<style lang="sass" scoped></style>

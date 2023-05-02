import axios from 'axios';
import { defineStore } from 'pinia';
import router from '../router';

const API_URL = import.meta.env.VITE_API_URL;

export const useUserStore = defineStore('user', {
	state: () => ({
		user: {},
		token: '',
	}),

	getters: {
		isAuthorized() {
			return localStorage.getItem('x_xsrf_token');
		},
	},

	actions: {
		login(data) {
			axios
				.get(`${API_URL}/sanctum/csrf-cookie`)
				.then((res) => {
					axios
						.post(`${API_URL}/login`, data)
						.then((res) => {
							console.log(res);
							axios.get(`${API_URL}/api/user`).then((res) => (this.user = res.data));

							localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);

							this.getToken();

							router.push({ name: 'product.index' });
						})
						.catch((err) => console.log(err));
				})
				.catch((err) => console.log(err));
		},

		getToken() {
			this.token = localStorage.getItem('x_xsrf_token');
		},

		register(data) {
			axios
				.get(`${API_URL}/sanctum/csrf-cookie`)
				.then((res) => {
					axios
						.post(`${API_URL}/register`, data)
						.then((res) => {
							console.log(res);
							axios.get(`${API_URL}/api/user`).then((res) => (this.user = res.data));

							localStorage.setItem('x_xsrf_token', res.config.headers['X-XSRF-TOKEN']);

							this.getToken();

							router.push({ name: 'product.index' });
						})
						.catch((err) => console.log(err));
				})
				.catch((err) => console.log(err));
		},

		logout() {
			axios
				.get(`${API_URL}/sanctum/csrf-cookie`)
				.then((res) => {
					axios
						.post(`${API_URL}/logout`)
						.then((res) => {
							console.log(res);
							this.user = {};

							localStorage.removeItem('x_xsrf_token');

							this.getToken();

							router.push({ name: 'product.index' });
						})
						.catch((err) => console.log(err));
				})
				.catch((err) => console.log(err));
		},
	},
});

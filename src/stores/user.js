import axios from 'axios';
import { defineStore } from 'pinia';

const API_URL = import.meta.env.VITE_API_URL;

export const useUserStore = defineStore('user', {
	state: () => ({
		user: {},
	}),

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
						})
						.catch((err) => console.log(err));
				})
				.catch((err) => console.log(err));
		},
	},
});

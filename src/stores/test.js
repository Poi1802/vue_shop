import { defineStore } from 'pinia';
import { onMounted } from 'vue';

export const usePostsStore = defineStore('posts', () => {
	const posts = ref([]);

	function getPosts() {
		fetch('https://mywebsite.com/wp-json/wp/v2/posts')
			.then((response) => response.json())
			.then((data) => {
				posts.value = data;
				console.log('Data is fetched.');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return {
		posts,
		getPosts,
	};
});

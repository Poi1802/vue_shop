import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import axios from 'axios';

const app = createApp(App);

// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.withCredentials = true;

app.config.globalProperties.axios = axios;
app.config.globalProperties.API_URL = 'http://localhost:8888';

app.use(createPinia());
app.use(router);

app.mount('#app');

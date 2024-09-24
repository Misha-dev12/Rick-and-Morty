import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes.js';
import { createPinia } from 'pinia';

import App from './App.vue';

import './assets/scss/main.scss';

const router = createRouter({
	history: createWebHistory(),
	routes
});

createApp(App).use(createPinia()).use(router).mount('#app');

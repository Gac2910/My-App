
// ----- set up router -----
import Home from './pages/page-home.js';

const routes = [
	{ path: '/', component: Home }
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes: routes
});

// ----- set up root app -----
import VueFooter from './components/vue-footer.js';
import VueHeader from './components/vue-header.js';

const app = Vue.createApp({
	components: {
		VueFooter,
		VueHeader
	}
});

app.use(router);

app.config.errorHandler = (err) => {
	console.error(`Something broke: \n${err}`);
};

app.mount('#app');

// seperate vue app for background particle effect
const particleApp = Vue.createApp();
particleApp.mount('#particle-container');

// ----- set up router -----
import Home from './pages/page-home.js';
import About from './pages/page-about.js';
import Portfolio from './pages/page-portfolio.js';
import Sandbox from './pages/page-sandbox.js';
import Contact from './pages/page-contact.js';

const routes = [
	{ path: '/', component: Home },
	{ path: '/about', component: About },
	{ path: '/portfolio', component: Portfolio },
	{ path: '/sandbox', component: Sandbox },
	{ path: '/contact', component: Contact }
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
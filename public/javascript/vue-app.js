
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

const vueApp = Vue.createApp({
	components: {
		VueFooter,
		VueHeader
	},
	data() {
		return {
			serverError: false
		}
	},
	computed: {
		headerMargins() {
			if (this.serverError) 
				return { contentWrapper: '100px', header: '50px' };
			else 
				return { contentWrapper: '50px', header: '0px' };
		}
	},
	methods: {
		pingServer(initialPing) {
			let self = this;
			let req = new Request('/api/ping', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ request: 'ping', initialPing })
			});
			fetch(req)
			.then(res => {
				if (res.ok) {
					res.json().then(json => {
						if (json.response === 'pong') console.log(json);
						else {
							self.serverError = true;
							console.error(json);
						}
					});
				}
				else {
					self.serverError = true;
					console.error(res);
				}
			}).catch(err => {
				self.serverError = true;
				console.error(err)
			});
			setTimeout(() => self.pingServer(), 180000);
		}
	},
	mounted() {
		setTimeout(() => this.pingServer(true), 5000);
	}
});

vueApp.use(router);

vueApp.config.errorHandler = (err) => {
	console.error(`Something broke: \n${err}`);
};

vueApp.mount('#app');

// seperate vue app for background particle effect
const particleApp = Vue.createApp();
particleApp.mount('#particle-container');
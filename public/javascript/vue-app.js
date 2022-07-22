import footer from './components/footer.js';
import header from './components/header.js';
import Home from './components/page-home.js';

const routes = [
	{ path: '/', component: Home }
];

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes: routes
});

const app = Vue.createApp({})

app.use(router)

app.config.errorHandler = (err) => {
	console.error(`Something broke: \n${err}`);
};

app.mount('#app')

// vue app only for backgroun particle effect
const particleApp = Vue.createApp();
particleApp.mount('#particle-container');
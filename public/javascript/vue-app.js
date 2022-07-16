import root from './vue-root.js';
import footer from './components/footer.js';
import header from './components/header.js';

const app = Vue.createApp(root);

app.component('app-footer', footer)
	.component('app-header', header)

app.config.errorHandler = (err) => {
	console.error(`Something broke: \n${err}`);
};

app.mount('#app')

// vue app only for backgroun particle effect
const particleApp = Vue.createApp();
particleApp.mount('#particle-container');
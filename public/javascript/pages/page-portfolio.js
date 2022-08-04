import PortfolioProject from '../components/vue-portfolio-project.js';

export default {
	name: 'PortfolioPage',
	components: {
		PortfolioProject
	},
	template: 
		`<div class="header-divider"></div>
		<div class="container-fluid index-title">
			<div class="row">
				<div class="col">
					<div class="pad-1-top">
						<h1 class="display-6 accent">Portfolio And Projects</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6 col-lg-4"
					v-for="(project, index) in projects" :key="project._id">
					<portfolio-project 
						:project="project"
						class="portfolio-project-container">
					</portfolio-project>
				</div>
			</div>
			<div class="row">
				<div class="col">
				
				</div>
			</div>
		</div>`,
	data() {
		return {
			projects: []
		}
	},
	computed: {

	},
	methods: {
		getProjects() {
			let request = new Request('/api/get-projects', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' }
			});
			let self = this;
			fetch(request)
			.then(response => {
				if (response.ok) {
					response.json().then(json => self.projects = [...json]);
				}
				else console.error(response);
			}).catch(err => console.error(err));
		}
	},
	mounted() {
		this.getProjects();
	}
}
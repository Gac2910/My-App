export default {
	name: 'PortfolioProject',
	props: {
		project: {
			type: Object,
			default: {
				description: 'Project Description...'
			},
		}
	},
	components: {

	},
	template: 
		`<div>
			<h4 class="accent">{{ project.title }}</h4>
			<p class="theme mb-0">{{ project.category }}</p>
			<div style="font-size:65%">
				<p class="mb-1">{{ project.description }}</p>
				<p class="theme mb-0">Completed: {{ project.date }}</p>
				<p class="theme mb-0">
					<a :href="project.link" target="_blank">
						<i class="fa fa-github" aria-hidden="true"></i> 
						GitHub Repo
					</a>
				</p>
			</div>
			
		</div>`,
	data() {
		return {

		}
	},
	computed: {

	},
	methods: {

	},
	mounted() {
		
	}
}
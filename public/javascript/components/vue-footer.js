export default {
	name: 'VueFooter',
	template: 
		`<div class="container-fluid" id="flying-footer-content">
			<div class="row">
				<div class="col-4">
					<a href="#">
						<span>
							<i class="fa fa-download" aria-hidden="true"></i> 
							Resume
						</span>
					</a>
				</div>
				<div class="col-4">
					<p>{{ todaysDate }}</p>
				</div>
				<div class="col-4">
					<a :href="gitLink" target="_blank">
						<span>
							<i class="fa fa-github" aria-hidden="true"></i> 
							GitHub Link
						</span>
					</a>
				</div>
			</div>
		</div>`
	,
	data() {
		return {
			gitLink: 'https://github.com/Gac2910'
		}
	},
	computed: {
		todaysDate() {
			let date = new Date();
			return date.toDateString()
		}
	},
	mounted() {
		
	}
}
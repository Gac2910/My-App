export default {
	name: 'app-footer',
	template: 
		`<div class="container-fluid" id="flying-footer-content">
			<div class="row">
				<div class="col-4">
					<p>{{ todayDate }}</p>
				</div>
				<div class="col-4">
					<p>{{ todayDate }}</p>
				</div>
				<div class="col-4">
					<p>{{ todayDate }}</p>
				</div>
			</div>
		</div>`
	,
	data() {
		return {

		}
	},
	computed: {
		todayDate() {
			let date = new Date();
			return date.toDateString()
		}
	},
	mounted() {
		
	}
}
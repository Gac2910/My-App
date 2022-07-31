export default {
	name: 'SandboxPage',
	template: 
		`<div class="header-divider"></div>
		<div class="container-fluid index-title">
			<div class="row">
				<div class="col">
					<div class="pad-1-top">
						<h1 class="display-6 accent">Sandbox Page</h1>
						<h1 class="display-2 theme">Under Construction</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<p>
						<button class="blue-btn" @click="manualPing()" :disabled="pingMessage != 'Ping Server'">{{ pingMessage }}</button>
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col">
				
				</div>
			</div>
		</div>`,
	data() {
		return {
			pingMessage: 'Ping Server',
		}
	},
	computed: {

	},
	methods: {
		togglePingMessage(success) {
			if (success) {
				this.pingMessage = 'Ping Successful';
				setTimeout(() => {
					this.pingMessage = 'Ping Server';
				}, 3000);
			}
			else {
				this.pingMessage = 'Ping Failed';
				setTimeout(() => {
					this.pingMessage = 'Ping Server';
				}, 3000);
			}
		},
		manualPing() {

			let request = new Request('/api/ping', {
				method: 'post',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ping: true})
			});
			let self = this;
			fetch(request)
			.then(response => {
				if (response.ok) {
					response.json().then(json => {
						if (json.pong) {
							self.togglePingMessage(true);
							console.log(json);
						}
						else {
							self.togglePingMessage(false);
							console.error(json);
						}
					});
				}
				else {
					self.togglePingMessage(false);
					console.error(response);
				}
			}).catch(err => {
				self.togglePingMessage(false);
				console.error(err)
			});
		}
	},
	mounted() {
		
	}
}
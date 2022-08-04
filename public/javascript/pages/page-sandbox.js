export default {
	name: 'SandboxPage',
	components: {
		
	},
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
		togglePingMessage(success, time) {
			if (success) {
				this.pingMessage = `Ping Successful ~ ${time.toFixed(0)} ms`;
				setTimeout(() => {
					this.pingMessage = `Ping Server`;
				}, 3000);
			}
			else {
				this.pingMessage = `Ping Failed ~ ${time.toFixed(0)} ms`;
				setTimeout(() => {
					this.pingMessage = `Ping Server`;
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
			let start = window.performance.now();
			fetch(request)
			.then(response => {
				let time = window.performance.now() - start;
				if (response.ok) {
					response.json().then(json => {
						if (json.pong) {
							self.togglePingMessage(true, time);
							console.log(json);
						}
						else {
							self.togglePingMessage(false, time);
							console.error(json);
						}
					});
				}
				else {
					self.togglePingMessage(false, time);
					console.error(response);
				}
			}).catch(err => {
				let time = window.performance.now() - start;
				self.togglePingMessage(false, time);
				console.error(err);
			});
		}
	},
	mounted() {
		
	}
}
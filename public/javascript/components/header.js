export default {
	name: 'app-header',
	template: 
		`<div class="container-fluid" id="nav-header">
			<div class="row pad-3">
				<div class="col">

					<div v-if="navIsHidden" class="vert-align">
						<button id="side-menu-btn" @click="toggleSideMenu()"><i class="fa fa-bars"></i></button>
						<div id="side-menu"></div>
					</div>
					<div v-else class="vert-align">
						<button class="nav">Home</button>
						<button class="nav">About</button>
						<button class="nav">Portfolio</button>
						<button class="nav">Sandbox</button>
						<button class="nav">Contact</button>
					</div>
				</div>
			</div>
		</div>`
	,
	data() {
		return {
			navIsHidden: false,
			sideMenuIsHidden: true,
		}
	},
	methods: {
		hideNavBar() {
			this.navIsHidden = true;
		},
		openNavBar() {
			this.navIsHidden = false;
		},
		toggleSideMenu() {
			if (!this.navIsHidden) return;
			let sideMenu = document.querySelector('#side-menu');
			if (this.sideMenuIsHidden) {
				sideMenu.classList.add('show-side-menu');
				this.sideMenuIsHidden = false;
			}
			else {
				sideMenu.classList.remove('show-side-menu');
				this.sideMenuIsHidden = true;
			}
		}
	},
	mounted() {
		if (document.documentElement.clientWidth <= 720) {
			this.hideNavBar();
		}
		let self = this;
		if(window.attachEvent) {
			window.attachEvent('onresize', () => {
				if (document.documentElement.clientWidth <= 720 && !self.navIsHidden) {
					self.hideNavBar();
				}
				else if (document.documentElement.clientWidth > 720 && self.navIsHidden) {
					self.openNavBar();
				}
			});
		}
		else if(window.addEventListener) {
			window.addEventListener('resize', function() {
				if (document.documentElement.clientWidth <= 720 && !self.navIsHidden) {
					self.hideNavBar();
				}
				else if (document.documentElement.clientWidth > 720 && self.navIsHidden) {
					self.openNavBar();
				}
			}, true);
		}
	}
}
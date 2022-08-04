export default {
	name: 'VueHeader',
	template: 
		`<div class="container-fluid" id="nav-header">
			<div class="row pad-3">
				<div class="col">
					<div v-if="navIsHidden" class="vert-align">
						<button id="side-menu-btn" @click="toggleSideMenu()"><i class="fa fa-bars"></i></button>
						<span 
							style="font-size:125%;font-weight:300;float:right;letter-spacing:2px;cursor:pointer"
							@click="() => window.location.reload(false)">
							{{ currentPage }}
						</span>
						<div id="side-menu">
							<button id="side-menu-btn-close" @click="toggleSideMenu()"><i class="fa fa-bars"></i></button>
							<router-link to="/" class="nav" @click="pageChange('Home')">Home</router-link>
							<router-link to="/about" class="nav" @click="pageChange('About')">About</router-link>
							<router-link to="/portfolio" class="nav" @click="pageChange('Portfolio')">Portfolio</router-link>
							<router-link to="/sandbox" class="nav" @click="pageChange('Sandbox')">Sandbox</router-link>
							<router-link to="/contact" class="nav" @click="pageChange('Contact')">Contact</router-link>
						</div>
					</div>
					<div v-else>
						<router-link to="/" class="nav">Home</router-link>
						<router-link to="/about" class="nav">About</router-link>
						<router-link to="/portfolio" class="nav">Portfolio</router-link>
						<router-link to="/sandbox" class="nav">Sandbox</router-link>
						<router-link to="/contact" class="nav">Contact</router-link>
					</div>
				</div>
			</div>
		</div>`
	,
	data() {
		return {
			navIsHidden: false,
			sideMenuIsHidden: true,
			headerScrollStyle: false,
			currentPage: 'Home',
			window
		}
	},
	methods: {
		pageChange(pageName) {
			this.currentPage = pageName;
			this.toggleSideMenu();
		},
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
		document.addEventListener('DOMContentLoaded', () => {
			// get current page
			switch (this.$router.currentRoute._rawValue.fullPath) {
				case "/": this.currentPage = 'Home'; break;
				case "/about": this.currentPage = 'About'; break;
				case "/portfolio": this.currentPage = 'Portfolio'; break;
				case "/sandbox": this.currentPage = 'Sandbox'; break;
				case "/contact": this.currentPage = 'Contact'; break;
				default: this.currentPage = 'Home'; break;
			}

			// set up navigation menus
			if (document.documentElement.clientWidth <= 720) {
				this.hideNavBar(); // if on mobile, hide nav bar
			}
			let self = this;
			if(window.attachEvent) { // for older browsers
				window.attachEvent('onresize', () => {
					if (document.documentElement.clientWidth <= 720 && !self.navIsHidden) {
						self.hideNavBar();
					}
					else if (document.documentElement.clientWidth > 720 && self.navIsHidden) {
						self.openNavBar();
					}
				});
			}
			else if(window.addEventListener) { // for modern browsers
				window.addEventListener('resize', function() {
					if (document.documentElement.clientWidth <= 720 && !self.navIsHidden) {
						self.hideNavBar();
					}
					else if (document.documentElement.clientWidth > 720 && self.navIsHidden) {
						self.openNavBar();
					}
				}, true);
			}

			// add event listener for scrolling to add styles to navigation header
			window.addEventListener('scroll', function() {
				let scrollPos = document.documentElement.scrollTop;
				if (scrollPos > 0 && !self.headerScrollStyle) {
					self.headerScrollStyle = true;
					document.querySelector('#nav-header').classList.add('opaque-nav');
					document.querySelector('.header-divider').style.visibility = 'hidden';
				}
				else if (scrollPos <= 0 && self.headerScrollStyle) {
					self.headerScrollStyle = false;
					document.querySelector('#nav-header').classList.remove('opaque-nav');
					document.querySelector('.header-divider').style.visibility = 'visible';
				}
			});
		});
	}
}
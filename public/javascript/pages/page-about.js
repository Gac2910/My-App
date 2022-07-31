export default {
	name: 'AboutPage',
	template: 
		`<div class="header-divider"></div>
		<div class="container index-title">
			<div class="row">
				<div class="col">
					<div class="pad-1-top">
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div id="portrait-container">
						<img src="/portrait.jpg" height="400" class="pretty-img">
					</div>
				</div>
				<div class="col-md-6">
					<h1 class="display-6 accent">About Me</h1>
					<p style="font-size:75%">
						&emsp; My name is Guillermo Castillo. I was raised in South West Florida, my family consists of a mom, a sister and 2 cats.
						There is only so much you can say in a paragraph, but in a nutshell i'm a very curious person; since I was young
						I enjoyed learning about aircrafts, engines, electronics, astronomy, nature, history, music and more.
						I marveled at how the world and the things we've created work. I would ask myself 'why' and 'how' and just had to find the answer.
						Overall, learning became easier and enjoyable. When I reached high school I was the first in the history of
						Lorenzo Walker Technical High School to pass the ASE A6 Electrical and Electronics exam for automotive service. 
						I then started the Database and Programming technical program, and I was able to complete it early and start working at the local school district.
						<br>
						&emsp; Today I strongly believe that apathy is a dangerous and slippery slope; while curiosity is the driving force behind growth.
						It is what allowed me to better myself in and out of school.
						I have found joy in being able to create projects and solutions and to embrace the challenges that come with it.
					</p>
				</div>
			</div>
			<div class="row flex-column-reverse flex-md-row">
				<div class="col-md-7">
					<h3 class="display-6 accent">About This Page</h3>
					<p style="font-size:75%">
						This is a personal page that is home to my online portfolio and personal projects.
						This is where I test ideas and practice my skills. This is a single page application using the MEVN (MongoDB, Express, Vue, Node) development stack.
						I enjoy using Vue for it's progressive and lightweight nature. Vue is being used without a build step to work more easily with Heroku.
						MongoDB is also preferable because the data used is not relational and the BSON format allows for more flexibility in a personal project such as this.
						The portfolio tab contains my online portfolio and resume that I update regularly.
						The sandbox tab is my less 'professional' section where I test and implement project ideas.
						And of course the contact tab allows for anyone to reach out to me with inquires or issues with the web page.
					</p>
				</div>
				<div class="col-md-5">
					<img src="/mevn.jpg" height="250" class="pretty-img" style="margin-top:40px">
				</div>
			</div>
		</div>`,
	data() {
		return {

		}
	},
	computed: {

	},
	mounted() {
		
	}
}
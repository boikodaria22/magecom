<template lang="pug">
	#main
		//- CustomCursor

		Navbar(v-show="isNavShowing")

		Hero(:showing="{isShowing, isSubTitleShowing}")

		WhatWeDo(:isShowing="isShowing")

		Features

		CaseStudies

		Blog

		Testimonials

		Footer

</template>

<script>
import Jelly from "jelly.js";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import Features from "../components/Features";
// import DriveBusinessOnline from "../components/DriveBusinessOnline";
import CaseStudies from "../components/CaseStudies";
import Blog from "../components/Blog";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
// import CustomCursor from "../components/CustomCursor"


export default {
	name: "Main",
	components: {
		Navbar,
		Hero,
		WhatWeDo,
		Features,
		CaseStudies,
		Blog,
		Testimonials,
		Footer,
		// CustomCursor
		// DriveBusinessOnline
	},

	data() {
		return {
			isSubTitleShowing: false,
			isShowing: false,
			isNavShowing: false,
		};
	},
	methods: {
		showUpOrder() {
			setTimeout(() => {
				this.isSubTitleShowing = true;
			}, 300);

			setTimeout(() => {
				this.isShowing = true;
			}, 2000);

			setTimeout(() => {
				this.isNavShowing = true;
			}, 1400);

			setTimeout(() => {
				this.isNavUnfixed = true;
			}, 4000)

			setTimeout(() => {
				this.jellyButtonInit();
			}, 3000);

			// setTimeout(() => {
			//   document.getElementById('title').style.cssText = "color: #000; background: url('https://lh4.googleusercontent.com/lefJyT5IFfdMw86Ok_Iib0iHMbbrtR5JKLxHsrk0rMFhNr2ywtG-w7RO7tKf2coQPW55Feh1iuvIrFCAODmlhiDwtImvVxH83SkLj7e70gV0ydbRd6vcMzw7SPyP3k9wLynBSXKU7Q'); -webkit-text-fill-color: transparent;-webkit-background-clip: text;"
			// }, 1400);
		},
		jellyButtonInit() {
			let options = {
				paths: "#jelly", // Shape we want to draw
				pointsNumber: 10, // Number of points
				maxDistance: 70, // Max distance among points
				color: "#EC5C2B",
				centroid: ".centroid-text", // Element to move accordingly with the centroid of the shape
				// debug: true               // Uncomment this to see the points
			};

			/* Initializing jelly */

			new Jelly(".jelly-canvas", options);

			document.getElementById("get-quote").style.cssText =
				"visibility: visible";

			// console.log(jelly);
		},
		intersectionObserverAnimation() {
			//находим таргеты
			// const lines = document.querySelectorAll(".line");
			// const conferenceVid = document.querySelectorAll('.conference')
			// const whatWeDoContainer = document.querySelectorAll(".what-we-do-container")
			// const whatWeDoTitle = document.querySelectorAll(".what-we-do-title")
			// const whatWeDoText = document.querySelectorAll(".what-we-do-text")
			// const play = document.querySelectorAll(".play")
			// const features = document.querySelectorAll(".features-text-and-button")
			// const mainTitle = document.querySelectorAll(".main-title")
			// const actionColumn = document.querySelectorAll(".action-column")

			//TODO создать массив элеметов, затем для каждого выполнить поиск в ДОМе, и запустить обсерверы

			const elements = [
				'line',
				'conference',
				'what-we-do-container',
				'what-we-do-title',
				'what-we-do-text',
				'play',
				'features-text-and-button',
				'main-title',
				'fade-in'
			]

			//массив найденных элементов
			let selectedElements = []

			//находим элементы из массива в ДОМе
			elements.forEach(element => {
				selectedElements.push(document.querySelectorAll("." + element))
			})

			const options = {
				root: null,
				rootMargin: "-200px 0px",
				threshold: 0
			};

			//забираем таргеты и выполняем колбэк
			const observer = new IntersectionObserver(entries => {
				entries.forEach(entry => {
					if (entry.intersectionRatio > 0) {
						// console.log(entry);
						// console.log(entry.isIntersecting);
						// console.log(entry.intersectionRatio);
						// console.log("intersecting");

						// document.getElementById('line').style.cssText = "-webkit-animation line_r_animation 3s infinite; animation line_r_animation 3s infinite"


						// if(entry.target.classList.contains("line"))
						//   entry.target.classList.add("line-anim");

						elements.forEach(el => {
							if(entry.target.classList.contains(el))
								entry.target.classList.add(el + "-anim")
						})

						observer.unobserve(entry.target)
					}
				});
			}, options);

			//добавляем таргеты в обсервер
			// lines.forEach(target => observer.observe(target))
			// conferenceVid.forEach(target => observer.observe(target))
			// whatWeDoContainer.forEach(target => observer.observe(target))
			// whatWeDoTitle.forEach(target => observer.observe(target))
			// whatWeDoText.forEach(target => observer.observe(target))
			// play.forEach(target => observer.observe(target))
			// features.forEach(target => observer.observe(target))
			// mainTitle.forEach(target => observer.observe(target))
			// actionColumn.forEach(target => observer.observe(target))
			selectedElements.forEach(se => {
				se.forEach(target => observer.observe(target))
			})
		},
		perspectiveHover(el, intensity) {
			var self = this,
					parents = document.querySelectorAll(".js-perspective"),
					cards = document.querySelectorAll(".perspective-card")

			this.perspective = function(e, el) {
				var elX = el.offsetLeft,
						elY = el.offsetTop,
						elWidth = el.offsetWidth,
						elHeight = el.offsetHeight;

				var mouseX = e.clientX,
						mouseY = e.clientY;

				var rotateY = -(
						((elWidth / 2 - (mouseX - elX)) / (elWidth / 2)) *
						intensity
					),
					rotateX = ((elHeight / 2 - (mouseY - elY)) / (elHeight / 2)) * intensity;

				el.style.transform =
					"rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

				// console.log('(' + rotateX + ', ' + rotateY + ')')
				// console.log(elX, elY, elWidth, elHeight);
				// console.log(mouseX, mouseY);
			};

			parents.forEach((parent) => parent.addEventListener("mousemove", function(e) {
				if (e.target.classList.contains("js-perspective-card")) {
					self.perspective(e, e.target);
				}
			}));

			this.reset = function(el) {
				el.style.transform = "";
			};

			cards.forEach((card) => card.addEventListener("mouseleave", function() {
				self.reset(this)
			}))
		}
	},
	created() {
		this.showUpOrder();
		// this.intersectionObserverAnimation();
	},
	mounted() {
		this.intersectionObserverAnimation();
		this.perspectiveHover(".js-perspective-card", 5);
	}
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap');
@import '../styles/modal.styl';
@import '../styles/main.styl';
@import '../styles/navbar.styl';
@import '../styles/hero.styl';
@import '../styles/what-we-do.styl';
@import '../styles/features.styl';
@import '../styles/case-studies.styl';
@import '../styles/blog.styl';
@import '../styles/testimonials.styl';
@import '../styles/footer.styl';

#main
	cursor none

@media screen and (max-height: 750px)
	.what-we-do-container
		margin-top 250px

	.hero-container .water.text
		font-size 11rem

	// #hero-title
	//   margin-top -50px
	//   height 100px

	.hero-second-title
		font-size 8rem

@media screen and (max-width: 450px)
	//MAIN
	.main-title
		height 50px
		font-size 2.8rem
		bottom -35px

	//HERO
	.hero-container
		height auto

	.hero-container .water.text
		font-size 5rem

	.hero-second-title
		font-size 4rem

	.after-title-hero-container
		position relative

	.quote
		width 100%
		margin-left -15px
		margin-top 200px

	.sns
		margin-top 0

	.jelly-container
		position relative

	//WHAT WE DO

	.what-we-do-container
		height auto

		.first-title
			width 100%

	.conference
		height auto
		width 90%

	.what-we-do-title
		margin-top 100px

	//CASE STUDIES

	.case-studies-row
		.main-title
			height 40px
			font-size 2.5rem
			bottom -35px

	//BLOG

	.subscribe-form
		margin-top 50px

	//TESTIMONIALS

	.testimonials-table
		padding 0

	.testimonials-info
		margin-top 50px


</style>
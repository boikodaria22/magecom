<template lang="pug">
#careers
	Navbar(:route="$route.path")

	//title
	b-container.title-container
		b-row
			b-col
				.title-text-wrapper
					.first-title.main-title If you feel that
				.title-text-wrapper
					.first-title.main-title we match together perfectly
		b-row
			b-col(offset-lg="3")
				.title-text-wrapper
					.first-title.main-title ————
						span(style="color: #EC5C2B;") send us your CV
		b-row
			b-col(sm="12" md="12" lg="3")
				.button(@click="$router.push({path: '', hash: '#vacancies'})")
					.button-text Vacancies
					.button-bar
						img.button_image(src="@/assets/arrow-button.svg", alt="")
						.button-text Vacancies
			b-col(sm="12" md="12" lg="9")
				.title-text-wrapper
					.first-title.main-title & join our team!

	//hero image
	b-container.hero-image-container
		b-row
			b-col
				.hero-image-wrapper
					.hero-image

	//who we are
	b-container.who-we-are-container
		b-row
			b-col.numbers-column(sm="12" md="12" lg="6")
				b-container
					b-row
						b-col(sm="12" md="12" lg="6" v-for="(number, index) in numbers" :key="index")
							.numbers-cell
								.number
									ICountUp(
										v-if="toggleCount"
										:endVal="number.value"
									)
									span(v-else) 0
								.third-title {{ number.title }}

			b-col(sm="12" md="12" lg="6")
				.title-text-wrapper
					.first-title.main-title Who we are
				.text.fade-in We do everything in the best possible way. That’s why our team consists of skilled professionals with 50+ certifications. We have eight years of experience in ecommerce and know how to deal with it the best. We put forward demands for writing code and work according to our processes for a high-quality code review delivery. <br><br> Also, we spend a lot of time learning the latest technologies to stay at the top. Quality matters and we prove it by the work we do.
				.third-title.fade-in FACEBOOK / INSTAGRAM

	//our events
	b-container.our-events-container(fluid)
		b-row
			b-col(sm="12" md="12" lg="3" offset-lg="1")
				.title-text-wrapper
					.first-title.main-title Our
				.title-text-wrapper
					.first-title.main-title events

				.button
					.button-text View all events
					.button-bar
						img.button_image(src="@/assets/arrow-button.svg", alt="")
						.button-text View all events
			b-col(sm="12" md="12" lg="5")
				.text.fade-in Magento platform has a community of nearly 150,000 developers that stretch the globe. Within this ecosystem, Magento developers inform, educate, and support each other. <br><br> We were the first company in Kharkiv, one of the IT-centers of Ukraine, to have launched quarterly Magento Meetup & Contribution Days back in 2017. We still hold meetups twice a year with a mission to help evolve the Magento community.
			b-col(sm="12" md="12" lg="3" style="margin: 0; padding: 0; position: relative")
				.our-events-video
				img.play-button(src="@/assets/play-button.svg" alt="")

	//what we offer
	b-container.what-we-offer-container(fluid)
		b-row
			b-col(sm="12" md="12" lg="3" offset-lg="2")
				.title-text-wrapper
					.first-title.main-title What
				.title-text-wrapper
					.first-title.main-title we offer
		//1
		b-row.what-we-offer-item-row
			b-col(sm="12" md="12" lg="3" offset-lg="2")
				.what-we-offer-image-wrapper
					.what-we-offer-image(:style="{'background': 'url(' + whatWeOfferPics[0] + ') center no-repeat'}")

			b-col(sm="12" md="12" lg="2")
				.line
				.what-we-offer-item-title
					.second-title.fade-in Team that really rocks
		//2
		b-row.what-we-offer-item-row
			b-col(sm="12" md="12" lg="3" offset-lg="4")
				.what-we-offer-image-wrapper
					.what-we-offer-image(:style="{'background': 'url(' + whatWeOfferPics[1] + ') center no-repeat'}")

			b-col(sm="12" md="12" lg="2")
				.line
				.what-we-offer-item-title
					.second-title.fade-in Competitive compensation depending on skills and experience level
		//3
		b-row.what-we-offer-item-row
			b-col(sm="12" md="12" lg="2" offset-lg="1")
				.line
				.what-we-offer-item-title
					.second-title.fade-in Various projects and tasks which help you to grow professionally and advance your career

			b-col(sm="12" md="12" lg="3")
				.what-we-offer-image-wrapper
					.what-we-offer-image(:style="{'background': 'url(' + whatWeOfferPics[2] + ') center no-repeat'}")

		//4
		b-row.what-we-offer-item-row
			b-col(sm="12" md="12" lg="2" offset-lg="5")
				.line
				.what-we-offer-item-title
					.second-title.fade-in Flexible working hours and approach to work

			b-col(sm="12" md="12" lg="3")
				.what-we-offer-image-wrapper
					.what-we-offer-image(:style="{'background': 'url(' + whatWeOfferPics[3] + ') center no-repeat'}")

		//5
		b-row.what-we-offer-item-row
			b-col(sm="12" md="12" lg="3" offset-lg="2")
				.what-we-offer-image-wrapper
					.what-we-offer-image(:style="{'background': 'url(' + whatWeOfferPics[4] + ') center no-repeat'}")

			b-col(sm="12" md="12" lg="2" )
				.line
				.what-we-offer-item-title
					.second-title.fade-in Opportunities not only to work effectively but also to relax — entertaining corporate events and sports activities

		//6
		b-row.what-we-offer-item-row
			b-col(sm="12" md="12" lg="3" offset-lg="4")
				.what-we-offer-image-wrapper
					.what-we-offer-image(:style="{'background': 'url(' + whatWeOfferPics[5] + ') center no-repeat'}")

			b-col(sm="12" md="12" lg="2" )
				.line
				.what-we-offer-item-title
					.second-title.fade-in Certifications at the company’s expense and regular internal events for professional development


	//we are looking for
	b-container.vacancies-container#vacancies
		b-row
			.title-text-wrapper
				.first-title.main-title We are looking for
		b-row.vacancy-row(
			v-for="vacancy, index in vacancies"
			:key="index"
			@mouseover="vacancyHover = index"
			@mouseleave="vacancyHover = false"
			@click="toVacancy(vacancy.position)"
		)
			.line(v-show="index === 0")
			b-col.info(sm="12" md="12" lg="12" style="margin: 0; padding: 0")
				.vacancy-back
					.text {{ vacancy.city }}
					.second-title {{ vacancy.position }}
					img(:src="vacancyHover === index ? require('../assets/arrow-right-white.svg') : require('../assets/arrow-right.svg')")

					.vacancy-back-bar(
						:class="vacancyHover === index ? 'vacancy-back-bar-hover' : 'vacancy-back-bar-not-hover'"
					)
						.text(v-if="vacancyHover === index") {{ vacancy.city }}
						.second-title(v-if="vacancyHover === index") {{ vacancy.position }}
						//- img(src="../assets/arrow-right-white.svg")
			.line

	//recruiters
	b-container.recruiters-container
		b-row
			b-col(offset-lg="4")
				.title-text-wrapper
				.first-title.main-title Recruiters
		b-row.contacts
			b-col(sm="12" md="12" lg="3" offset-lg="2")
				.contacts-image-wrapper
					.contacts-image(:style="{'background': 'url(' + require('../assets/svetlana.png') + ') center no-repeat'}")

				.fade-in
					.second-title Svetlana Dorofeeva
					.text Lead Recruiter
					.line
					.text.contact-title Email
					.third-title vmamsyk@magecom.net
					.text.contact-title Skype
					.third-title vladamamsik_1
					.text.contact-title Telegram
					.third-title @Vlada_Magecom

			b-col(sm="12" md="12" lg="3" offset-lg="2")
				.contacts-image-wrapper
					.contacts-image(:style="{'background': 'url(' + require('../assets/vlada.png') + ') center no-repeat'}")

				.fade-in
					.second-title Vlada Mamsyk
					.text Recruiter
					.line
					.text.contact-title Email
					.third-title sdorofieieva@magecom.net
					.text.contact-title Skype
					.third-title svetlana.dorofeeva777
					.text.contact-title Telegram
					.third-title @Svetik_Dorofeeva

	Footer

</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ICountUp from 'vue-countup-v2';

export default {
	name: 'Careers',

	components: {
		Navbar,
		ICountUp,
		Footer,
	},

	data () {
		return {
			toggleCount: false,
			numbers: [
				{
					title: 'Certified Specialists',
					value: 50
				},
				{
					title: 'Ecommerce Solutions',
					value: 350
				},
				{
					title: 'Development Experts',
					value: 90
				},
				{
					title: 'Years of Experience',
					value: 8
				},
			],
			whatWeOfferPics: [
				require("../assets/sport.png"),
				require("../assets/rage.png"),
				require("../assets/beatles.png"),
				require("../assets/in-garden.png"),
				require("../assets/kickball.png"),
				require("../assets/speaker.png"),
			],
			vacancyHover: false,
			vacancies: [
				{
					position: "Team Lead Frontend Magento Developer",
					city: "Kharkiv"
				},
				{
					position: "Magento Backend Developer",
					city: "Kharkiv"
				},
				{
					position: "DevOps Engineer",
					city: "Kharkiv"
				},
			],
			// showWhiteText: true
		}
	},
	methods: {
		intersectionObserverAnimation() {
			// document.getElementById("navbar").scrollIntoView();

			// setTimeout(() => {
			// 	instance.reset()
			// }, 3000)

			const elements = [
				"line",
				"main-title",
				"fade-in",
				"hero-image",
				"hero-image-wrapper",
				"number",
				"our-events-video",
				"play-button",
				"what-we-offer-image-wrapper",
				"what-we-offer-image",
				"contacts-image-wrapper",
				"contacts-image",
			];
			//массив найденных элементов
			let selectedElements = [];
			//находим элементы из массива в ДОМе
			elements.forEach(element => {
				selectedElements.push(document.querySelectorAll("." + element));
			});
			const options = {
				root: null,
				rootMargin: "-150px 0px",
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
						if (entry.target.classList.contains('number')) {
							this.toggleCount = true
							// console.log(this.toggleCount);
						}

						elements.forEach(el => {
							if (entry.target.classList.contains(el))
								entry.target.classList.add(el + "-anim");
						});
					}
				});
			}, options);

			selectedElements.forEach(se => {
				se.forEach(target => observer.observe(target));
			});
		},
		toVacancy(position) {
			let dashedPosition = position.replace(/\s+/g, "-").toLowerCase();

			this.$router.push("/" + 'careers' + "/" + dashedPosition)
		},
	},
	computed: {
		// showWhiteText() {
		// 	const bar

		// 	return bar.classList.contains('vacancy-back-bar-not-hover') ? false : true
		// }
		// vacancyBackBarWidth() {
		// 	let backBar = document.querySelectorAll(".vacancy-back-bar-hover")

		// 	return backBar
		// }
	},
	mounted() {
		this.intersectionObserverAnimation();
	}
}
</script>

<style lang="stylus">
@import "../styles/careers.styl"
</style>
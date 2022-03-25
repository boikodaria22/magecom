<template lang="pug">
#vacancy 
	Navbar

	b-container.breadcrumbs-container
		b-row
			b-col
				.text(@click="$router.go(-1)") Careers
				.text {{ vacancyTitle }} 

	b-container.vacancy-info
		b-row
			b-col.fade-in(sm="12" md="12" lg="8")
				.third-title {{ vacancy.city }}
				.first-title {{ vacancy.position }}
				.text {{ vacancy.info }}
			b-col.fade-in(sm="12" md="12" lg="4")
				svg(width="1" height="1" style="position: absolute" version="1.1")
					circle(id="jelly" cx="150" cy="150" r="100")
        
				.jelly-container(@click="$router.push({path: '', hash: '#footer'})")
					//- Canvas to draw the jelly pentagon
					canvas(class="jelly-canvas")
					//- Text in the centroid of the jelly pentagon
					.centroid-container
						.centroid-text#get-quote Send <br> your <br> CV

	b-container.needs-container.fade-in
		b-row
			b-col(sm="12" md="12" lg="4" v-for="need, index in vacancy.needs" :key="index")
				.second-title {{ need.title }}
					ul
						li.text(v-for="item, index in need.list" :key="index") {{ item }}

	Footer

</template>

<script>
import Navbar from "@/components/Navbar"
import Modal from "@/components/Modal"
import Footer from "@/components/Footer"
import Jelly from "jelly.js";

export default {
	name: "Vacancy",
	components: {
		Navbar,
		Modal,
		Footer
	},

	data() {
		return {
			vacancies: [
				{
					position: "Team Lead Frontend Magento Developer",
					city: "Kharkiv",
					info: "Magecom company is looking for a professional Magento Backend Developer to join our team. We are specialized in development of e-commerce solutions on Magento platform. Our unique expertise in working with Magento and collaboration with international customers will help you to develop your skills in a friendly and family atmosphere.",
					needs: [
						{
							title: "Requirements",
							list: [
								"2+ years of backend web-development experience;",
								"1+ year of Magento web-development experience;",
								"Working experience with Magento 2 platform and PHP;",
								"Knowledge of OOP, MySQL, basic design patterns;",
								"Basic knowledge of HTML, CSS, JS, experience with Linux;",
								"Experience with Git and development tools;",
								"English – Intermediate or higher."
							]
						},
						{
							title: "Responsibilities",
							list: [
								"Web-development on Magento platform;",
								"Technical project requirements analysis, tasks estimation;",
								"Communication with the clients."
							]
						},
						{
							title: "Nice to have",
							list: [
								"Experience with Magento 1;",
								"Magento certification."
							]
						}
					]
				},
				{
					position: "Magento Backend Developer",
					city: "Kharkiv",
					info: "Magecom company is looking for a professional Magento Backend Developer to join our team. We are specialized in development of e-commerce solutions on Magento platform. Our unique expertise in working with Magento and collaboration with international customers will help you to develop your skills in a friendly and family atmosphere.",
					needs: [
						{
							title: "Requirements",
							list: [
								"2+ years of backend web-development experience;",
								"1+ year of Magento web-development experience;",
								"Working experience with Magento 2 platform and PHP;",
								"Knowledge of OOP, MySQL, basic design patterns;",
								"Basic knowledge of HTML, CSS, JS, experience with Linux;",
								"Experience with Git and development tools;",
								"English – Intermediate or higher."
							]
						},
						{
							title: "Responsibilities",
							list: [
								"Web-development on Magento platform;",
								"Technical project requirements analysis, tasks estimation;",
								"Communication with the clients."
							]
						},
						{
							title: "Nice to have",
							list: [
								"Experience with Magento 1;",
								"Magento certification."
							]
						}
					]
				},
				{
					position: "DevOps Engineer",
					city: "Kharkiv",
					info: "Magecom company is looking for a professional Magento Backend Developer to join our team. We are specialized in development of e-commerce solutions on Magento platform. Our unique expertise in working with Magento and collaboration with international customers will help you to develop your skills in a friendly and family atmosphere.",
					needs: [
						{
							title: "Requirements",
							list: [
								"2+ years of backend web-development experience;",
								"1+ year of Magento web-development experience;",
								"Working experience with Magento 2 platform and PHP;",
								"Knowledge of OOP, MySQL, basic design patterns;",
								"Basic knowledge of HTML, CSS, JS, experience with Linux;",
								"Experience with Git and development tools;",
								"English – Intermediate or higher."
							]
						},
						{
							title: "Responsibilities",
							list: [
								"Web-development on Magento platform;",
								"Technical project requirements analysis, tasks estimation;",
								"Communication with the clients."
							]
						},
						{
							title: "Nice to have",
							list: [
								"Experience with Magento 1;",
								"Magento certification."
							]
						}
					]
				},
			]
		}
	},

	methods: {
		jellyButtonInit() {
			let options = {
				paths: "#jelly", // Shape we want to draw
				pointsNumber: 10, // Number of points
				maxDistance: 70, // Max distance among points
				color: "#EC5C2B",
				centroid: ".centroid-text" // Element to move accordingly with the centroid of the shape
				// debug: true               // Uncomment this to see the points
			};

			/* Initializing jelly */

			new Jelly(".jelly-canvas", options);

			document.getElementById("get-quote").style.cssText =
				"visibility: visible";

			// console.log(jelly);
		},
		intersectionObserverAnimation() {
			// document.getElementById("navbar").scrollIntoView();
			
      const elements = [
				'line',
				'main-title',
				'fade-in',
      ]

      //массив найденных элементов
      let selectedElements = []

      //находим элементы из массива в ДОМе
      elements.forEach(element => {
        selectedElements.push(document.querySelectorAll("." + element))
      })

      const options = {
        root: null,
        rootMargin: "-80px 0px",
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
            elements.forEach(el => {
              if(entry.target.classList.contains(el)) 
                entry.target.classList.add(el + "-anim")
            })
            
            observer.unobserve(entry.target)
          }
        });
      }, options);

      selectedElements.forEach(se => {
        se.forEach(target => observer.observe(target))
      })
		},
	},
	computed: {
		vacancyTitle() {
      let newVacancy = this.$route.params.vacancy.replace(/-/g, " ");

      return newVacancy
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
		},
		vacancy() {
      return this.vacancies.find(item => item.position.replace(/\s+/g, "-").toLowerCase() == this.vacancyTitle.replace(/\s+/g, "-").toLowerCase())
    }
	},
	mounted() {
		this.jellyButtonInit()
		this.intersectionObserverAnimation()
	}
}
</script>

<style lang="stylus">
@import('../styles/vacancy.styl')
</style>
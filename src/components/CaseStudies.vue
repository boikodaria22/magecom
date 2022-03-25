<template lang="pug">
.case-studies-container
	b-container(v-show="!moveEllipse")
		b-row.case-studies-row
			b-col.title-text-wrapper(sm="12" md="12" lg="9" align-self="end")
				.third-title.fade-in Case studies
				.first-title.main-title See how our clients win

			b-col.fade-in(sm="12" md="12" lg="3" align-self="end")
				.text They face different challenges that we overcome together and set new goals that we help achieve.
				.button
					.button-text VIEW ALL CASES
					.button-bar
						img.button_image(src="@/assets/eye-button.svg", alt="")
						.button-text VIEW ALL CASES
	
		.line

	//- b-container.js-perspective(style="overflow: hidden")
	//-   b-row.perspective-card-wrap
	//-     .js-perspective-card.perspective-card
	//-     .perspective-card__content
	//-       div(style="position: relative; z-index: 2") Awwwwww yeah
	//-     .js-perspective-card.perspective-card
	//-     .perspective-card__content
	//-       div(style="position: relative; z-index: 2") Awwwwww yeah

	//:class="caseStudiesHover === index ? 'addBackground' : ''"
	//:style="caseStudiesHover === index ? {'background': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + caseStudy.pic + ') center no-repeat',} : {}"

	//case studies list	
	b-container.case-studies-list-container.js-perspective
		b-row.case-studies-list-row.perspective-card-wrap(
				v-for="(caseStudy, index) in caseStudies" 
				:key="index" 
				@mouseover="caseStudiesHover = index" 
				@mouseleave="caseStudiesHover = false"
				@click="toCase(caseStudy.title)"
				style="overflow: hidden"
			)
			.js-perspective-card.perspective-card.scale(
				:style="caseStudiesHover === index ? {'background': 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + caseStudy.pic + ') center no-repeat',} : {}"
				:class="caseStudiesHover === index ? 'scale-anim' : ''"
			)
			b-col(sm="" md="" lg="5")
				.text {{ caseStudy.title }}
				.second-title {{ caseStudy.description }}
			b-col(sm="" md="" lg="3")
				.text Region
				.third-title {{ caseStudy.region }}
				.text Industry
				.third-title {{ caseStudy.industry }}
			b-col(sm="" md="" lg="4")
				.text {{ caseStudy.text }}
			
			.line


</template>

<script>
export default {
	name: "CaseStudies",
	props: ['moveEllipse'],

	data() {
		return {
			caseStudiesHover: false,
			caseStudies: [
				{
					title: "AWS Case Study",
					description:
						"Creating A Highly Loaded Infrastructure To Carry The Capacity During Sales & Discounts",
					region: "France",
					industry: "Fashion",
					text:
						"An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.",
					pic: require("@/assets/fashion.webp")
				},
				{
					title: "Magento 2 Case Study",
					description:
						"Implementing Customizations Which Are Not Common For Default Magento 2 On A Tight Schedule",
					region: "Switzerland",
					industry: "Food & Beverages",
					text:
						"An online wine store, which offers a wide selection of wines that are produced in the company’s wineries. The product assortment is represented by 10+ product categories and 1000+ items. ",
					pic: require("@/assets/food-beverages.png")
				},
				{
					title: "Migration & Tuning Case Study",
					description:
						"Migrating From Magento 1 To Magento 2 & Implementing Extensive Customizations",
					region: "France",
					industry: "Online Education",
					text:
						"A chain of four restaurants in Paris and Lyon that organize online cooking courses in different cuisines of the world. Events and workshops can be held not only by the chefs who work in the restaurants but also by logged-in and moderated users. ",
					pic: require("@/assets/online-education.png")
				},
				{
					title: "Migration Case Study",
					description:
						"Migrating From Magento 1 To Magento 2 And Implementing Custom Features",
					region: "USA",
					industry: "Engineering & Construction",
					text:
						"An online composite products store, which offers multiple services such as initial engineering, product development, prototyping, low and high volume production. The product assortment is represented by 40+ categories and 4000+ items.",
					pic: require("@/assets/engineering.png")
				}
			],
		}
	},
	methods: {
		toCase(title) {
			let caseStudy = title.replace(/\s+/g, "-").toLowerCase()
		
			this.$router.push('case-studies' + '/' + caseStudy)
		}
	}
}
</script>

<style lang="stylus">

</style>
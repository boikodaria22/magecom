<template lang="pug">
#drive-business-online
	Navbar(v-show="true")

	Modal

	//Drive Business Online
	b-container.drive-title-container.fade-in(v-if="title === 'Drive Business Online'")
		b-row.first-row
			b-col(sm="" md="" lg="3").third-title {{ title }}
			b-col(sm="" md="" lg="9").first-title {{ feature.hero_text.first_row }}
		b-row
			b-col(sm="" md="" lg="2").first-title {{ feature.hero_text.second_row_left }}
			b-col(sm="" md="" lg="5") 
				.backdrop.water
					.text.water ecommerce
					.overlay.water
			b-col(sm="" md="" lg="5").first-title {{ feature.hero_text.second_row_right }}
		b-row
			b-col.first-title {{ feature.hero_text.third_row }}
		b-row
			b-col.first-title {{ feature.hero_text.fourth_row }}

	//Outstand!
	b-container.drive-title-container.fade-in(v-else-if="title === 'Outstand!'")
		b-row.first-row
			b-col(sm="" md="" lg="3").third-title {{ title }}
			b-col(sm="" md="" lg="9").first-title {{ feature.hero_text.first_row }}
		b-row
			b-col.first-title {{ feature.hero_text.second_row }}
		b-row
			b-col(sm="" md="" lg="4").first-title {{ feature.hero_text.third_row_left }}
			b-col(sm="" md="" lg="7") 
				.backdrop.water
					.text.water ecommerce
					.overlay.water
		b-row
			b-col.first-title {{ feature.hero_text.fourth_row }}
		b-row
			b-col.first-title {{ feature.hero_text.fifth_row }}

	//Grow Expertly
	b-container.drive-title-container.fade-in(v-else)
		b-row.first-row
			b-col(sm="" md="" lg="2").third-title {{ title }}
			b-col(sm="" md="" lg="4").first-title {{ feature.hero_text.first_row_left }}
			b-col(sm="" md="" lg="6") 
				.backdrop.water
					.text.water ecommerce
					.overlay.water
		b-row
			b-col.first-title {{ feature.hero_text.second_row }}
		b-row
			b-col.first-title {{ feature.hero_text.third_row }}


	b-container.lets-chat-container
		b-row
			.arrows-column-wrapper(sm="12" md="12" lg="6")
				.arrows-down-column
					img.arrow-down(src="@/assets/arrow-down.svg" v-for="a in 6")

        
			b-col(sm="12" md="12" lg="12")
				//- svg(width="278" height="278" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none; box-sizing: border-box; padding: 2em")
				//-   circle(id="jelly2" cx="139" cy="139" r="139" fill="#EC5C2B")
				//- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400" style="display: none">
				//-   <path class="jelly-circle-svg" d="m200 97.218 108.07 78.524-41.28 127.04h-133.58l-41.281-127.04z"/>
				//- </svg>
				svg(width="230" height="230" style="visibility: hidden" version="1.1")
					circle(id="jelly" cx="200" cy="200" r="139")
        
				.jelly-container(@click="showModal")
					//- Canvas to draw the jelly pentagon
					canvas(class="jelly-canvas")
					//- Text in the centroid of the jelly pentagon
					.centroid-container
						.centroid-text#get-quote Let's chat
	
	//solutions
	b-container.solutions-container
		b-row
			b-col.fade-in(sm="12" md="12" lg="4")
				.second-title Choose what is <br> fitting for you
				.text Tailored development solutions that will cater to the needs of your business

				svg(width="1" height="1" style="position: absolute" version="1.1")
					circle(id="jelly2" cx="200" cy="200" r="139")
        
				.jelly-container2(@click="showModal")
					//- Canvas to draw the jelly pentagon
					canvas(class="jelly-canvas2")
					//- Text in the centroid of the jelly pentagon
					.centroid-container2
						.centroid-text2#get-quote2 Let's chat

			b-col(sm="12" md="12" lg="8")
				.line
				.solutions-category(
					v-for="(solution, index) in feature.solutions" 
					:key="index" 
					@mouseover="expand = index; expandCategory(index)" 
					@mouseleave="expand = false; collapseCategory(index)"
				)
					b-container.expand-category(
						:class="expand === index ? 'expand-category-anim' : ''"
					)
						b-row.solutions-category-row
							b-col(sm="12" md="12" lg="10") 
								.first-title(
									:class="expand === index ? 'first-title-hover' : ''"
									@click="toSolution(solution.title)"
								) {{ solution.title }}
							b-col(sm="12" md="12" lg="2") 
								img.expand-collapse(
									:src="expand === index ? require('../assets/arrow-down-left-orange.svg') : require('../assets/arrow-down-left.svg')" 
									:class="expand === index ? 'expand-collapse-hover' : ''"
									@click="expand = !expand"
								)
						
						b-row.solutions-category-info
							b-col.text {{ solution.info }}
								//- img.expand-collapse(src="@/assets/arrow-right-orange.svg" alt="" v-else @click="expand = !expand")

					.line

	//how helps
	b-container.how-it-helps-container
		b-row
			b-col(sm="12" md="12" lg="3")
				.second-title.fade-in How it helps you
			b-col(sm="12" md="12" lg="9")
				b-row
					b-col.fade-in(sm="12" md="12" lg="4")
						.number 01
						.text Increase conversions and business revenue.
					b-col.fade-in(sm="12" md="12" lg="4")
						.number 02
						.text Get your ecommerce store to the next level.
					b-col.fade-in(sm="12" md="12" lg="4")
						.number 03
						.text Build challenging solutions for your business aims.
					b-col.fade-in(sm="12" md="12" lg="4")
						.number 04
						.text Make the store work stable and safe.
					b-col.fade-in(sm="12" md="12" lg="4")
						.number 05
						.text Automate your business workflow.
	

	//case studies
	.case-studies-container
		b-container
			b-row.case-studies-row
				b-col.title-text-wrapper(sm="12" md="12" lg="9" align-self="end")
					.third-title.fade-in Case studies
					.first-title.main-title Check other cases 
					.first-title.main-title in this category

				b-col.fade-in(sm="12" md="12" lg="3" align-self="end")
					.text They face different challenges that we overcome together and set new goals that we help achieve.
					.button
						.button-text VIEW ALL CASES
						.button-bar
							img.button_image(src="@/assets/eye-button.svg", alt="")
							.button-text VIEW ALL CASES

			.line
		
		//case studies list	
		b-container.case-studies-list-container.js-perspective
			b-row.case-studies-list-row.perspective-card-wrap(
					v-for="(caseStudy, index) in caseStudies" :key="index" 
					@mouseover="caseStudiesHover = index" @mouseleave="caseStudiesHover = false"
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

	//features
	b-container.features-container
		b-row
			b-col.fade-in(sm="12" md="12" lg="4")
				.third-title What else are we doing
				.first-title We boost ecommerce businesses with 360 degree solutions. 
			b-col.feature-card(sm="12" md="12" lg="4" 
        v-for="(feature, index) in remainingFeatures" :key="index"
        @mouseover="featureHover = index" @mouseleave="featureHover = false"
        @click="toFeature(feature.title)"
      )
				.features_title(
          :class="featureHover === index ? 'orange-title-on-hover' : ''"
        ) {{ feature.title }}
        
				.line(
          :class="featureHover === index ? 'line-anim orange-on-hover' : 'make-visible'"
        )
				//- add function for intersection
				//- transition(name="fadeIn")
				.features-text-and-button
					.text(
						v-if="featureHover !== index"
						key="default"
					) {{ feature.text }}

					.text(
						v-else
						key="alter"
					) {{ feature.text_hover }}

					.button
						.button-text {{ feature.buttonText }}
						div(
              :class="featureHover === index ? 'button-bar-hover' : 'button-bar'"
            )
							img.button_image(src="@/assets/arrow-button.svg", alt="")
							.button-text {{ feature.buttonText }}

	Footer
				
 
</template>

<script>
import Jelly from "jelly.js";

import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

export default {
	components: {
		Navbar,
		Modal,
		Footer,
	},

	data() {
		return {
			moveArrows: false,
			expand: false,
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
			],
			caseStudiesHover: false,
			features: [
        {
          title: `Drive Business Online`,
          text:
            "Get an ecommerce website built from scratch to make your dreams come true. If you already have an e-store, then you could upgrade it with a set of customizations to increase sales and get your business to the next level.",
          text_hover: "•‎ Ecommerce Website From Scratch \n•‎ Web Development \n•‎ Migration to Magento 2.x \n•‎ Integrating with third-party systems \n•‎ DevOps and Infrastructure \n•‎ Support and Maintenance",
					buttonText: "Let’s upgrade",
					hero_text: {
						first_row: "Build or upgrade",
						second_row_left: "your",
						second_row_right: "business",
						third_row: "to attract more customers",
						fourth_row: "& boost sales"
					},
					solutions: [
						{
							title: "Ecommerce Website From Scratch",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
						{
							title: "Magento Web Development",
							info: "Suitable for both medium and large businesses, which needs smaller platforms can’t cover. If your online store’s assortment is vast, and each product has a range of attributes, and you want more independence for your business, then Magento store development will come in handy!",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
						{
							title: "Shopify Web Development",
							info: "Suits both small and medium businesses that are limited by basic Shopify functionality. If you are ready to attract new customers and get more profit, then it’s time to equip your Shopify store. It could be specific customizations and integrations with third-party systems — payment gateways, ERP, CRM & PIM systems, analytic, and marketing tools.",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
						{
							title: "Woocommerce Web Development",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
						{
							title: "Migration to Magento 2.x",
							info: "Suitable for both medium and large businesses, which needs smaller platforms can’t cover. If your online store’s assortment is vast, and each product has a range of attributes, and you want more independence for your business, then Magento store development will come in handy!",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
						{
							title: "Integrating with third-party systems",
							info: "Suits both small and medium businesses that are limited by basic Shopify functionality. If you are ready to attract new customers and get more profit, then it’s time to equip your Shopify store. It could be specific customizations and integrations with third-party systems — payment gateways, ERP, CRM & PIM systems, analytic, and marketing tools.",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
						{
							title: "DevOps & Infrastructure",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
						{
							title: "Support & Maintenance",
							info: "Suitable for both medium and large businesses, which needs smaller platforms can’t cover. If your online store’s assortment is vast, and each product has a range of attributes, and you want more independence for your business, then Magento store development will come in handy!",
							single_solution: {
								title: "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
								for: [
									{
										title: "Runs",
										text: "a business in social media and seeks for the ways to progress and move their store forward"
									},
									{
										title: "Wants",
										text: "to launch an online store, but doesn't know how to start, and is not familiar with the development"
									},
									{
										title: "Owns",
										text: "an offline business and wants to discover new distribution channels"
									}
								],
								second_title: "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
								we_doing: [
									{
										title: "Creating",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Developing",
										text: "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
									},
									{
										title: "Driving traffic",
										text: "to your ecommerce business by implementing systematic marketing strategies."
									},
									{
										title: "Selecting & setting up",
										text: "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
									},
									{
										title: "Integrating",
										text: "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
									},
									{
										title: "Safe migrating",
										text: "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
									}
								],
								helps: [
									"Exploits business opportunities by revealing a new sales channel.",
									"Increases the conversion rate and profit.",
									"Attracts new audiences and traffic to your online store.",
									"Keeps your business ahead of the competition."
								]
							}
						},
					],
        },
        {
          title: "Outstand!",
          text:
            "Grab attention and impress your visitors at first sight! Give your customers the best possible experience to let them make purchases in the most convenient and easiest way. It will instantly boost your conversion rates.",
          text_hover: "•‎ Web Design \n•‎ Conversion Rate Optimization \n•‎ Search Engine Optimization",
					buttonText: "Increase conversion",
					hero_text: {
						first_row: "Leave a lasting",
						second_row: "impression on customers &",
						third_row_left: "make your",
						fourth_row: "business stand out from",
						fifth_row: "competitors"
					},
					solutions: [
						{
							title: "Web Design",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
						{
							title: "Conversion Rate Optimization",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
						{
							title: "Search Engine Optimization",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
					]
        },
        {
          title: "Grow Expertly",
          text:
            "Stay one step ahead of your competitors if you want to win the race. Get extensional audits to increase the efficiency of your business. Advance your team with training to develop a high performance of your business.",
          text_hover: "•‎ Business Analysis \n•‎ SEO Audit \n•‎ Code and Performance Audit \n•‎ Security Audit \n•‎ Training and Consulting",
					buttonText: "Overtake competitors",
					hero_text: {
						first_row_left: "Move your",
						second_row: "business to attract more",
						third_row: "customers & boost sales"
					},
					solutions: [
						{
							title: "Business Analysis",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
						{
							title: "SEO Audit",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
						{
							title: "Code and Performance Audit",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
						{
							title: "Security Audit",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
						{
							title: "Training and Consulting",
							info: "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business."
						},
					]
        }
      ],
			featureHover: false,
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
		jellyButtonInit2() {
			let options = {
				paths: "#jelly2", // Shape we want to draw
				pointsNumber: 10, // Number of points
				maxDistance: 70, // Max distance among points
				color: "#EC5C2B",
				centroid: ".centroid-text2" // Element to move accordingly with the centroid of the shape
				// debug: true               // Uncomment this to see the points
			};

			/* Initializing jelly */

			new Jelly(".jelly-canvas2", options);

			document.getElementById("get-quote2").style.cssText =
				"visibility: visible";

			// console.log(jelly);
		},
		showModal() {
      let isModalShowing = document.querySelector('.modal-container').style.display = 'initial'

      isModalShowing === 'initial' ? 
      document.querySelector('.navbar').style.display = 'none' : 
      document.querySelector('.navbar').style.display = 'initial'
    },
		intersectionObserverAnimation() {
			// document.getElementById("navbar").scrollIntoView();
			
      const elements = [
				'line',
				'main-title',
				'fade-in',
				'features-text-and-button',
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
		},
		toFeature(title) {
			let features = title.replace(/\s+/g, "-").toLowerCase();
			
			location.href = features

      this.$router.push(features);
		},
		toSolution(title) {
			let solution = title.replace(/\s+/g, "-").toLowerCase();

			this.$router.push("/" + this.$route.params.feature + "/" + solution)
		},
		//////////////////////////////
		// category expand-collapse //
		//////////////////////////////
		expandCategory(index) {
			const categories = document.querySelectorAll('.expand-category')

			categories[index].style.maxHeight = categories[index].scrollHeight + "px";
		},
		collapseCategory(index) {
			const categories = document.querySelectorAll('.expand-category')
			const titles = document.querySelectorAll('.solutions-category-row .first-title') 

			categories[index].style.maxHeight = titles[index].scrollHeight + 35 + 'px'
		},
		///////////////////////////////////////////////
		// making category heights dynamic INITIALLY //
		///////////////////////////////////////////////
		initialCategoryHeight() {
			const categories = document.querySelectorAll('.expand-category')
			const titles = document.querySelectorAll('.solutions-category-row .first-title') 

			categories.forEach((c, key) => c.style.maxHeight = titles[key].scrollHeight + 35 + 'px')

			// console.log('heights calculated!!!');
		}
	},
	computed: {
    title() {
      let newTitle = this.$route.params.feature.replace(/-/g, " ");

			// return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
			return newTitle.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    },
    feature() {
      return this.features.find(item => item.title == this.title);
    },
    remainingFeatures() {
      let filteredFeatures = this.features.filter(item => item.title != this.title)

      return filteredFeatures
		},
  },
	mounted() {
		this.jellyButtonInit()
		this.jellyButtonInit2()
		this.intersectionObserverAnimation()
		this.perspectiveHover(".js-perspective-card", 4)
		this.initialCategoryHeight()
	},
	created() {
		// this.intersectionObserverAnimation()
		this.initialCategoryHeight()
	}
}
</script>

<style lang="stylus">
	@import "../styles/drive-business-online.styl"
</style>
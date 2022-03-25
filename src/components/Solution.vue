<template lang="pug">
#solution
	Navbar

	b-container.title-container
		b-row
			b-col
				.text(@click="$router.go(-2)") What we do  
				.text(@click="$router.go(-1)") {{ featureTitle }} 
				.text {{ solutionTitle }}

		b-row.back
			img.back-button(src="@/assets/arrow-left.svg" alt="" @click="$router.go(-1)")
			b-col
				.third-title {{ solutionTitle }}

		b-row.title
			b-col
				.first-title.fade-in {{ solution.title }}

	b-container.for-who
		b-row
			b-col
				.third-title-alternate It's for those who: 
		b-row
			b-col(sm="12" md="12" lg="4" v-for="(f, index) in solution.for" :key="index")
				.for-who-card.fade-in
					.third-title {{ f.title }}
					.third-title {{ f.text }}

	b-container.second-title-container
		b-row
			b-col
				.third-title-alternate.fade-in {{ solution.second_title }}

	b-container.we-doing
		b-row
			b-col(sm="12" md="12" lg="4" offset-lg="2" v-for="(wd, index) in solution.we_doing" :key="index")
				.we-doing-card.fade-in
					.third-title {{ wd.title }}
					.text {{ wd.text }}

	b-container.how-it-helps-container
		b-row
			b-col(sm="12" md="12" lg="3")
				.second-title How it helps you
			b-col(sm="12" md="12" lg="9")
				b-row
					b-col.fade-in(sm="12" md="12" lg="6")
						.number 01
						.text Increase conversions and business revenue.
					b-col.fade-in(sm="12" md="12" lg="6")
						.number 02
						.text Get your ecommerce store to the next level.
					b-col.fade-in(sm="12" md="12" lg="6")
						.number 03
						.text Build challenging solutions for your business aims.
					b-col.fade-in(sm="12" md="12" lg="6")
						.number 04
						.text Make the store work stable and safe.

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

	Footer
					
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: "Solution",
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
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
        }
      ],
      caseStudiesHover: false,
      features: [
        {
          title: `Drive Business Online`,
          text:
            "Get an ecommerce website built from scratch to make your dreams come true. If you already have an e-store, then you could upgrade it with a set of customizations to increase sales and get your business to the next level.",
          text_hover:
            "•‎ Ecommerce Website From Scratch \n•‎ Web Development \n•‎ Migration to Magento 2.x \n•‎ Integrating with third-party systems \n•‎ DevOps and Infrastructure \n•‎ Support and Maintenance",
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
              info:
                "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              info:
                "Suitable for both medium and large businesses, which needs smaller platforms can’t cover. If your online store’s assortment is vast, and each product has a range of attributes, and you want more independence for your business, then Magento store development will come in handy!",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              info:
                "Suits both small and medium businesses that are limited by basic Shopify functionality. If you are ready to attract new customers and get more profit, then it’s time to equip your Shopify store. It could be specific customizations and integrations with third-party systems — payment gateways, ERP, CRM & PIM systems, analytic, and marketing tools.",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              info:
                "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              info:
                "Suitable for both medium and large businesses, which needs smaller platforms can’t cover. If your online store’s assortment is vast, and each product has a range of attributes, and you want more independence for your business, then Magento store development will come in handy!",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              info:
                "Suits both small and medium businesses that are limited by basic Shopify functionality. If you are ready to attract new customers and get more profit, then it’s time to equip your Shopify store. It could be specific customizations and integrations with third-party systems — payment gateways, ERP, CRM & PIM systems, analytic, and marketing tools.",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              info:
                "Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              info:
                "Suitable for both medium and large businesses, which needs smaller platforms can’t cover. If your online store’s assortment is vast, and each product has a range of attributes, and you want more independence for your business, then Magento store development will come in handy!",
              single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
                  }
                ],
                helps: [
                  "Exploits business opportunities by revealing a new sales channel.",
                  "Increases the conversion rate and profit.",
                  "Attracts new audiences and traffic to your online store.",
                  "Keeps your business ahead of the competition."
                ]
              }
            }
          ]
        },
        {
          title: "Outstand!",
          text:
            "Grab attention and impress your visitors at first sight! Give your customers the best possible experience to let them make purchases in the most convenient and easiest way. It will instantly boost your conversion rates.",
          text_hover:
            "•‎ Web Design \n•‎ Conversion Rate Optimization \n•‎ Search Engine Optimization",
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
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              title: "Conversion Rate Optimization",
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              title: "Search Engine Optimization",
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
                  }
                ],
                helps: [
                  "Exploits business opportunities by revealing a new sales channel.",
                  "Increases the conversion rate and profit.",
                  "Attracts new audiences and traffic to your online store.",
                  "Keeps your business ahead of the competition."
                ]
              }
            }
          ]
        },
        {
          title: "Grow Expertly",
          text:
            "Stay one step ahead of your competitors if you want to win the race. Get extensional audits to increase the efficiency of your business. Advance your team with training to develop a high performance of your business.",
          text_hover:
            "•‎ Business Analysis \n•‎ SEO Audit \n•‎ Code and Performance Audit \n•‎ Security Audit \n•‎ Training and Consulting",
          buttonText: "Overtake competitors",
          hero_text: {
            first_row_left: "Move your",
            second_row: "business to attract more",
            third_row: "customers & boost sales"
          },
          solutions: [
            {
              title: "Business Analysis",
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              title: "SEO Audit",
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              title: "Code and Performance Audit",
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              title: "Security Audit",
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
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
              title: "Training and Consulting",
              info:
								"Perfect for those businesses that work offline or exceptionally in social media. Even if you don’t understand how you want your online store to look or what types of products you need, you will receive all user guides with recommendations and explanations specifically for your business. A new sales channel could be a window of opportunity for your business.",
							single_solution: {
                title:
                  "If you are going to launch an online store, you’ll face a lot of problems — from deciding on a platform to developing a design and driving traffic to your website.",
                for: [
                  {
                    title: "Runs",
                    text:
                      "a business in social media and seeks for the ways to progress and move their store forward"
                  },
                  {
                    title: "Wants",
                    text:
                      "to launch an online store, but doesn't know how to start, and is not familiar with the development"
                  },
                  {
                    title: "Owns",
                    text:
                      "an offline business and wants to discover new distribution channels"
                  }
                ],
                second_title:
                  "We offer your business the full development of a turnkey ecommerce website to let you set and achieve large-scale goals while we’re working on your project.",
                we_doing: [
                  {
                    title: "Creating",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Developing",
                    text:
                      "functionalities for your store by using ready-made extensions and custom coding to make your website user and SEO friendly"
                  },
                  {
                    title: "Driving traffic",
                    text:
                      "to your ecommerce business by implementing systematic marketing strategies."
                  },
                  {
                    title: "Selecting & setting up",
                    text:
                      "the up-to-date design for your ecommerce store using the latest UI/UX practices to perform the high usability & conversion rate"
                  },
                  {
                    title: "Integrating",
                    text:
                      "your online store with different applications and services — shipping methods and payment gateways, fulfillment companies, CRM, ERP and POS systems, analytics tools — to automate the workflow of your online store"
                  },
                  {
                    title: "Safe migrating",
                    text:
                      "of store settings, products, customers, orders, modules, plugins, and APIs from the old website to the new one, if necessary"
                  }
                ],
                helps: [
                  "Exploits business opportunities by revealing a new sales channel.",
                  "Increases the conversion rate and profit.",
                  "Attracts new audiences and traffic to your online store.",
                  "Keeps your business ahead of the competition."
                ]
              }
            }
          ]
        }
      ],
    };
  },
  computed: {
    featureTitle() {
      let newTitle = this.$route.params.feature.replace(/-/g, " ");

      // return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
      return newTitle
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
    solutionTitle() {
      let newTitle = this.$route.params.solution.replace(/-/g, " ");

      // return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
      return newTitle
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
    solution() {
      return this.features
        .find(item => item.title == this.featureTitle)
        .solutions.find(item => item.title.replace(/\s+/g, "-").toLowerCase() == this.solutionTitle.replace(/\s+/g, "-").toLowerCase())
        .single_solution;
    }
  },
  methods: {
    intersectionObserverAnimation() {
      // document.getElementById("navbar").scrollIntoView();
      const elements = [
        "line",
        "main-title",
        "fade-in",
        "features-text-and-button"
      ];
      //массив найденных элементов
      let selectedElements = [];
      //находим элементы из массива в ДОМе
      elements.forEach(element => {
        selectedElements.push(document.querySelectorAll("." + element));
      });
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
              if (entry.target.classList.contains(el))
                entry.target.classList.add(el + "-anim");
            });
            observer.unobserve(entry.target);
          }
        });
      }, options);
      selectedElements.forEach(se => {
        se.forEach(target => observer.observe(target));
      });
    },
    perspectiveHover(el, intensity) {
      var self = this,
        parents = document.querySelectorAll(".js-perspective"),
        cards = document.querySelectorAll(".perspective-card");

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
          rotateX =
            ((elHeight / 2 - (mouseY - elY)) / (elHeight / 2)) * intensity;

        el.style.transform =
          "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

        // console.log('(' + rotateX + ', ' + rotateY + ')')
        // console.log(elX, elY, elWidth, elHeight);
        // console.log(mouseX, mouseY);
      };

      parents.forEach(parent =>
        parent.addEventListener("mousemove", function(e) {
          if (e.target.classList.contains("js-perspective-card")) {
            self.perspective(e, e.target);
          }
        })
      );

      this.reset = function(el) {
        el.style.transform = "";
      };

      cards.forEach(card =>
        card.addEventListener("mouseleave", function() {
          self.reset(this);
        })
      );
    }
  },
  mounted() {
    this.intersectionObserverAnimation();
    this.perspectiveHover(".js-perspective-card", 4);
  }
};
</script>

<style lang="styl">
@import "../styles/solution.styl";
</style>
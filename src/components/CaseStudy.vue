<template lang="pug">
#case
	Navbar

	b-container.breadcrumbs-container
		b-row
			b-col
				.text(@click="$router.push('/portfolio')") Portfolio
				.text(@click="$router.push('/portfolio')") Case Studies
				.text {{ caseTitle }}

	//case info
	b-container.case-info.fade-in
		b-row
			b-col
				.third-title {{ caseStudy.title }}
				.first-title {{ caseStudy.description }}
		b-row.general-info-row
			b-col(sm="12" md="12" lg="3")
				.text Brand
				.third-title {{ caseStudy.brand }}
			b-col(sm="12" md="12" lg="3")
				.text Region
				.third-title {{ caseStudy.region }}
			b-col(sm="12" md="12" lg="3")
				.text Client's url (NDA)
				.third-title {{ caseStudy.link }}

	//hero image
	b-container.hero-image-container
		b-row
			b-col
				.hero-image-wrapper
					.hero-image(:style="{'background-image': 'url(' + caseStudy.heroPic + ')'}")

	//about client
	b-container.about-client.fade-in
		b-row
			b-col(sm="12" md="12" lg="8")
				.second-title About client
				.text {{ caseStudy.about }}
			b-col.stats(sm="12" md="12" lg="3" offset-lg="1" align-self="center")
				.fourth-title Client in figures
				ul.stats-list
					li.small-text(v-for="stat in caseStudy.statistics") {{ stat }}

	//project description
	b-container.project-description
		b-row
			b-col
				.first-title.fade-in Project description
				.line
		b-row
			b-col.fade-in(sm="12" md="12" lg="8")
				.second-title Challenges
				.text {{ caseStudy.challenges }}
			b-col.stats.fade-in(sm="12" md="12" lg="3" offset-lg="1" align-self="center")
				.fourth-title Team
				ul.stats-list
					li.small-text(v-for="team in caseStudy.team") {{ team }}

	//middle pic
	b-container.hero-image-container
		b-row
			b-col
				.hero-image-wrapper
					.hero-image(:style="{'background-image': 'url(' + caseStudy.middlePic + ')'}")

	//solutions
	b-container.solutions.fade-in
		b-row
			b-col(sm="12" md="12" lg="8")
				.second-title Solutions
				.text {{ caseStudy.solutions }}
			b-col.stats(sm="12" md="12" lg="3" offset-lg="1" align-self="center")
				.fourth-title Tools
				ul.stats-list
					li.small-text(v-for="tool in caseStudy.tools") {{ tool }}

	//solutions pic
	b-container.hero-image-container
		b-row
			b-col
				.hero-image-wrapper
					.hero-image(:style="{'background-image': 'url(' + caseStudy.architecture + ')'}")

	//solutions second section
	b-container.solutions.fade-in
		b-row
			b-col(sm="12" md="12" lg="8")
				.text {{ caseStudy.solutions2 }}
			b-col.footnote(sm="12" md="12" lg="3" offset-lg="1" align-self="center")
				.second-title Amazon Web Services (AWS)
				.small-text is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis. In aggregate, these cloud computing web services offer a set of primitive abstract technical infrastructure and distributed computing building blocks and tools. The AWS technology is implemented at server farms throughout the world, and maintained by the Amazon subsidiary. Fees are based on a combination of usage, the hardware / OS / software / networking features chosen by the subscriber, required availability, redundancy, security, and service options.

	//pictures
	b-container.picture-container
		b-row
			b-col(sm="12" md="12" lg="6" style="display: flex; flex-direction: column")
				.picture-wrapper
					.picture-image(:style="{'background': 'url(' + caseStudy.pics[0] + ') center no-repeat'}")
				.small-text.fade-in Eventually, we formed this infrastructure, conducted testing, and synchronized with the final edits
			b-col(sm="12" md="12" lg="6" style="display: flex; flex-direction: column")
				.picture-wrapper
					.picture-image(:style="{'background': 'url(' + caseStudy.pics[1] + ') center no-repeat'}")
			
				.small-text.fade-in Eventually, we formed this infrastructure, conducted testing, and synchronized with the final edits

	//testimonials
	b-container
		b-row
			b-col.testimonials.fade-in(sm="12" md="12" lg="7")
				.second-title Testimonials
				.third-title We have built several websites with Magecom team. They are extremely skilled and professional, experienced in a wide variety of web technologies, and they are very good about meeting timelines and budgets. There is no question that Magecom is our first choice for addressing our Web development needs.
				.author.fade-in
					.second-title Brian S. Pauls
					.text President PerAspera Consulting

	//result
	b-container.result-container.fade-in
		b-row
			b-col(sm="12" md="12" lg="7")
				.second-title Result
				.third-title {{ caseStudy.result }}
			b-col(sm="12" md="12" lg="4" offset-lg="1" align-self="center")
				.third-title Implementations
				.tag-wrap(
					v-for="(tag, index) in caseStudy.tags" 
					:key="index"
				)
					.text {{ tag }}

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
					.button(@click="$router.push('/portfolio')")
						.button-text VIEW ALL CASES
						.button-bar
							img.button_image(src="@/assets/eye-button.svg", alt="")
							.button-text VIEW ALL CASES

			.line
		
		//case studies list	
		b-container.case-studies-list-container.js-perspective
			b-row.case-studies-list-row.perspective-card-wrap(
					v-for="(caseStudy, index) in remainingCases" 
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

	Footer


</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: "CaseStudy",

	components: {
		Navbar,
		Footer,
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
					link: "www.minodusud.com",
					brand: "Vidax (NDA)",
					text:
						"An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.",
					pic: require("@/assets/fashion.webp"),
					heroPic: require("@/assets/column-of-girls.png"),
					middlePic: require("@/assets/row-of-girls.png"),
					architecture: require("@/assets/architecture.png"),
					pics: [
						require("@/assets/guy-girl.png"),
						require("@/assets/models.png"),
					],
					about: "An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.\n \nThe company actively uses social networks to attract customers. The client regularly organizes promotions and sales. An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.",
					statistics: [
						"400K+ FB followers",
						"10K+ simultaneous website users during sales",
						"120K+ monthly visits",
						"70% mobile traffic"
					],
					challenges: "The client was in the middle of migrating the project from Prestashop to Magento 2.3 Commerce Edition. At some point, they started to pick a hosting environment. They considered several options, such as Magento Cloud and a self-hosted solution. Eventually, after quite a lot of back and forth, they landed on AWS and asked us for help with the DevOps part. \n \nAlso, the client expected a high traffic load during the period of sales and promotions. Based on forecasts for advertising campaigns, it was expected that the number of users who visited the site at the same time would reach up to 10,000. He gave us the task of creating the server infrastructure, which would handle up to 10,000 simultaneous website users during sales and discounts. \n \nAs we worked on the AWS configuration, the client also needed extra development hands to make it happen by their deadline, which we gladly assisted with. Apart from that, we were involved in training and instructing their DevOps Engineer for future maintenance of the AWS infrastructure.",
					team: [
						"DevOps Engineer",
						"QA Engineer",
						"Back-End Developer",
						"Front-End Developer"
					],
					solutions: "We decided to set up a self-managed hosting and create a scalable environment on it. \n \nWe included protection against DDoS attacks and caching. We also implemented the Load Balancer, which shares the load effectively in the multi-server architecture.\nWe planned that we would start with 1-2 servers. From the moment of promotions and discounts when the load on the servers reaches a certain level, the system throws up new copied servers. When the capacity begins to fall, the number of servers gradually reduces. \n \nWe made two servers — Master and Slave. Master is where the process recording takes place, and Slave is where the reading is coming from. They have a synchronization mechanism with each other. As the recording is a more prolonged operation than reading, we separated them to balance the capacity. \nThe main challenges we faced were deploying updates to the various servers with minimal downtime and making this process fully automated. To do that, we’ve developed an extremely complicated system that allows us to make changes with a click. \n \nWe saw that as us being responsible for the server infrastructure, and the client’s team to be engaged in the application layer. Finally, our QA engineers would verify the ultimate capacity. \nWe estimated the costs of labor as well as project and infrastructure development.",
					solutions2: "The work involved close collaboration with the client’s development team, which was comprised of three back-end, one front-end, one DevOps, and one QA engineers. We worked together with their technical leads to become integral partners in their existing development processes. \n\nA highly loaded system, which we developed, consists of several components: \n- Server infrastructure; \n- Application layer; \n- Analyzing if it carries the capacity. \n\nDuring the work, we connected the Fastly and Load Balancer services and set up the application and caching servers, Elasticsearch, and Bastion. \n\nOptimization of a highly loaded project is an iterative process. It consists of two parts: the server and application layers. To know where we are our QA uses the load testing and gives feedback with the metrics. We fine-tune the infrastructure, client’s team optimizes the Magento code and then circle it back to the load testing, which again reports the capacity that it can carry. For example, it informs us that it can carry up to 3,000 users. \n\nWhile working on the project, tests and optimization rounds, we found a way to optimize the system. \n\nDuring the load testing, we figured out that when we reached 10,000 users, one database server was enough, so the client didn’t have to buy Slave and could save money. \n\nMoreover, we implemented NFS, which is a media library for storing content that doesn’t need to be duplicated on each server. So we suggested, instead of taking up space, carrying it out separately. \n\nWe also had three cache servers in mind, however we ultimately left only one — Redis, which caches sessions. The thing was that operations shouldn’t be duplicated, but could be carried out separately. It turned out that Amazon network bandwidth didn’t allow us to transfer this staff to separate servers so quickly as we expected. \n\nWe rejected two additional caching servers, and this functionality was transferred to each of the servers. \nWe rejected two additional servers and made the necessary performance. We improved the solution and made it even cheaper for the client without loss of efficiency.",
					tools: [
						"Magento 2 Commerce edition",
						"Fastly",
						"New Relic",
						"JMeter",
						"Amazon services: \n\n - Amazon Code Deploy \n\n - EC2 Instances \n\n - Database \n\n - Redis \n\n - Elastic Load Balancer \n\n - Elasticsearch - Bastion"
					],
					result: "Now the online store works well when it’s loaded with 10,000 users or more. \nWe described all the processes, sent instructions, and trained the client's team so that they wouldn’t have any problems in the future. We completed this task from start to finish in a month.",
					tags: [
						"Web Application Firewall",
						"Auto Deploy",
						"Scalable Environment"
					]
				},
				{
					title: "Magento 2 Case Study",
					description:
						"Implementing Customizations Which Are Not Common For Default Magento 2 On A Tight Schedule",
					region: "Switzerland",
					industry: "Food & Beverages",
					link: "www.minodusud.com",
					brand: "Vidax (NDA)",
					text:
						"An online wine store, which offers a wide selection of wines that are produced in the company’s wineries. The product assortment is represented by 10+ product categories and 1000+ items. ",
					pic: require("@/assets/food-beverages.png"),
					heroPic: require("@/assets/column-of-girls.png"),
					middlePic: require("@/assets/row-of-girls.png"),
					architecture: require("@/assets/architecture.png"),
					pics: [
						require("@/assets/guy-girl.png"),
						require("@/assets/models.png"),
					],
					about: "An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.\n \nThe company actively uses social networks to attract customers. The client regularly organizes promotions and sales. An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.",
					statistics: [
						"400K+ FB followers",
						"10K+ simultaneous website users during sales",
						"120K+ monthly visits",
						"70% mobile traffic"
					],
					challenges: "The client was in the middle of migrating the project from Prestashop to Magento 2.3 Commerce Edition. At some point, they started to pick a hosting environment. They considered several options, such as Magento Cloud and a self-hosted solution. Eventually, after quite a lot of back and forth, they landed on AWS and asked us for help with the DevOps part. \n \nAlso, the client expected a high traffic load during the period of sales and promotions. Based on forecasts for advertising campaigns, it was expected that the number of users who visited the site at the same time would reach up to 10,000. He gave us the task of creating the server infrastructure, which would handle up to 10,000 simultaneous website users during sales and discounts. \n \nAs we worked on the AWS configuration, the client also needed extra development hands to make it happen by their deadline, which we gladly assisted with. Apart from that, we were involved in training and instructing their DevOps Engineer for future maintenance of the AWS infrastructure.",
					team: [
						"DevOps Engineer",
						"QA Engineer",
						"Back-End Developer",
						"Front-End Developer"
					],
					solutions: "We decided to set up a self-managed hosting and create a scalable environment on it. \n \nWe included protection against DDoS attacks and caching. We also implemented the Load Balancer, which shares the load effectively in the multi-server architecture.\nWe planned that we would start with 1-2 servers. From the moment of promotions and discounts when the load on the servers reaches a certain level, the system throws up new copied servers. When the capacity begins to fall, the number of servers gradually reduces. \n \nWe made two servers — Master and Slave. Master is where the process recording takes place, and Slave is where the reading is coming from. They have a synchronization mechanism with each other. As the recording is a more prolonged operation than reading, we separated them to balance the capacity. \nThe main challenges we faced were deploying updates to the various servers with minimal downtime and making this process fully automated. To do that, we’ve developed an extremely complicated system that allows us to make changes with a click. \n \nWe saw that as us being responsible for the server infrastructure, and the client’s team to be engaged in the application layer. Finally, our QA engineers would verify the ultimate capacity. \nWe estimated the costs of labor as well as project and infrastructure development.",
					solutions2: "The work involved close collaboration with the client’s development team, which was comprised of three back-end, one front-end, one DevOps, and one QA engineers. We worked together with their technical leads to become integral partners in their existing development processes. \n\nA highly loaded system, which we developed, consists of several components: \n- Server infrastructure; \n- Application layer; \n- Analyzing if it carries the capacity. \n\nDuring the work, we connected the Fastly and Load Balancer services and set up the application and caching servers, Elasticsearch, and Bastion. \n\nOptimization of a highly loaded project is an iterative process. It consists of two parts: the server and application layers. To know where we are our QA uses the load testing and gives feedback with the metrics. We fine-tune the infrastructure, client’s team optimizes the Magento code and then circle it back to the load testing, which again reports the capacity that it can carry. For example, it informs us that it can carry up to 3,000 users. \n\nWhile working on the project, tests and optimization rounds, we found a way to optimize the system. \n\nDuring the load testing, we figured out that when we reached 10,000 users, one database server was enough, so the client didn’t have to buy Slave and could save money. \n\nMoreover, we implemented NFS, which is a media library for storing content that doesn’t need to be duplicated on each server. So we suggested, instead of taking up space, carrying it out separately. \n\nWe also had three cache servers in mind, however we ultimately left only one — Redis, which caches sessions. The thing was that operations shouldn’t be duplicated, but could be carried out separately. It turned out that Amazon network bandwidth didn’t allow us to transfer this staff to separate servers so quickly as we expected. \n\nWe rejected two additional caching servers, and this functionality was transferred to each of the servers. \nWe rejected two additional servers and made the necessary performance. We improved the solution and made it even cheaper for the client without loss of efficiency.",
					tools: [
						"Magento 2 Commerce edition",
						"Fastly",
						"New Relic",
						"JMeter",
						"Amazon services: \n\n - Amazon Code Deploy \n\n - EC2 Instances \n\n - Database \n\n - Redis \n\n - Elastic Load Balancer \n\n - Elasticsearch - Bastion"
					],
					result: "Now the online store works well when it’s loaded with 10,000 users or more. \nWe described all the processes, sent instructions, and trained the client's team so that they wouldn’t have any problems in the future. We completed this task from start to finish in a month.",
					tags: [
						"Web Application Firewall",
						"Auto Deploy",
						"Scalable Environment"
					]
				},
				{
					title: "Migration & Tuning Case Study",
					description:
						"Migrating From Magento 1 To Magento 2 & Implementing Extensive Customizations",
					region: "France",
					industry: "Online Education",
					link: "www.minodusud.com",
					brand: "Vidax (NDA)",
					text:
						"A chain of four restaurants in Paris and Lyon that organize online cooking courses in different cuisines of the world. Events and workshops can be held not only by the chefs who work in the restaurants but also by logged-in and moderated users. ",
					pic: require("@/assets/online-education.png"),
					heroPic: require("@/assets/column-of-girls.png"),
					middlePic: require("@/assets/row-of-girls.png"),
					architecture: require("@/assets/architecture.png"),
					pics: [
						require("@/assets/guy-girl.png"),
						require("@/assets/models.png"),
					],
					about: "An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.\n \nThe company actively uses social networks to attract customers. The client regularly organizes promotions and sales. An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.",
					statistics: [
						"400K+ FB followers",
						"10K+ simultaneous website users during sales",
						"120K+ monthly visits",
						"70% mobile traffic"
					],
					challenges: "The client was in the middle of migrating the project from Prestashop to Magento 2.3 Commerce Edition. At some point, they started to pick a hosting environment. They considered several options, such as Magento Cloud and a self-hosted solution. Eventually, after quite a lot of back and forth, they landed on AWS and asked us for help with the DevOps part. \n \nAlso, the client expected a high traffic load during the period of sales and promotions. Based on forecasts for advertising campaigns, it was expected that the number of users who visited the site at the same time would reach up to 10,000. He gave us the task of creating the server infrastructure, which would handle up to 10,000 simultaneous website users during sales and discounts. \n \nAs we worked on the AWS configuration, the client also needed extra development hands to make it happen by their deadline, which we gladly assisted with. Apart from that, we were involved in training and instructing their DevOps Engineer for future maintenance of the AWS infrastructure.",
					team: [
						"DevOps Engineer",
						"QA Engineer",
						"Back-End Developer",
						"Front-End Developer"
					],
					solutions: "We decided to set up a self-managed hosting and create a scalable environment on it. \n \nWe included protection against DDoS attacks and caching. We also implemented the Load Balancer, which shares the load effectively in the multi-server architecture.\nWe planned that we would start with 1-2 servers. From the moment of promotions and discounts when the load on the servers reaches a certain level, the system throws up new copied servers. When the capacity begins to fall, the number of servers gradually reduces. \n \nWe made two servers — Master and Slave. Master is where the process recording takes place, and Slave is where the reading is coming from. They have a synchronization mechanism with each other. As the recording is a more prolonged operation than reading, we separated them to balance the capacity. \nThe main challenges we faced were deploying updates to the various servers with minimal downtime and making this process fully automated. To do that, we’ve developed an extremely complicated system that allows us to make changes with a click. \n \nWe saw that as us being responsible for the server infrastructure, and the client’s team to be engaged in the application layer. Finally, our QA engineers would verify the ultimate capacity. \nWe estimated the costs of labor as well as project and infrastructure development.",
					solutions2: "The work involved close collaboration with the client’s development team, which was comprised of three back-end, one front-end, one DevOps, and one QA engineers. We worked together with their technical leads to become integral partners in their existing development processes. \n\nA highly loaded system, which we developed, consists of several components: \n- Server infrastructure; \n- Application layer; \n- Analyzing if it carries the capacity. \n\nDuring the work, we connected the Fastly and Load Balancer services and set up the application and caching servers, Elasticsearch, and Bastion. \n\nOptimization of a highly loaded project is an iterative process. It consists of two parts: the server and application layers. To know where we are our QA uses the load testing and gives feedback with the metrics. We fine-tune the infrastructure, client’s team optimizes the Magento code and then circle it back to the load testing, which again reports the capacity that it can carry. For example, it informs us that it can carry up to 3,000 users. \n\nWhile working on the project, tests and optimization rounds, we found a way to optimize the system. \n\nDuring the load testing, we figured out that when we reached 10,000 users, one database server was enough, so the client didn’t have to buy Slave and could save money. \n\nMoreover, we implemented NFS, which is a media library for storing content that doesn’t need to be duplicated on each server. So we suggested, instead of taking up space, carrying it out separately. \n\nWe also had three cache servers in mind, however we ultimately left only one — Redis, which caches sessions. The thing was that operations shouldn’t be duplicated, but could be carried out separately. It turned out that Amazon network bandwidth didn’t allow us to transfer this staff to separate servers so quickly as we expected. \n\nWe rejected two additional caching servers, and this functionality was transferred to each of the servers. \nWe rejected two additional servers and made the necessary performance. We improved the solution and made it even cheaper for the client without loss of efficiency.",
					tools: [
						"Magento 2 Commerce edition",
						"Fastly",
						"New Relic",
						"JMeter",
						"Amazon services: \n\n - Amazon Code Deploy \n\n - EC2 Instances \n\n - Database \n\n - Redis \n\n - Elastic Load Balancer \n\n - Elasticsearch - Bastion"
					],
					result: "Now the online store works well when it’s loaded with 10,000 users or more. \nWe described all the processes, sent instructions, and trained the client's team so that they wouldn’t have any problems in the future. We completed this task from start to finish in a month.",
					tags: [
						"Web Application Firewall",
						"Auto Deploy",
						"Scalable Environment"
					]
				},
				{
					title: "Migration Case Study",
					description:
						"Migrating From Magento 1 To Magento 2 And Implementing Custom Features",
					region: "USA",
					industry: "Engineering & Construction",
					link: "www.minodusud.com",
					brand: "Vidax (NDA)",
					text:
						"An online composite products store, which offers multiple services such as initial engineering, product development, prototyping, low and high volume production. The product assortment is represented by 40+ categories and 4000+ items.",
					pic: require("@/assets/engineering.png"),
					heroPic: require("@/assets/column-of-girls.png"),
					middlePic: require("@/assets/row-of-girls.png"),
					architecture: require("@/assets/architecture.png"),
					pics: [
						require("@/assets/guy-girl.png"),
						require("@/assets/models.png"),
					],
					about: "An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.\n \nThe company actively uses social networks to attract customers. The client regularly organizes promotions and sales. An online fashion store that sells women’s clothing and accessories within the EU. The product assortment of the store is presented in 17 categories and 1250+ items.",
					statistics: [
						"400K+ FB followers",
						"10K+ simultaneous website users during sales",
						"120K+ monthly visits",
						"70% mobile traffic"
					],
					challenges: "The client was in the middle of migrating the project from Prestashop to Magento 2.3 Commerce Edition. At some point, they started to pick a hosting environment. They considered several options, such as Magento Cloud and a self-hosted solution. Eventually, after quite a lot of back and forth, they landed on AWS and asked us for help with the DevOps part. \n \nAlso, the client expected a high traffic load during the period of sales and promotions. Based on forecasts for advertising campaigns, it was expected that the number of users who visited the site at the same time would reach up to 10,000. He gave us the task of creating the server infrastructure, which would handle up to 10,000 simultaneous website users during sales and discounts. \n \nAs we worked on the AWS configuration, the client also needed extra development hands to make it happen by their deadline, which we gladly assisted with. Apart from that, we were involved in training and instructing their DevOps Engineer for future maintenance of the AWS infrastructure.",
					team: [
						"DevOps Engineer",
						"QA Engineer",
						"Back-End Developer",
						"Front-End Developer"
					],
					solutions: "We decided to set up a self-managed hosting and create a scalable environment on it. \n \nWe included protection against DDoS attacks and caching. We also implemented the Load Balancer, which shares the load effectively in the multi-server architecture.\nWe planned that we would start with 1-2 servers. From the moment of promotions and discounts when the load on the servers reaches a certain level, the system throws up new copied servers. When the capacity begins to fall, the number of servers gradually reduces. \n \nWe made two servers — Master and Slave. Master is where the process recording takes place, and Slave is where the reading is coming from. They have a synchronization mechanism with each other. As the recording is a more prolonged operation than reading, we separated them to balance the capacity. \nThe main challenges we faced were deploying updates to the various servers with minimal downtime and making this process fully automated. To do that, we’ve developed an extremely complicated system that allows us to make changes with a click. \n \nWe saw that as us being responsible for the server infrastructure, and the client’s team to be engaged in the application layer. Finally, our QA engineers would verify the ultimate capacity. \nWe estimated the costs of labor as well as project and infrastructure development.",
					solutions2: "The work involved close collaboration with the client’s development team, which was comprised of three back-end, one front-end, one DevOps, and one QA engineers. We worked together with their technical leads to become integral partners in their existing development processes. \n\nA highly loaded system, which we developed, consists of several components: \n- Server infrastructure; \n- Application layer; \n- Analyzing if it carries the capacity. \n\nDuring the work, we connected the Fastly and Load Balancer services and set up the application and caching servers, Elasticsearch, and Bastion. \n\nOptimization of a highly loaded project is an iterative process. It consists of two parts: the server and application layers. To know where we are our QA uses the load testing and gives feedback with the metrics. We fine-tune the infrastructure, client’s team optimizes the Magento code and then circle it back to the load testing, which again reports the capacity that it can carry. For example, it informs us that it can carry up to 3,000 users. \n\nWhile working on the project, tests and optimization rounds, we found a way to optimize the system. \n\nDuring the load testing, we figured out that when we reached 10,000 users, one database server was enough, so the client didn’t have to buy Slave and could save money. \n\nMoreover, we implemented NFS, which is a media library for storing content that doesn’t need to be duplicated on each server. So we suggested, instead of taking up space, carrying it out separately. \n\nWe also had three cache servers in mind, however we ultimately left only one — Redis, which caches sessions. The thing was that operations shouldn’t be duplicated, but could be carried out separately. It turned out that Amazon network bandwidth didn’t allow us to transfer this staff to separate servers so quickly as we expected. \n\nWe rejected two additional caching servers, and this functionality was transferred to each of the servers. \nWe rejected two additional servers and made the necessary performance. We improved the solution and made it even cheaper for the client without loss of efficiency.",
					tools: [
						"Magento 2 Commerce edition",
						"Fastly",
						"New Relic",
						"JMeter",
						"Amazon services: \n\n - Amazon Code Deploy \n\n - EC2 Instances \n\n - Database \n\n - Redis \n\n - Elastic Load Balancer \n\n - Elasticsearch - Bastion"
					],
					result: "Now the online store works well when it’s loaded with 10,000 users or more. \nWe described all the processes, sent instructions, and trained the client's team so that they wouldn’t have any problems in the future. We completed this task from start to finish in a month.",
					tags: [
						"Web Application Firewall",
						"Auto Deploy",
						"Scalable Environment"
					]
				}
			],
			caseStudiesHover: false,
		}
	},
	computed: {
		caseTitle() {
			let newTitle = this.$route.params.case.replace(/-/g, " ");

			// return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
			return newTitle
				.split(" ")
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
		},
		caseStudy() {
			return this.caseStudies.find(item => item.title.replace(/\s+/g, "-").toLowerCase() == this.caseTitle.replace(/\s+/g, "-").toLowerCase())
		},
		remainingCases() {
			return this.caseStudies.filter(item => item.title.replace(/\s+/g, "-").toLowerCase() !== this.caseTitle.replace(/\s+/g, "-").toLowerCase())
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
				"picture-wrapper",
				"picture-image",
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
		toCase(title) {
			let caseStudy = title.replace(/\s+/g, "-").toLowerCase()
		
			this.$router.push('/case-studies' + '/' + caseStudy)
		}
	},
	mounted() {
		this.intersectionObserverAnimation();
		this.perspectiveHover(".js-perspective-card", 4)
	}

}
</script>

<style lang="stylus">
@import '../styles/case-study.styl'
</style>
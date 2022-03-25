<template lang="pug">
#article
	Navbar

	//breadcrumbs
	b-container.breadcrumbs-container
		b-row
			b-col
				.text(@click="$router.push('/blog')") Blog
				.text {{ articleTitle }}

	//hero
	b-container.article-hero-container
		b-row
			b-col(sm="12" md="12" lg="3").social-networks-rounds
				img(
					v-for="sn, index in socialNetworks"
					:key="index"
					:src="sn.pic"
				)

			b-col(sm="12" md="12" lg="7").article-title
				.first-title {{ articleTitle }}
				.text {{ article.date }}
				.third-title {{ article.text }}

			b-col(sm="12" md="12" lg="2")
				.author-info-background
				.author-info
					img(:src="require('../assets/author-pic.png')")
					.fourth-title Sam Peters
					.text It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including Lorem Ipsum.

	b-container
		b-row
			b-col(sm="12" md="12" lg="12")
				img.hero-image(
					:src="require('../assets/store.png')"
					alt=""
				)

	b-container
		b-row
			b-col(sm="12" md="12" lg="7" offset-lg="3")
				.text(style="margin-top: 50px;") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

	b-container.paragraph
		b-row
			b-col(sm="12" md="12" lg="7" offset-lg="3")
				.second-title Encounter While Building An
				.text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

	b-container.middle-dual-images-section
		b-row
			b-col(sm="12" md="12" lg="5" offset-lg="1")
				img(:src="require('../assets/shoes.png')" alt="")
			b-col(sm="12" md="12" lg="5")
				img(:src="require('../assets/clothes-row.png')" alt="")

	b-container.paragraph
		b-row
			b-col(sm="12" md="12" lg="7" offset-lg="3")
				.second-title Online Store
				.text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

	b-container.paragraph
		b-row
			b-col(sm="12" md="12" lg="7" offset-lg="3")
				.second-title Encounter While Building An
				.text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

	b-container
		b-row
			b-col(sm="12" md="12" lg="7" offset-lg="3").subscribe-form
				.second-title Subscribe to <br> our newsletter

				b-container
					b-row
						b-col(sm="12" md="12" lg="8" style="padding: 0;")
							input.third-title(type="text" placeholder="Email")
							.line
						b-col(sm="12" md="12" lg="4")
							//- div(style="text-align: right")
							//- 	img.button_image(src="@/assets/arrow-button-white.svg", alt="")
							//- 	.button_text Subscribe
							.button
								.button-text Subscribe
								.button-bar
									img.button_image(src="@/assets/arrow-button-white.svg", alt="")
									.button-text Subscribe

	b-container.recent
		b-row
			b-col(sm="12" md="12" lg="12" style="padding: 0;")
				.first-title Recent News
		b-row
			b-col.blog-card(
				sm="12" md="12" lg="4" 
				v-for="(article, index) in recentArticles" 
				:key="index"
				@click="toArticle(article.title)"
			)
				img(:src="article.pic")
				.second-title {{ article.title }}
				.text {{ article.date }}
				.text {{ article.text }}

	Footer


</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
	name: "SingleArticle",

	components: {
		Navbar,
		Footer,
	},

	data() {
		return {
			socialNetworks: [
				{
					pic: require('../assets/fb.svg'),
					link: 'https://facebook.com'
				},
				{
					pic: require('../assets/tw.svg'),
					link: 'https://twitter.com'
				},
				{
					pic: require('../assets/in.svg'),
					link: 'https://linkedin.com'
				},
				{
					pic: require('../assets/share.svg'),
					link: 'https://facebook.com'
				},
			],
			articles: [
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title:
            "7 Interacting Issues You May Encounter While Building An Online Store",
          text:
						"According to Statista, eCommerce will grow to 22% of all retail sales in the world by 2023. That’s 8% more compared to the figure in 2019.",
					pic: require('../assets/groceries.png')
        },
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title:
            "7 Interacting Issues You May Encounter While Building An Online Store",
          text:
						"According to Statista, eCommerce will grow to 22% of all retail sales in the world by 2023. That’s 8% more compared to the figure in 2019.",
					pic: require('../assets/shoes.png')
        },
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title: "Valentine’s Day Promotion Ideas For Ecommerce Stores",
          text:
						"According to the National Retail Federation, last year’s Valentine’s Day spending accounted for about $20 billion in revenue, with the average person spending over $160.",
					pic: require('../assets/groceries.png')
        },
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title: "Magento 2.3.4 Integration With Adobe Stock",
          text:
						"Magento 2.3.4, which is planned to go live on January 28, will include a module integrated with Adobe services. Thus, it will help merchants to use pictures from Adobe Stock right from...",
					pic: require('../assets/groceries.png')
				},
				{
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title:
            "7 Interacting Issues You May Encounter While Building An Online Store",
          text:
						"According to Statista, eCommerce will grow to 22% of all retail sales in the world by 2023. That’s 8% more compared to the figure in 2019.",
					pic: require('../assets/groceries.png')
        },
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title:
            "7 Interacting Issues You May Encounter While Building An Online Store",
          text:
						"According to Statista, eCommerce will grow to 22% of all retail sales in the world by 2023. That’s 8% more compared to the figure in 2019.",
					pic: require('../assets/shoes.png')
        },
      ]
		}
	},
	computed: {
		articleTitle() {
			let newTitle = this.$route.params.article.replace(/-/g, " ");

			// return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
			return newTitle
				.split(" ")
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join(" ");
		},
		article() {
			return this.articles.find(item => item.title.replace(/\s+/g, "-").toLowerCase() == this.articleTitle.replace(/\s+/g, "-").toLowerCase())
		},
		recentArticles() {
			return this.articles
				.filter(a => a.title != this.article.title)
				.slice()
				.splice(0, 3)
		}
	},
	methods: {
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
		toArticle(title) {
			let article = title.replace(/\s+/g, "-").toLowerCase()
		
			this.$router.push('/blog' + '/' + article)
		}
	},
	mounted() {
		this.intersectionObserverAnimation()
	}

}
</script>

<style lang="stylus">
@import "../styles/article.styl"
</style>
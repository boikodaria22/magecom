<template lang="pug">
#blog-page
	Navbar(:route="$route.path")

	b-container.search-bar-container
		b-row
			b-col(sm="12" md="12" lg="9")
				.title-text-wrapper
					.first-title.main-title Blog
			b-col(sm="12" md="12" lg="3")
				div(style="display: inline-block; width: 50%")
					input.third-title(type="text" placeholder="Search")
					.line

				div(style="display: inline-block; width: 50%")
					.button(style="display: inline-block")
						.button-text Find
						.button-bar
							img.button_image(src="@/assets/arrow-button.svg", alt="")
							.button-text Find

	b-container.blog-board-container
		b-row
			b-col.blog-board-cards(sm="12" md="12" lg="8")
				b-container(fluid)
					b-row
						b-col(sm="12" mg="12" lg="12")
							.main-card(
								@click="toArticle(articles[0].title)"
							)
								.card-text
									.second-title(style="dislpay: inline") {{ articles[0].title }}
									.text(style="dislpay: inline") {{ articles[0].date }}
					b-row
						b-col.blog-card.fade-in(
							sm="12" mg="12" lg="6" 
							v-for="(card, index) in cards" 
							:key="index"
							@click="toArticle(card.title)"
						)
							img(:src="card.pic")
							.second-title {{ card.title }}
							.text {{ card.date }}
							.text {{ card.text }}

			b-col.blog-board-list(sm="12" md="12" lg="4")
				b-container(fluid)
					b-row
						b-col(sm="12" md="12" lg="12").subscribe-form
							.second-title Subscribe to <br> our newsletter
							input.third-title(type="text" placeholder="Email")
							.line

							.button
								.button-text Subscribe
								.button-bar
									img.button_image(src="@/assets/arrow-button-white.svg", alt="")
									.button-text Subscribe

						b-col.blog-board-list-item.fade-in(
							sm="12" mg="12" lg="12" 
							v-for="article, index in articlesList" 
							:key="index"
							@click="toArticle(article.title)"
						)
							.line
							.second-title {{ article.title }}
							.text {{ article.date }}
							.text {{ article.text }}



</template>

<script>
import Navbar from "../components/Navbar"

export default {
	name: "BlogPage",

	components: {
		Navbar
	},

	data() {
		return {
			articles: [
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title:
            "7 Interacting Issues You May Encounter While Building An Online Store",
          text:
            "According to Statista, eCommerce will grow to 22% of all retail sales in the world by 2023. That’s 8% more compared to the figure in 2019."
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
            "Magento 2.3.4, which is planned to go live on January 28, will include a module integrated with Adobe services. Thus, it will help merchants to use pictures from Adobe Stock right from..."
				},
				{
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title:
            "7 Interacting Issues You May Encounter While Building An Online Store",
          text:
            "According to Statista, eCommerce will grow to 22% of all retail sales in the world by 2023. That’s 8% more compared to the figure in 2019."
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
		cards() {
			let filteredArticles = this.articles.slice()

			return filteredArticles.splice(1, 2)
		},
		articlesList() {
			let filteredArticles = this.articles.slice()

			return filteredArticles.slice(3)
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
		toArticle(title) {
			let article = title.replace(/\s+/g, "-").toLowerCase()
		
			this.$router.push('blog' + '/' + article)
		}
	},
	mounted() {
		this.intersectionObserverAnimation()
	}
}
</script>

<style lang="stylus">
@import "../styles/blog-page.styl"
</style>	
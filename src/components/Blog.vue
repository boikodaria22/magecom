<template lang="pug">
	b-container.blog-container
		//change class name !!!!!
		b-row.case-studies-row
			b-col.title-text-wrapper(sm="" md="" lg="9")
				.third-title.fade-in Blog
				.first-title.main-title Explore ecommerce trends and news
			b-col.fade-in(sm="" md="" lg="3" align-self="end")
				.button
					.button-text DISCOVERY BLOG
					.button-bar
						img.button_image(src="@/assets/arrow-button.svg", alt="")
						.button-text DISCOVERY BLOG


		b-row.blog-cards-row
			b-col(sm="12" md="12" lg="4").image-card
				img(src="@/assets/love.png", alt="")
			b-col(sm="12" md="12" lg="4" v-for="(article, index) in articles" :key="index").blog-card.fade-in
				.line(v-if="(index % 3 == 0) || (index == 1)")
				.second-title {{ article.title }}
				.text {{ article.date }}
				.text {{ article.text }}
			b-col(sm="12" md="12" lg="4").subscribe-form
				.second-title Subscribe to <br> our newsletter
				input.third-title(type="text" placeholder="Email")
				.line
	
				//- div(style="text-align: right")
				//- 	img.button_image(src="@/assets/arrow-button-white.svg", alt="")
				//- 	.button_text Subscribe
				.button
					.button-text Subscribe
					.button-bar
						img.button_image(src="@/assets/arrow-button-white.svg", alt="")
						.button-text Subscribe

</template>

<script>
export default {
	name: "Blog",

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
            "According to Statista, eCommerce will grow to 22% of all retail sales in the world by 2023. That’s 8% more compared to the figure in 2019."
        },
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title: "Valentine’s Day Promotion Ideas For Ecommerce Stores",
          text:
            "According to the National Retail Federation, last year’s Valentine’s Day spending accounted for about $20 billion in revenue, with the average person spending over $160."
        },
        {
          date: "29 JAN 2020 | Giana Rhiel Madsen",
          title: "Magento 2.3.4 Integration With Adobe Stock",
          text:
            "Magento 2.3.4, which is planned to go live on January 28, will include a module integrated with Adobe services. Thus, it will help merchants to use pictures from Adobe Stock right from..."
        }
      ]
		}
	}
}
</script>

<style>

</style>
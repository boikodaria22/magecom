<template lang="pug">
	b-container.features-container#features 
		b-row.features-row(style="height: 380px")
			b-col.feature-card(sm="12" md="12" lg="4" 
				v-for="(feature, index) in features" :key="index"
				@mouseover="featureHover = index" @mouseleave="featureHover = false"
				@click="toFeature(feature.title)"
			)
				.features_title(
					:class="featureHover === index ? 'orange-title-on-hover' : ''"
				) {{ feature.title }}
				
				.line.fade-in(
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
</template>

<script>
import DriveBusinessOnline from "../components/DriveBusinessOnline"

export default { 
	components: {
		DriveBusinessOnline
	},

	data() {
		return {
			featureHover: false,
			features: [
				{
					title: `Drive \nBusiness Online`,
					text:
						"Get an ecommerce website built from scratch to make your dreams come true. If you already have an e-store, then you could upgrade it with a set of customizations to increase sales and get your business to the next level.",
					text_hover: "•‎ Ecommerce Website From Scratch \n•‎ Web Development \n•‎ Migration to Magento 2.x \n•‎ Integrating with third-party systems \n•‎ DevOps and Infrastructure \n•‎ Support and Maintenance",
					buttonText: "Let’s upgrade"
				},
				{
					title: "Outstand!",
					text:
						"Grab attention and impress your visitors at first sight! Give your customers the best possible experience to let them make purchases in the most convenient and easiest way. It will instantly boost your conversion rates.",
					text_hover: "•‎ Web Design \n•‎ Conversion Rate Optimization \n•‎ Search Engine Optimization",
					buttonText: "Increase conversion"
				},
				{
					title: "Grow Expertly",
					text:
						"Stay one step ahead of your competitors if you want to win the race. Get extensional audits to increase the efficiency of your business. Advance your team with training to develop a high performance of your business.",
					text_hover: "•‎ Business Analysis \n•‎ SEO Audit \n•‎ Code and Performance Audit \n•‎ Security Audit \n•‎ Training and Consulting",
					buttonText: "Overtake competitors"
				}
			],
		}
	},
	
	methods: {
		toFeature(title) {
			let feature = title.replace(/\s+/g, "-").toLowerCase();

			// location.href = dashedTitle

			this.$router.push(feature);
		}
	}
}
</script>

<style>

</style>
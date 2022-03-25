<template lang="pug">
	#app
		router-view

		CustomCursor(
			:targets="cursorHoverTargets"
			:circleColor="'#ffffff'"
			:circleColorHover="'#1b1b1e'"
			:dotColor="'#ec5c2b'"
			:dotColorHover="'#1b1b1e'"
			:hoverSize="1.5"
		)
</template>

<script>
import CustomCursor from "@/components/CustomCursor"

export default {
	components: {
		CustomCursor
	},

	data() {
		return {
			cursorHoverTargets: [
				'a', 
				'img',
				'li', 
				'input',
				'form',
				'navbar-item',
				'sidebar-nav-container',
				'sidebar-nav-list',
				'modal-container',
				'modal-container-row',
				'left-form',
				'middle-info',
				'right-info',
				'other-ways',
				'email',
				'address',
				'phone',
				'file-type',
				'features_title', 
				'text',
				'button', 
				'button-text', 
				'button-bar-hover', 
				'first-title', 
				'second-title',
				'third-title',
				'number', 
				'canvas', 
				'brand-column', 
				'subscribe-form',
				'filter',
				'filter-width-expand',
				'category',
				'checkbox',
				'unchecked',
				'numbers-cell',
				'vacancy-back',
				'vacancy-back-bar',
				'vacancy-back-bar-hover'
			]
		}
	}
}
</script>

<style lang="stylus">
	* 
		cursor none

	html
		scroll-behavior smooth
		background-color #e5e5e5
		background-image url('/assets/crew.webp'), url('/assets/column-of-girls.png')
		

	#app, body
		padding 0
		margin 0
		// cursor url('./assets/cursor.svg'), auto
		background-color #e5e5e5

</style>

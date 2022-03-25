<template lang="pug">
    b-container.what-we-do-container#what-we-do(fluid v-show="isShowing")
      b-row 
        b-col(sm="12" md="12" lg="5")
          img.conference(src="@/assets/conference.png", alt="")

          img.play(src="@/assets/play-button.svg", alt="")

        b-col(sm="12" md="12" lg="7")
          .what-we-do-title.third-title What we do
          .wrapper.first-title
            .title-text-wrapper
              .main-title We boost ecommerce 
            .title-text-wrapper              
              .main-title businesses with 
            .title-text-wrapper  
              .main-title 360 degree solutions.
</template>

<script>
export default {
		name: "WhatWeDo",
		props: ['isShowing'],

    data() {
      return {
      }
    },
}
</script>
<template lang="pug">
b-container.hero-container
  Modal

  b-row#hero-title
    //- video.hero-background-video(autoplay muted loop)
    //-   source(src="@/assets/city-timelapse.webm" type="video/mp4")
    transition(appear name="hero-title-bottomTop")
      b-col 
        .backdrop.water
          .text.water Ecommerce
          .overlay.water
  b-row.hero-second-title
    transition(appear name="hero-second-title-bottomTop")
      b-col(offset-lg="6" v-show="showing.isSubTitleShowing") with flying
  b-row.hero-second-title
    transition(appear name="hero-second-title-bottomTop")
      b-col(offset-lg="4" v-show="showing.isSubTitleShowing") colors  
  b-container.after-title-hero-container
    transition(appear name="fadeIn")
      b-row(v-show="showing.isShowing")
        b-col(sm="12" md="12" lg="6")
          p.quote We help businesses grow online with the wide-ranging solutions we provide
          
        b-col(sm="12" md="12" lg="3")
          //- svg(width="278" height="278" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none; box-sizing: border-box; padding: 2em")
          //-   circle(id="jelly2" cx="139" cy="139" r="139" fill="#EC5C2B")
          //- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="400" style="display: none">
          //-   <path class="jelly-circle-svg" d="m200 97.218 108.07 78.524-41.28 127.04h-133.58l-41.281-127.04z"/>
          //- </svg>
          svg(width="1" height="1" style="position: absolute" version="1.1")
            circle(id="jelly" cx="200" cy="200" r="139")
          
          .jelly-container(@click="showModal")
            //- Canvas to draw the jelly pentagon
            canvas(class="jelly-canvas")
            //- Text in the centroid of the jelly pentagon
            .centroid-container
              .centroid-text#get-quote Get a free quote
        b-col(sm="12" md="12" lg="3")
          .sns FACEBOOK / INSTAGRAM
</template>

<script>
// import Jelly from "jelly.js";
import Modal from '../components/Modal'

export default {
  props: ['showing'],
  
  components: {
    Modal
  },

  data() {
    return {
      
    }
  },
	methods: {
    showModal() {
      let isModalShowing = document.querySelector('.modal-container').style.display = 'initial'

      isModalShowing === 'initial' ? 
      document.querySelector('.navbar').style.display = 'none' : 
      document.querySelector('.navbar').style.display = 'initial'
    }
		// jellyButtonInit() {
    //   let options = {
    //     paths: "#jelly", // Shape we want to draw
    //     pointsNumber: 10, // Number of points
    //     maxDistance: 70, // Max distance among points
    //     color: "#EC5C2B",
    //     centroid: ".centroid-text" // Element to move accordingly with the centroid of the shape
    //     // debug: true               // Uncomment this to see the points
    //   };

    //   /* Initializing jelly */

    //   let jelly = new Jelly(".jelly-canvas", options);

    //   document.getElementById('get-quote').style.cssText = "visibility: visible"

    //   console.log(jelly);
		// },
	}
}
</script>

<style>

</style>
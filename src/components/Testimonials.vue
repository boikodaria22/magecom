<template lang="pug">
b-container.testimonials-container
  b-row.testimonials-row
    b-col(sm="12" md="12" lg="6")
      b-container
        b-row.testimonials-table.fade-in
          b-col.brand-column 
            img(src="@/assets/brands/gaitline.svg", alt="")
          b-col.brand-column 
            img(src="@/assets/brands/dip-and-dive.svg", alt="")
          b-col.brand-column 
            img(src="@/assets/brands/emma-mason.svg", alt="")
          .w-100
          b-col.brand-column 
            img(src="@/assets/brands/brooklyn-popcorn.svg", alt="")
          b-col.brand-column 
            img(src="@/assets/brands/ahmad-tea.svg", alt="")
          b-col.brand-column 
            img(src="@/assets/brands/tea-and-coffee.svg", alt="")
          .w-100
          b-col.brand-column 
            img(src="@/assets/brands/made-of.svg", alt="")
          b-col.brand-column 
            img(src="@/assets/brands/zdegree.svg", alt="")
          b-col.brand-column 
            img(src="@/assets/brands/zdegree.svg", alt="")

    b-col(sm="12" md="12" lg="6").testimonials-info
      .third-title.fade-in Testimonials
      .title-text-wrapper
        .first-title.main-title What our clients
      .title-text-wrapper
        .first-title.main-title say about us
      .third-title.fade-in We have built several websites with Magecom team. They are extremely skilled and professional, experienced in a wide  variety of web technologies, and they are very good about meeting timelines and budgets. There is no question that Magecom is our first choice for addressing our Web development needs.
      .author.fade-in
        .second-title Brian S. Pauls
        .text President PerAspera Consulting
      .button.fade-in
        .button-text VIEW CASE
        .button-bar
          img.button_image(src="@/assets/eye-button.svg", alt="")
          .button-text VIEW CASE

</template>

<script>
export default {

}
</script>

<style>

</style>
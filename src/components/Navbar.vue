<template lang="pug">
transition(appear name="fadeIn")
  b-navbar.navbar-container.bg-black(toggleable="lg" fixed="top")

    b-container(style="position: relative")

      img.sidebar-icon(
        v-b-toggle.sidebar-1
				style="cursor: none;" 
        :src="route === '/portfolio' && !moveEllipse ? require('@/assets/sidebar-icon-white.svg') : require('@/assets/sidebar-icon.svg')"
      )

      //SIDEBAR
      b-sidebar(id="sidebar-1" shadow backdrop backdrop-variant="dark")
        b-container(fluid style="margin: 0; padding: 0")
          b-row.sidebar-nav-info-row
            b-col(sm="6" md="6" lg="6")
              img.sidebar-logo(
                src="@/assets/magecom-logo.svg" 
                alt="MageCom" 
              )

              .sidebar-nav-container
                ul.sidebar-nav-list
                  li(@click="$router.push({path: '/', hash: '#what-we-do'})") What We Do
                  li(@click="$router.push('/portfolio')") Portfolio 
                  li(@click="$router.push('/careers')") Careers
                  li(@click="$router.push('/blog')") Blog
                  li Contact

            b-col.sidebar-info-column(sm="6" md="6" lg="6")
              .sidebar-info-column-container
                b-row.sidebar-info-column-row
                  b-col(sm="6" md="6" lg="6")
                    .category Email
                    .third-title sales@magecom.net
                  b-col(sm="6" md="6" lg="6")
                    .category Phone
                    .third-title +17 0475 09 991

                b-row.sidebar-info-column-row
                  b-col(sm="6" md="6" lg="6")
                    .category Office
                    .third-title 20-22 Wenlock Road <br> London N1 7GU <br> United Kingdom
                  b-col(sm="6" md="6" lg="6")
                    .category Massengers
                    ul.social-networks.third-title
                      li Telegram
                      li Skype
                      li Whatsapp 
                      li Fb messenger  

              ul.third-title.social-networks-links_list
                li Linked In
                li Twitter
                li YouTube
                li Facebook
                li Instagram
      //SIDEBAR END

      b-navbar-brand(@click="$router.push('/')")
        img.navbar_brand-logo(
          src="@/assets/magecom-logo.svg" 
          alt="MageCom"
        )

      b-navbar-toggle.bg-light(target="nav-collapse")

      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item(
            @click="$router.push({path: '/', hash: '#what-we-do'})"
          ) 
            .navbar-item(
              :class="moveEllipse === true ? 'navbar-item-case-studies' : ''"
            ) WHAT WE DO
          b-nav-item(
            @click="$router.push('/portfolio')"
          ) 
            .navbar-item(
              :style="route === '/portfolio' ? {'color': '#EC5C2B'} : {}"
              :class="moveEllipse === true ? 'navbar-item-case-studies' : ''"
            ) PORTFOLIO
          b-nav-item(
            @click="$router.push('/careers')"
          ) 
            .navbar-item(
              :style="route === '/careers' ? {'color': '#EC5C2B'} : {}"
              :class="moveEllipse === true ? 'navbar-item-case-studies' : ''"
            ) CAREERS
          b-nav-item(
            @click="$router.push('/blog')"
          ) 
            .navbar-item(
              :style="route === '/blog' ? {'color': '#EC5C2B'} : {}"
              :class="moveEllipse === true ? 'navbar-item-case-studies' : ''"
            ) BLOG
          b-nav-item 
            .navbar-item(
              :class="moveEllipse === true ? 'navbar-item-case-studies' : ''"
            ) CONTACT US

</template>

<script>
export default {
  props: ['route', 'moveEllipse'],

  methods: {
    hideNavbarOnScroll() {
      let navbar = document.querySelector('.navbar')

      window.addEventListener('scroll', function() {
        navbar.style.display = "none"

        if(!window.scrollY) 
          navbar.style.display = "flex"
      }) 
    }
  },
  mounted() {
    this.hideNavbarOnScroll()
  }
}
</script>

<style>

</style>
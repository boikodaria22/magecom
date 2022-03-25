import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main.vue'
import DriveBusinessOnline from '../components/DriveBusinessOnline.vue'
import Solution from '../components/Solution.vue'
import Portfolio from '../components/Portfolio.vue'
import Careers from '../components/Careers.vue'
import Vacancy from '../components/Vacancy.vue'
import CaseStudy from '../components/CaseStudy.vue'
import BlogPage from '../components/BlogPage.vue'
import SingleArticle from '../components/SingleArticle.vue'


Vue.use(VueRouter)

  //static routes first
  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
	},
	{
		path: '/blog/:article',
		name: 'SingleArticle',
		component: SingleArticle,
	},
  {
    path: '/case-studies/:case',
    name: 'CaseStudy',
    component: CaseStudy,
  },
  {
    path: '/careers/:vacancy',
    name: 'Vacancy',
    component: Vacancy,
  },
  {
    path: '/:feature',
    name: 'DriveBusinessOnline',
    component: DriveBusinessOnline,
  },
  {
    path: '/:feature/:solution',
    name: 'Solution',
    component: Solution,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { y: 0 };
  }
})

export default router

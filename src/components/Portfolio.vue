<template lang="pug">
#portfolio(
	:style="moveEllipse ? {'background-color': '#e5e5e5', 'transition': '.3s'} : {}"
)
	Navbar(:route="$route.path" :moveEllipse="moveEllipse")

	b-container.title-container
		b-row(style="position: relative")
			b-col(sm="12" md="12" lg="7" offset-lg="1" style="margin-top: auto; margin-bottom: auto; position: absolute; top: 20%")
				.title-text-wrapper
					.first-title.main-title(
						:class="moveEllipse ? 'first-title-case-studies main-title-anim' : 'main-title-anim'"
					) We've created
				.title-text-wrapper
					.first-title.main-title(
						:class="moveEllipse ? 'first-title-case-studies main-title-anim' : 'main-title-anim'"
					) efficient  
						span(style="color: #EC5C2B;") {{ moveEllipse ? 'case studies' : 'stores' }}
			b-col(sm="12" md="12" lg="5" offset-lg="7")
				.ellipse(
						@click="(moveEllipse = !moveEllipse); perspectiveHover('.js-perspective-card', 4); intersectionObserverAnimation()"
						:class="moveEllipse ? 'ellipse-move-right' : ''"
					) 
					.ellipse-text(
						:style="moveEllipse ? {'color': '#F2F2F2'} : {}"
					) Check <br> {{ moveEllipse ? 'Stores' : 'Case studies' }}


	b-container.brands-container

		//FILTER
		.filter
			img.expand-collapse-button(src="@/assets/plus-button.svg" @click="onPlusButtonClick")
			.third-title.filter-title(
				:style="moveEllipse ? {'color': '#1b1b1e'} : {}"
			) FILTER
			.third-title.clear-all.fade-in(@click="clear(filters)") CLEAR ALL

			b-container
				b-row
					b-col(sm="12" md="12" lg="6" v-for="(filterCategory, categoryIndex) in filters" :key="categoryIndex")
						.category.fade-in
							.third-title.fade-in {{ filterCategory.name }}

							.checkbox(
								v-for="(check, checkIndex) in filterCategory.checks" 
								:key="checkIndex"
								@click="checkFilter(filterCategory, check, checkIndex)"
							)
								img(src="@/assets/check.svg" alt="" v-if="filterCategory.checked.includes(checkIndex)")
								.unchecked(v-else)
								.text {{ check }}

				.line
				
				b-row.apply-row
					b-col(sm="12" md="12" lg="12")
						img(src="@/assets/eye.svg")
						.third-title APPLY FILTERS

						div {{ filters.checked }}
		//FILTER END

		.line(:style="moveEllipse ? {'background': '#1b1b1e'} : {'background': '#fff'}")
		b-row.brands-container-row(
			v-for="(brand, index) in brands" 
			:key="index"
			@mouseover="brandHover = index" 
			@mouseleave="brandHover = false"
			v-if="!moveEllipse"
		)
			img.brand-pic(
					:src="brand.pic" 
					:class="brandHover === index ? 'brand-pic-hover' : ''"
					:style="brand.name === 'Ahmad Tea' ? {'right': '500px'} : {}"
				)
			b-col(sm="12" md="12" lg="9")
				b-container(style="padding: 0; margin: 0;")
					b-row
						b-col(sm="12" md="12" lg="5")
							.third-title {{ brand.category }}
							.first-title(:class="brandHover === index ? 'first-title-hover' : ''") {{ brand.name }}
						b-col(sm="12" md="12" lg="7" v-show="brandHover === index")
							.tag-wrap(
								v-for="(tag, index) in brand.tags" 
								:key="index"
							)
								.text {{ tag }}

			b-col(sm="12" md="12" lg="3" v-if="brandHover !== index")
				.text(style="text-align: right") {{ brand.info }}
				.third-title(style="text-align: right") {{ brand.country }}		
			
			b-col(sm="12" md="12" lg="3" v-else)
				.third-title(
					style="text-align: right; color: #EC5C2B;"
					:class="brandHover === index ? 'fade-in-anim' : ''"
				) {{ brand.link }}
			
			.line(:class="!moveEllipse ? 'line-anim' : ''")

	//case studies list
	CaseStudies(:moveEllipse="moveEllipse" v-show="moveEllipse")

	Footer

</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";

export default {
	name: "Portfolio",
	components: {
		Navbar,
		Footer,
		CaseStudies,
	},

	data() {
		return {
			moveEllipse: false,
			filterExpand: false,
			filters: [
				{
					name: "Industry",
					checks: [
						"All industries",
						"Auto",
						"Beauty",
						"Fashion",
						"Food & Beverages",
						"Gadgets",
						"Home & Garden"
					],
					checked: []
				},
				{
					name: "Region",
					checks: [
						"All regions",
						"France",
						"USA",
						"Sweden",
						"Norway",
						"Germany",
						"International"
					],
					checked: []
				}
			],
			filteredBrands: [],
			brandHover: false,
			brands: [
				{
					category: "Food & Beverages",
					name: "Made Of",
					info: "A US-based, organic childcare products online store",
					country: "France",
					link: "www.madeof.com",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Fashion",
					name: "Ila",
					info: "A designer jewelry retailer developed on Magento 2",
					country: "France",
					link: "www.ila.com",
					pic: require("../assets/ila-pic.png"),
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Food & Beverages",
					name: "Ahmad Tea",
					info: "One of the largest tea manufacturers in the world — Ahmad Tea",
					country: "International",
					link: "www.ahmadtea.com",
					pic: require("../assets/ahmad-tea-pic.png"),
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Online Store",
					name: "Gaitline",
					info: "A Norwegian footwear company selling sports shoes",
					country: "Norway",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Fashion",
					name: "Blush Me",
					info: "A Swedish online Magento 2 store, which sells sex toys around",
					country: "Sweden",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Online Store",
					name: "Dip’n’Dive",
					info: "A diving retailer from the USA, which sells snorkeling",
					country: "USA",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Fashion",
					name: "Klymen",
					info: "An online store from the USA, which sells used smartphones",
					country: "USA",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Food & Beverages",
					name: "Overhemden",
					info:
						"An online clothing store for men, which assortment is represented",
					country: "Germany",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Food & Beverages",
					name: "Made Of",
					info: "A US-based, organic childcare products online store",
					country: "France",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Fashion",
					name: "Tebox",
					info:
						"An online clothing store for men, which assortment is represented",
					country: "Denmark",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				},
				{
					category: "Fashion",
					name: "Formularus",
					info: "A Magento organic childcare products store",
					country: "France",
					link: "",
					pic: "",
					tags: [
						"Magento Performance tuning",
						"Responsive Magento theme",
						"Development",
						"Magento web development"
						// "Magento setup"
					]
				}
			],
		};
	},
	computed: {},
	methods: {
		intersectionObserverAnimation() {
			// document.getElementById("navbar").scrollIntoView();
			const elements = [
				"line",
				"main-title",
				"fade-in",
				"features-text-and-button"
			];
			//массив найденных элементов
			let selectedElements = [];
			//находим элементы из массива в ДОМе
			elements.forEach(element => {
				selectedElements.push(document.querySelectorAll("." + element));
			});
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
							if (entry.target.classList.contains(el))
								entry.target.classList.add(el + "-anim");
						});
						observer.unobserve(entry.target);
					}
				});
			}, options);
			selectedElements.forEach(se => {
				se.forEach(target => observer.observe(target));
			});
		},
		checkFilter(filterCategory, check, checkIndex) {
			// console.log(check);

			// let checkIndustry, checkRegion

			// //распределяем категории
			// if(this.filters[0].checks.includes(check)) {
			// 	checkIndustry = check

			// 	// если отфильтрованный массив пусой то пушим элементы выбранные по индустрии
			// 	if (this.filteredBrands.length == 0) {
			// 		this.filteredBrands.push(...this.brands.filter(b => b.category == checkIndustry))
			// 	} else {
			// 		// console.log(this.filteredBrands.find(b => b.category == checkIndustry) == false);
			// 		// this.filteredBrands.concat(this.brands.filter(b => b.category == checkIndustry))
			// 		if (this.filteredBrands.find(b => b.category == checkIndustry)) {
			// 			this.filteredBrands = this.filteredBrands.filter(b => b.category != checkIndustry)

			// 			console.log(check + ' is in the array so DELETED');
			// 		} else {
			// 			this.filteredBrands = this.filteredBrands.concat(this.brands.filter(b => b.category == checkIndustry))

			// 			console.log(check + ' is in NOT the array and ADDED');
			// 		}
			// 	}
			// 		// this.filteredBrands this.filteredBrands.concat(this.brands.filter(b => b.category == checkIndustry))

			// 	// console.log("You checked: " + check + " from Industry");
			// 	// console.log(this.brands.filter(b => b.category == checkIndustry));
			// }

			// if(this.filters[1].checks.includes(check)) {
			// 	checkRegion = check

			// 	// если отфильтрованный массив пусой то пушим элементы выбранные по индустрии
			// 	if (this.filteredBrands.length == 0) {
			// 		this.filteredBrands.push(...this.brands.filter(b => b.country == checkRegion))
			// 	} else {
			// 		// console.log(this.filteredBrands.find(b => b.category == checkIndustry) == false);
			// 		// this.filteredBrands.concat(this.brands.filter(b => b.category == checkIndustry))
			// 		if (this.filteredBrands.find(b => b.country == checkRegion)) {
			// 			this.filteredBrands = this.filteredBrands.filter(b => b.country != checkRegion)

			// 			console.log(check + ' is in the array so DELETED');
			// 		} else {
			// 			this.filteredBrands = this.filteredBrands.concat(this.brands.filter(b => b.country == checkRegion))

			// 			console.log(check + ' is in NOT the array and ADDED');
			// 		}
			// 	}
			// 		// this.filteredBrands this.filteredBrands.concat(this.brands.filter(b => b.category == checkIndustry))

			// 	// console.log("You checked: " + check + " from Industry");
			// 	// console.log(this.brands.filter(b => b.category == checkIndustry));
			// }

			//плюсик

			if (!filterCategory.checked.includes(checkIndex)) {
				filterCategory.checked.push(checkIndex);
			} else {
				let filtered = filterCategory.checked.filter(c => c !== checkIndex);

				filterCategory.checked = filtered;
			}

			//TODO
			//записывать поиск в отдельный объект и искать поля объекта в массиве брендов
		},
		clear(filters) {
			filters.forEach(f => (f.checked = []));

			this.filteredBrands = [];
		},
		onPlusButtonClick() {
			const button = document.querySelector(".expand-collapse-button")
			const filter = document.querySelector(".filter");
			const categories = document.querySelectorAll(".category");
			const text = document.querySelectorAll(".filter .fade-in");
			const title = document.querySelector(".filter-title");

			this.filterExpand = !this.filterExpand;

			//expand filter panel
			if (this.filterExpand === true) {
				new Promise(resolve => {
					button.classList.add("expand-collapse-button-rotate");
					filter.classList.add("filter-rounded");

					resolve(filter);
				})
				.then(filter => {
					setTimeout(() => {
						filter.classList.add("filter-width-expand", "filter-rounded");

						if(this.moveEllipse) 
							title.style.color = "#ffffff"
						
					}, 500)

					return filter
				})
				.then(filter => {
					setTimeout(() => {
						filter.style.maxHeight = filter.scrollHeight + "px";
						
						filter.classList.add("filter-height-expand");
						
					}, 800);
					
					return filter
				})
				.then(filter => {
					setTimeout(() => {
						filter.classList.remove("filter-rounded");
					}, 1000);
					
					return filter
				})
				.then(() => {
					setTimeout(() => {
						categories.forEach(c => c.classList.add("fade-in-anim"))
						text.forEach(c => c.classList.add("fade-in-anim"))	
					}, 1000)
				})
			} 
			//collapse filter panel
			else {
				new Promise((resolve) => {
					button.classList.remove("expand-collapse-button-rotate");
					filter.classList.add("filter-rounded");

					categories.forEach(c => c.classList.remove("fade-in-anim"))
					text.forEach(c => c.classList.remove("fade-in-anim"))	

					resolve(filter)
				})
				.then(filter => {
					setTimeout(() => {
						filter.style.maxHeight = '43px'
						
						filter.classList.remove("filter-height-expand");
					}, 500)

					return filter
				})
				.then(filter => {
					setTimeout(() => {
						filter.classList.remove("filter-width-expand")

						if(this.moveEllipse) 
							title.style.color = "#1b1b1e"
					}, 800)

					return filter
				})
				.then(filter => {
					setTimeout(() => {
						filter.classList.remove("filter-rounded")
					}, 1200)
				})
			}
		},
		perspectiveHover(el, intensity) {
      var self = this,
        parents = document.querySelectorAll(".js-perspective"),
        cards = document.querySelectorAll(".perspective-card")

      this.perspective = function(e, el) {
        var elX = el.offsetLeft,
          elY = el.offsetTop,
          elWidth = el.offsetWidth,
          elHeight = el.offsetHeight;

        var mouseX = e.clientX,
          mouseY = e.clientY;

        var rotateY = -(
            ((elWidth / 2 - (mouseX - elX)) / (elWidth / 2)) *
            intensity
          ),
          rotateX = ((elHeight / 2 - (mouseY - elY)) / (elHeight / 2)) * intensity;

        el.style.transform =
          "rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
        
        // console.log('(' + rotateX + ', ' + rotateY + ')')
        // console.log(elX, elY, elWidth, elHeight);
        // console.log(mouseX, mouseY);
      };

      parents.forEach((parent) => parent.addEventListener("mousemove", function(e) {
        if (e.target.classList.contains("js-perspective-card")) {
          self.perspective(e, e.target);
        }
      }));

      this.reset = function(el) {
        el.style.transform = "";
      };

      cards.forEach((card) => card.addEventListener("mouseleave", function() {
        self.reset(this)
			}))
		
    }
	},
	mounted() {
		this.intersectionObserverAnimation();
	}
};
</script>

<style lang="stylus">
@import '../styles/portfolio.styl';
</style>
(function () {
	"use strict";

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all);
		if (selectEl) {
			if (all) {
				selectEl.forEach((e) => e.addEventListener(type, listener));
			} else {
				selectEl.addEventListener(type, listener);
			}
		}
	};

	/**
	 * Easy on scroll event listener
	 */
	const onscroll = (el, listener) => {
		el.addEventListener("scroll", listener);
	};

	/**
	 * Back to top button
	 */
	let backtotop = select(".back-to-top");
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add("active");
			} else {
				backtotop.classList.remove("active");
			}
		};
		window.addEventListener("load", toggleBacktotop);
		onscroll(document, toggleBacktotop);
	}

	/**
	 * Mobile nav toggle
	 */
	on("click", "#hamburger", function (e) {
		console.log("Hamburger clicked");
		select("#navbar").classList.toggle("navbar-mobile");
		select("#header").classList.toggle("extend-to-bottom");
		this.classList.toggle("bi-list");
		this.classList.toggle("bi-x");
	});

	/**
	 * Close mobile nav when nav-item clicked
	 */

	$(".nav-link").on("click", (e) => {
		select("#navbar").classList.remove("navbar-mobile");
		select("#header").classList.remove("extend-to-bottom");
		select("#hamburger").classList.add("bi-list");
		select("#hamburger").classList.remove("bi-x");
	});

	/**
	 * Preloader
	 */
	let preloader = select("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.remove();
		});
	}

	/**
	 * Testimonials slider
	 */
	new Swiper(".testimonials-slider", {
		speed: 600,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",
		pagination: {
			el: ".swiper-pagination",
			type: "bullets",
			clickable: true,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},

			1200: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
		},
	});

	/**
	 * Animation on scroll
	 */
	// window.addEventListener('load', () => {
	// 	AOS.init({
	// 		duration: 1000,
	// 		easing: 'ease-in-out',
	// 		once: true,
	// 		mirror: false
	// 	})
	// });

	/**
	 * Initiate Pure Counter
	 */
	new PureCounter();
})();

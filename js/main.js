const swiper = new Swiper('.main__slider', {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.main__slider-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
});

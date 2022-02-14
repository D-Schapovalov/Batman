const swiper = new Swiper('.main__slider', {
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: '.main__slider-next',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
	},
});
const burgerBtn = document.querySelector('.header__burger');
const span = document.querySelectorAll('.header__burger-item');
const menu = document.querySelector('.header__wrap');

burgerBtn.addEventListener('click', () => {
	span.forEach(element => {
		element.classList.toggle('header__burger-item_active');
	});
	menu.classList.toggle('header__wrap_active');
});
// slider
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
// menu-burger
const burgerBtn = document.querySelector('.header__burger'),
	span = document.querySelectorAll('.header__burger-item'),
	menu = document.querySelector('.header__wrap');

burgerBtn.addEventListener('click', () => {
	span.forEach(element => {
		element.classList.toggle('header__burger-item_active');
	});
	menu.classList.toggle('header__wrap_active');
});
// modal-window
const modalOverflov = document.querySelector('.modal-overflov'),
	playBtn = document.querySelector('.main__btn-play');

playBtn.addEventListener('click', () => {
	modalOverflov.classList.add('show');
});
// ========== мое решение ===========
modalOverflov.addEventListener('click', () => {
	modalOverflov.classList.remove('show');
});

// ============ решение из урока =========
// modalOverflov.addEventListener('click', (e) => {
// 	const modalInner = e.target.closest('.modal-inner');
// 	if (!modalInner) {
// 		modalOverflov.classList.remove('show');
// 	}
// });
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.swiper', {
	slidesPerView: '4',
	loop: true,
	spaceBetween: 0,
});

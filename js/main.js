const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
	menu.classList.toggle('disp');
});

// let burger = document.querySelector('.burger'), menu = document
// .querySelector('.burger-slide')
// burger.addEventListener('click', function(event) {
// menu.toggle('active')
// });
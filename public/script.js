const setTheme = (theme) => (document.documentElement.className = theme);

const hamburger = document.querySelector(".hamburger");
const filters = document.querySelector(".filters");

function myFunction() {
	filters.classList.toggle("active");
}

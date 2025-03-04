// Carousel

// Array

const slides = [
	{
		image: "slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Arrows constants

const ArrowLeft = document.querySelector(".arrow_left");
const ArrowRight = document.querySelector(".arrow_right");

// Others variables

const dots = document.querySelector(".dots");
let index = 0;

// Images/texts constants

const img = document.querySelector("#banner .banner-img");
const tagLine = document.querySelector("#banner p");

// Display dots

function displayDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		if (i == index) {
			dot.classList.add("dot_selected");
		}
	}
}
displayDots();

// Left click changes

function leftclick() {
	ArrowLeft.addEventListener("click", () => {
		const slideDots = document.querySelectorAll(".dots .dot");
		slideDots[index].classList.remove("dot_selected");
		index--;
		if (index < 0) {
			index = slides.length -1;
		}
		slideDots[index].classList.add("dot_selected");
		img.src = `./assets/images/slideshow/${slides[index].image}`;
		tagLine.innerHTML = `<p>${slides[index].tagLine}</p>`
	});
}
leftclick();

// Right click changes

function rightclick() {
	ArrowRight.addEventListener("click", () => {
		const slideDots = document.querySelectorAll(".dots .dot");
		slideDots[index].classList.remove("dot_selected");
		index++;
		if (index > slides.length - 1) {
			index = 0;
		}
		slideDots[index].classList.add("dot_selected");
		img.src = `./assets/images/slideshow/${slides[index].image}`;
		tagLine.innerHTML = `<p>${slides[index].tagLine}</p>`
	});
}
rightclick();
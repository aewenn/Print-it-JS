// Carrousel

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
console.log(slides);

// Constantes des flèches

const ArrowLeft = document.querySelector(".arrow_left");
const ArrowRight = document.querySelector(".arrow_right");

// Autres variables

const dots = document.querySelector(".dots");
let index = 0;
const img = document.querySelector("#banner .banner-img");
const tagLine = document.querySelector("#banner p");

// Affichage des dots

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

// Clic gauche
function leftclick() {
	ArrowLeft.addEventListener("click", () => {
		console.log("left");
	});
}
leftclick();

// Clic droit
function rightclick() {
	ArrowRight.addEventListener("click", () => {
		index++;
		console.log(index);
		if (index > slides.length) {
			index = 0;
		}
		img.src = `./assets/images/slideshow/${slides[index].image}`;
		tagLine.innerHTML = `<p>${slides[index].tagLine}</p>`
	});
}
rightclick();




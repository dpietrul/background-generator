var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient () {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

let exp = 100;
let wiz = false;

if (exp > 90) {
	let wiz = true;
	console.log("inside", wiz);
}

console.log("outside", wiz);

function greet(name='', age=30, pet='cat') {
	return `Hello ${name} you are ${age} with a ${pet}`; 
}
//Hamburger
let menuKnop = document.querySelector(".hamburger");
let navMenu = document.querySelector("nav");
let mijnSpan = document.querySelector("span");


function toonMenu() {
if(navMenu.style.display === "flex") {
navMenu.style.display = "none";
mijnSpan.getAttribute("class");
mijnSpan.setAttribute("class", "hamburger");
}
else {
navMenu.style.display = "flex";
mijnSpan.getAttribute("class");
mijnSpan.setAttribute("class", "close");
}
}
menuKnop.addEventListener("click",  toonMenu);


//dark mode
let darkLink = document.querySelectorAll("body a")[5];
let lightLink = document.querySelectorAll("body a")[4];
let mijnCSS = document.querySelector("#switchcss");

function switchToLight() {
	mijnCSS.setAttribute("href","stijl-light.css");
}
function switchToDark() {
	mijnCSS.setAttribute("href","stijl-dark.css");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);

// portfolio popup
const images = document.querySelectorAll(".portfolio-item img");
const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.getElementById("close");

images.forEach(img=>{
img.addEventListener("click", ()=>{
popup.style.display="flex";
popupImg.src = img.src;
});
});

if(closeBtn){
closeBtn.onclick = ()=>{
popup.style.display="none";
};
}

// reveal animation
function reveal(){
const reveals = document.querySelectorAll(".reveal");

reveals.forEach(el=>{
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);


// dark mode
const darkBtn = document.getElementById("dark-mode");

if(darkBtn){
darkBtn.onclick = () => {
document.body.classList.toggle("dark-mode");
};
}


// portfolio filter
function filterSelection(category){

let items = document.querySelectorAll(".portfolio-item");

items.forEach(item=>{
if(category === "all" || item.classList.contains(category)){
item.style.display="block";
}else{
item.style.display="none";
}
});

}


// typing animation
const text = "Creative Designs That Build Powerful Brands";
let i = 0;

function typing(){
if(i < text.length){
document.querySelector(".typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,50);
}
}

if(document.querySelector(".typing")){
typing();
}
let slide = 0;
const testimonials = document.querySelectorAll(".testimonial");

function showSlide(){
testimonials.forEach(t => t.classList.remove("active"));

slide++;

if(slide > testimonials.length){
slide = 1;
}

testimonials[slide-1].classList.add("active");

setTimeout(showSlide,4000);
}

showSlide();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle){
menuToggle.onclick = ()=>{
navLinks.classList.toggle("active");
}
}
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,20);

}

else{

counter.innerText = target;

}

};

updateCounter();

});
document.addEventListener("DOMContentLoaded", function(){

const skills = document.querySelectorAll(".skill-bar span");

function animateSkills(){

skills.forEach(skill => {

const skillTop = skill.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(skillTop < screenHeight - 100){

skill.style.width = skill.dataset.width;

}

});

}

window.addEventListener("scroll", animateSkills);
animateSkills();

});

function openService(service){

const content = document.getElementById("service-content");
const popup = document.getElementById("service-popup");

if(service === "logo"){
content.innerHTML = `
<h2>Logo Design</h2>
<p>I create professional brand logos that help businesses stand out and build trust.</p>
<a href="contact.html" class="btn">Work With Us</a>
`;
}

popup.style.display = "flex";

}

const closeService = document.getElementById("close-service");

if(closeService){
closeService.onclick = ()=>{
document.getElementById("service-popup").style.display="none";
};
}
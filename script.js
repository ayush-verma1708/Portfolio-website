// Sticky Navigation Menu Js

let theme = localStorage.getItem('theme')
if(theme==null){
    setTheme('blue')
}else{
    setTheme(theme)
}

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity ="0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

//Typing animation script
var typed = new Typed(".typing",{
    strings: ["Web Developer","Graphic Designer","App Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true,
});

// Side Navifation Bar close while we click on navigation links

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i< navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents ="auto";
    });
}

let themeDots = document.getElementsByClassName('theme-dot')

for(var i=0;themeDots.length>i;i++){
    themeDots[i].addEventListener('click',function(){
        let mode = this.dataset.mode
        console.log('Option clicked',mode)
        setTheme(mode)
    })
}
function setTheme(mode){
    if(mode =="light"){
        document.getElementById('theme-style').href ="style3.css"
    }
    if(mode =="dark"){
        document.getElementById('theme-style').href ="pink.css"
    }
    localStorage.setItem('theme',mode)
}

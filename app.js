// BUTTON SELECTION

const btn = document.querySelector('.menu');

// NAVIGATION SELECTION

const nav = document.querySelector('.navigation');



const menuIC = document.querySelector(".header");


btn.addEventListener('click', function () {
    nav.style.width = "350px";
    btn.style.marginLeft = "340px";
    btn.style.zIndex = "1";
   
})
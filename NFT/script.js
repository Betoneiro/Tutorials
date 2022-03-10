'use strict'

// For the mobile menu, I used one of the simples practices:

//1 - stored the mobile menu (which is the hamburguer) and the navbar itself on variables
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

// 2 - created an event listener attached to the ham menu that'd trigger the mobile menu whenever the user clicked on it
menu.addEventListener('click', function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
})

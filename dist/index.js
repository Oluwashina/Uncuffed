// toggle open and close of hamburger on mobile
const openNav = document.querySelector('#open');
const closeNav = document.querySelector('#close');

const navmenu = document.querySelector("#navmenu")

openNav.addEventListener("click", function(){
    navmenu.classList.remove('hidden')
})

closeNav.addEventListener("click", function(){
    navmenu.classList.add('hidden')
})
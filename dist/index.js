
 // initialize swiper
 var swiper = new Swiper(".mySwiper", {
    speed: 800,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    mousewheelControl: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

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
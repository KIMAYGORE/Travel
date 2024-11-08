// The querySelector() method returns the first element that matches a CSS selector.
// To return all matches (not only the first), use the querySelectorAll() instead.
// Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('#search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let registrationForm = document.querySelector('.registration-form-container');
let searchForm = document.querySelector('.search-form');

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

let videoBtn = document.querySelectorAll('.vid-btn');



document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

// onscroll: Slide in an element when the user has scrolled down 350 pixels from the top of the page

window.onscroll = () =>{
  navbar.classList.remove('active');
  menu.classList.remove('fa-times');
  loginForm.classList.remove('active');
  searchBtn.classList.remove('fa-times');
  searchBar.classList.remove('active');
  searchForm.classList.remove('active');

 }

//  addEventListener: Add a click event to a <button> element:

menu.addEventListener('click', () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
   loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
 });

 

 videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
 });

 var swiper = new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction:false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        }

    },
});

let hamburger = document.querySelector('.hamburger');
let navElements = document.querySelector('.navbar-elements')
let navlinks = document.querySelectorAll('.navbar-elements li')
let cancelBtn = document.querySelector('.fa-times')
hamburger.addEventListener('click', (e) => {
    navElements.classList.add('active')
})

cancelBtn.addEventListener('click', (e) => {
    navElements.classList.remove('active')
})
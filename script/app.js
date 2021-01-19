'use strict'

let burger = document.querySelector('.burger'),
    nav = document.querySelector('.header_nav'),
    navLink = document.querySelectorAll('.nav_link')


window.onscroll = () => {
    if (window.scrollY > 100) {
       burger.style.cssText = 'background: #A5B0C3'
    }
}

burger.onclick = () => {
    nav.classList.toggle('header_active')
}

for (let i of navLink){
    i.onclick = () => nav.classList.remove('header_active')
}

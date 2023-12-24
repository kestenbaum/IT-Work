//const
const getSelectorBurger = document.querySelector('.burger')
const getSelectorHeaderNavigate = document.querySelector('.header_nav')
const getSelectorHeaderNavigateLink = document.querySelectorAll('.nav_link')

//Scroll
window.onscroll = () => window.scrollY > 100 ? getSelectorBurger.style.cssText = 'background: #A5B0C3' : null

//BurgerMenu functional
getSelectorBurger.onclick = () => getSelectorHeaderNavigate.classList.toggle('header_active')

for (let element of getSelectorHeaderNavigateLink){
    element.onclick = () => getSelectorHeaderNavigate.classList.remove('header_active')
}

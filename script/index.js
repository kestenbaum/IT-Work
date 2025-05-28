const getSelectorHeroDescription = document.querySelector('.hero__description');
const buttons = document.querySelectorAll('.accordion-wrapper');
const burger_menu = document.querySelector('.burger__menu');
const burger_navigate = document.querySelector('.burger__navigate');

const HERO_TEXT = "We’ve been helping startups launch and grow their businesses. We help you to fill the gap between development, design and product management.";
let index = 0;

burger_menu.onclick = (event) => {
    event.preventDefault();
    if (!burger_navigate.classList.contains('active')) {
        burger_navigate.classList.add('active');
    } else {
        burger_navigate.classList.remove('active');
    }
}

burger_navigate.onclick = (event) => {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        burger_navigate.classList.remove('active');
    }
}

buttons.forEach(button => {
    button.onclick = () => {
        const content = button.nextElementSibling;
        const isOpen = content.style.maxHeight;
        
        button.classList.toggle('active');
        
        if (isOpen) {
            content.style.maxHeight = null;
            content.style.paddingBottom = '0';
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
        
        document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
        document.querySelectorAll('.accordion-button').forEach(b => b.classList.remove('active'));
        
        if (!isOpen) {
            content.style.maxHeight = content.scrollHeight + "px";
            button.classList.add('active');
        }
    };
});

function typedTextHeroDescription() {
    if (index < HERO_TEXT.length) {
        getSelectorHeroDescription.textContent += HERO_TEXT.charAt(index);
        index++;
        setTimeout(typedTextHeroDescription, 25);
    }
}

const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

typedTextHeroDescription();


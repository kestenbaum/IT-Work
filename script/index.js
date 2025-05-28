const heroDescription  = document.querySelector('.hero__description');
const burgerMenu  = document.querySelector('.burger__menu');
const burgerNavigate = document.querySelector('.burger__navigate');
const items = document.querySelectorAll('.accordion-item');

const HERO_TEXT = "We’ve been helping startups launch and grow their businesses. We help you to fill the gap between development, design and product management.";

burgerMenu.onclick = () => {
    if (!burgerNavigate.classList.contains('active')) {
        burgerNavigate.classList.add('active');
    } else {
        burgerNavigate.classList.remove('active');
    }
}

burgerNavigate.onclick = (event) => {
    if (event.target.tagName.toLowerCase() === 'a') {
        burgerNavigate.classList.remove('active');
    }
}

items.forEach(item => {
    const btn = item.querySelector('.accordion-title');
    const content = item.querySelector('.accordion-content');
    const wrapper = item.querySelector('.accordion__wrapper');
    
    wrapper.addEventListener('click', () => {
        const isOpen = btn.classList.contains('active');
        
        items.forEach(i => {
            i.querySelector('.accordion-title').classList.remove('active');
            i.querySelector('.accordion-content').style.maxHeight = null;
        });
        
        if (!isOpen) {
            btn.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});


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

function typedText(element, text, speed = 25) {
    element.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

typedText(heroDescription, HERO_TEXT);


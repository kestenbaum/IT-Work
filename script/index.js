const getSelectorHeroDescription = document.querySelector('.hero__description')
const buttons = document.querySelectorAll('.accordion-button');
const text = "We’ve been helping startups launch and grow their businesses. We help you to fill the gap between development, design and product management."

let index = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
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
    });
});

function typedTextHeroDescription() {
    if (index < text.length) {
        getSelectorHeroDescription.textContent += text.charAt(index);
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


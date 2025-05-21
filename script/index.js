const getSelectorHeroDescription = document.querySelector('.hero__description')
const text = "We’ve been helping startups launch and grow their businesses. We help you to fill the gap between development, design and product management."

let index = 0;


function typedTextHeroDescription() {
    if (index < text.length) {
        getSelectorHeroDescription.textContent += text.charAt(index);
        index++;
        setTimeout(typedTextHeroDescription, 25);
    }
}

typedTextHeroDescription();


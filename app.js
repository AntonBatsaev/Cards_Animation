
function slidesPlugins(activeSlide = 1) {
    const slides = document.querySelectorAll('.slide')
    
    slides[activeSlide].classList.add('active')
    
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClassis()
        slide.classList.add('active')
    })
}

function clearActiveClassis() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
} 
}
slidesPlugins()
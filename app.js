const slides = document.querySelectorAll('.slide')

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
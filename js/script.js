let currentIndex = 0;

const slides = document.querySelector('.carousel-container');
const slideImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const totalSlides = slideImages.length;

// Função para mover o carrossel
function updateCarousel() {
    const slideWidth = slideImages[0].clientWidth;
    slides.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

// Botão anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
});

// Botão próximo
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Redimensionamento da janela
window.addEventListener('resize', updateCarousel);

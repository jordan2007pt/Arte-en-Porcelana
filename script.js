document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".galeria button");
    const seen = new Set();

    buttons.forEach(button => {
        if (seen.has(button.textContent)) {
            button.remove();
        } else {
            seen.add(button.textContent);
        }
    });
});
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % totalImages;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -index * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

// Cambio automático cada 3 segundos
setInterval(() => {
    index = (index + 1) % totalImages;
    updateCarousel();
}, 3000);


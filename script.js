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
document.addEventListener("DOMContentLoaded", function () {
    const carouselSlide = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    let index = 0;
    const imageWidth = images[0].clientWidth;
    
    function updateCarousel() {
        carouselSlide.style.transform = `translateX(${-index * imageWidth}px)`;
    }
    
    nextBtn.addEventListener("click", function () {
        index = (index + 1) % images.length;
        updateCarousel();
    });
    
    prevBtn.addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });
    
    setInterval(() => {
        index = (index + 1) % images.length;
        updateCarousel();
    }, 3000); // Cambia de imagen cada 3 segundos automáticamente
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel-images img");
    let index = 0;

    function showImage(i) {
        images.forEach(img => img.style.display = "none");
        images[i].style.display = "block";
    }

    document.querySelector(".prev").addEventListener("click", function () {
        index = (index - 1 + images.length) % images.length;
        showImage(index);
    });

    document.querySelector(".next").addEventListener("click", function () {
        index = (index + 1) % images.length;
        showImage(index);
    });

    showImage(index);
});
let imagenes = {
    esculturas: ["img/esculturas1.jpg", "img/esculturas2.jpg"],
    decoraciones: ["img/decoraciones1.jpg", "img/decoraciones2.jpg"],
    collares: ["img/collares1.jpg", "img/collares2.jpg"],
    llaveros: ["img/llaveros1.jpg", "img/llaveros2.jpg"],
    curiosidades: ["img/curiosidades1.jpg", "img/curiosidades2.jpg"],
    joyeros: ["img/joyeros1.jpg", "img/joyeros2.jpg"]
};

let categoriaActual = "esculturas";
let indiceImagen = 0;

function mostrarCategoria(categoria) {
    categoriaActual = categoria;
    indiceImagen = 0;
    document.getElementById("imagen-mostrada").src = imagenes[categoria][indiceImagen];
}

function cambiarImagen(direccion) {
    indiceImagen += direccion;
    if (indiceImagen < 0) indiceImagen = imagenes[categoriaActual].length - 1;
    if (indiceImagen >= imagenes[categoriaActual].length) indiceImagen = 0;
    document.getElementById("imagen-mostrada").src = imagenes[categoriaActual][indiceImagen];
}


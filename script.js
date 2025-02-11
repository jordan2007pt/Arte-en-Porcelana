document.addEventListener("DOMContentLoaded", function () {
    // Eliminar botones duplicados en la galería
    const seen = new Set();
    document.querySelectorAll(".galeria button").forEach(button => {
        if (seen.has(button.textContent)) {
            button.remove();
        } else {
            seen.add(button.textContent);
        }
    });

    // Configurar carruseles
    function setupCarousel(containerSelector, prevSelector, nextSelector) {
        const container = document.querySelector(containerSelector);
        const images = container.querySelectorAll("img");
        let index = 0;

        function updateCarousel() {
            container.style.transform = `translateX(${-index * 100}%)`;
        }

        document.querySelector(prevSelector).addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            updateCarousel();
        });

        document.querySelector(nextSelector).addEventListener("click", () => {
            index = (index + 1) % images.length;
            updateCarousel();
        });

        setInterval(() => {
            index = (index + 1) % images.length;
            updateCarousel();
        }, 3000);
    }

    setupCarousel(".carousel-images", ".prev", ".next");
    setupCarousel(".carousel-slide", "#prevBtn", "#nextBtn");

    // Mostrar imágenes de categorías
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
    const imagenMostrada = document.getElementById("imagen-mostrada");

    function mostrarCategoria(categoria) {
        categoriaActual = categoria;
        indiceImagen = 0;
        imagenMostrada.src = imagenes[categoria][indiceImagen];
    }

    function cambiarImagen(direccion) {
        indiceImagen = (indiceImagen + direccion + imagenes[categoriaActual].length) % imagenes[categoriaActual].length;
        imagenMostrada.src = imagenes[categoriaActual][indiceImagen];
    }

    window.mostrarCategoria = mostrarCategoria;
    window.cambiarImagen = cambiarImagen;
});



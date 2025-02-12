document.addEventListener("DOMContentLoaded", function () {
    // Eliminar botones duplicados en la galería
    const seen = new Set();
    document.querySelectorAll(".categorias button").forEach(button => {
        if (seen.has(button.textContent)) {
            button.remove();
        } else {
            seen.add(button.textContent);
        }
    });

    // Definir imágenes por categoría
    const imagenes = {
        esculturas: ["images/esculturas1.jpg", "images/esculturas2.jpg"],
        decoraciones: ["images/decoraciones1.jpg", "images/decoraciones2.jpg"],
        collares: ["images/collares1.jpg", "images/collares2.jpg"],
        llaveros: ["images/llaveros1.jpg", "images/llaveros2.jpg"],
        curiosidades: ["images/curiosidades1.jpg", "images/curiosidades2.jpg"],
        joyeros: ["images/joyeros1.jpg", "images/joyeros2.jpg"]
    };

    let categoriaActual = "esculturas";
    let indiceImagen = 0;
    const imagenMostrada = document.getElementById("imagen-mostrada");

    function mostrarCategoria(categoria) {
        if (imagenes[categoria]) {
            categoriaActual = categoria;
            indiceImagen = 0;
            imagenMostrada.src = imagenes[categoria][indiceImagen];
        } else {
            console.error("Categoría no encontrada:", categoria);
        }
    }

    function cambiarImagen(direccion) {
        if (imagenes[categoriaActual]) {
            indiceImagen = (indiceImagen + direccion + imagenes[categoriaActual].length) % imagenes[categoriaActual].length;
            imagenMostrada.src = imagenes[categoriaActual][indiceImagen];
        }
    }

    // Asignar funciones globalmente
    window.mostrarCategoria = mostrarCategoria;
    window.cambiarImagen = cambiarImagen;
});




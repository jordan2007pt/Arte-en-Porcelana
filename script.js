// Agregar efecto de desplazamiento suave
document.querySelectorAll('nav ul li a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const seccion = document.querySelector(this.getAttribute('href'));
        seccion.scrollIntoView({ behavior: 'smooth' });
    });
});
console.log("Arte en Porcelana cargado correctamente.");

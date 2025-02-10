document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".categoria");
    const seen = new Set();

    buttons.forEach(button => {
        if (seen.has(button.textContent)) {
            button.remove(); // Elimina los duplicados
        } else {
            seen.add(button.textContent);
        }
    });
});


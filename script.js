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


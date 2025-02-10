document.addEventListener("DOMContentLoaded", function () {
    const button = document.createElement("button");
    button.textContent = "Cambiar Fondo";
    button.style.padding = "10px 20px";
    button.style.margin = "10px";
    button.style.border = "none";
    button.style.backgroundColor = "#A0522D";
    button.style.color = "white";
    button.style.cursor = "pointer";
    button.style.fontSize = "16px";
    
    document.body.appendChild(button);

    const colors = ["#F5F5DC", "#E2725B", "#A0522D", "#CC7722", "#5A3E36"];
    
    button.addEventListener("click", function () {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    });
});


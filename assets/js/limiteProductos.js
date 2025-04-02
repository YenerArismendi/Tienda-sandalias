document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".portfolio-item");
    let itemsToShow = 10; // Cantidad de productos a mostrar inicialmente
    let button = document.getElementById("loadMore");

    // Ocultar todos los productos excepto los primeros 10
    items.forEach((item, index) => {
        if (index >= itemsToShow) {
            item.style.display = "none";
        }
    });

    button.addEventListener("click", function () {
        let hiddenItems = Array.from(items).filter(item => item.style.display === "none");

        // Muestra los siguientes 10 productos
        hiddenItems.slice(0, 10).forEach(item => {
            item.style.display = "block";
        });

        // Si ya no hay más productos ocultos, oculta el botón
        if (hiddenItems.length <= 10) {
            button.style.display = "none";
        }
    });
});
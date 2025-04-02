document.addEventListener("DOMContentLoaded", function () {
    let items = document.querySelectorAll(".portfolio-item");
    let itemsToShow = 10;
    let button = document.getElementById("loadMore");

    // Ocultar todos los productos excepto los primeros 10
    items.forEach((item, index) => {
        if (index >= itemsToShow) {
            item.style.visibility = "hidden";
            item.style.height = "0";
        }
    });

    button.addEventListener("click", function () {
        let hiddenItems = Array.from(items).filter(item => item.style.visibility === "hidden");

        hiddenItems.slice(0, 10).forEach(item => {
            item.style.visibility = "visible";
            item.style.height = "auto";
        });

        if (hiddenItems.length <= 10) {
            button.style.display = "none";
        }
    });
});

// button.addEventListener("click", function () {
//     let hiddenItems = Array.from(items).filter(item => item.style.display === "none");
//
//     hiddenItems.slice(0, 10).forEach(item => {
//         item.style.display = "block";
//     });
//
//     // ⚠️ Forzar redibujado
//     let container = document.querySelector(".portfolio-container");
//     container.style.display = "none";
//     setTimeout(() => {
//         container.style.display = "block";
//     }, 10);
//
//     if (hiddenItems.length <= 10) {
//         button.style.display = "none";
//     }
// });

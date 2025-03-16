document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");

    if (!modal || !openModalBtn || !closeModalBtn) {
        console.error("Помилка: Не знайдено елементи модального вікна.");
    } else {
        // Відкриття модального вікна
        openModalBtn.addEventListener("click", () => {
            modal.classList.add("is-open");
        });

        // Закриття модального вікна
        closeModalBtn.addEventListener("click", () => {
            modal.classList.remove("is-open");
        });

        // Закриття при кліку поза модальним вікном
        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.classList.remove("is-open");
            }
        });

        // Закриття при натисканні клавіші Escape
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                modal.classList.remove("is-open");
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.getElementById("burgerBtn");
    const navMenu = document.getElementById("navMenu");

    if (!burgerBtn || !navMenu) {
        console.error("Помилка: Не знайдено елементи бургер-меню.");
    } else {
        // Відкриття/закриття меню
        burgerBtn.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Закриття при кліку поза меню
        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) && !burgerBtn.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });
    }
});

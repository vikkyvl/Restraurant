document.addEventListener("DOMContentLoaded", function() {
    const openButtonDesktop = document.querySelector(".pop-up");
    const openButtonMobile = document.querySelector(".feedback-btn");
    const feedbackForm = document.getElementById("feedbackForm");
    const closeButton = document.querySelector(".close-btn");
    const openForm = function() {
        feedbackForm.classList.remove("hidden");
    };
    if (openButtonDesktop) openButtonDesktop.addEventListener("click", openForm);
    if (openButtonMobile) openButtonMobile.addEventListener("click", openForm);
    closeButton.addEventListener("click", function() {
        feedbackForm.classList.add("hidden");
    });
    feedbackForm.addEventListener("click", function(e) {
        if (e.target === feedbackForm) feedbackForm.classList.add("hidden");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо посилання на елементи
    const mobileToolBar = document.getElementById("mobileToolBar");
    const mobileNav = document.getElementById("mobileNav");
    // Додаємо обробник подій для відкриття/закриття меню
    mobileToolBar.addEventListener("click", function() {
        mobileNav.classList.toggle("open"); // Додає/забирає клас open
    });
    // Закриття меню при натисканні поза ним
    document.addEventListener("click", function(event) {
        if (!mobileNav.contains(event.target) && !mobileToolBar.contains(event.target)) mobileNav.classList.remove("open"); // Забираємо клас open
    });
});

//# sourceMappingURL=index.aa69868b.js.map

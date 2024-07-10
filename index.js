// Navbar toggle

document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".right-side-nav");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
        navToggle.textContent = navMenu.classList.contains("active")
            ? "Close"
            : "Menu";
    });
});

// Footer year
document.addEventListener("DOMContentLoaded", function () {
    let current_year = new Date().getFullYear();
    document.getElementById("year").textContent = current_year;
});

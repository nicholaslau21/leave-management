$(document).ready(function () {
    let backdrop = document.querySelector(".backdrop");
    let toggleButton = document.querySelector(".toggle-button");
    let mobileNav = document.querySelector(".mobile-nav");

    toggleButton.addEventListener("click", function () {
        mobileNav.classList.add("open");
        backdrop.classList.add("open");
    });
});

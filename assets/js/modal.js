$(document).ready(function () {
    let backdrop = document.querySelector(".backdrop");
    let modal = document.querySelector(".modal");
    let approve = document.querySelector("#leaveRequestApprove");
    let modalNoButton = document.querySelector(".modal__action--negative");
    let mobileNav = document.querySelector(".mobile-nav");

    approve.addEventListener("click", function () {
        modal.classList.add("open");
        backdrop.classList.add("open");
    });

    backdrop.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        closeModal();
    });

    if (modalNoButton) {
        modalNoButton.addEventListener("click", closeModal);
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove("open");
        }
        backdrop.classList.remove("open");
    }
});

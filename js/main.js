function responsiveLayout() {
    const burgerIcon = document.querySelector(".burger-icon");
    const xIcon = document.querySelector(".x-icon");
    const burgerMenu = document.querySelector(".burger-menu");

    burgerIcon.addEventListener("click", () => {
        burgerMenu.style.display = "block";
        burgerIcon.style.display = "none";
        xIcon.style.display = "inline-block";
    });

    xIcon.addEventListener("click", () => {
        burgerMenu.style.display = "none";
        xIcon.style.display = "none";
        burgerIcon.style.display = "inline-block";
    });
}
document.querySelectorAll(".menu-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
    }
});

responsiveLayout();


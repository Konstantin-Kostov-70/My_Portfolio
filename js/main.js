function burgerMenu() {
    const burgerIcon = document.querySelector(".burger-icon");
    const xIcon = document.querySelector(".x-icon");
    const heroBurger = document.querySelector(".hero-burger")
    const burgerMenu = document.querySelector(".burger-menu")

    burgerIcon.addEventListener("click", () =>{
        heroBurger.style.display = "none";
        burgerMenu.style.display = "block"
        burgerIcon.style.display = "none";
        xIcon.style.display = "inline-block";
    })

    xIcon.addEventListener("click", () =>{
        burgerMenu.style.display = "none"
        heroBurger.style.display = "block";
        xIcon.style.display = "none";
        burgerIcon.style.display = "inline-block";
    })
}

burgerMenu();
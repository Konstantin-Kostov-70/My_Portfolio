function responsiveLayout() {
    const burgerIcon = document.querySelector(".burger-icon");
    const xIcon = document.querySelector(".x-icon");
    const burgerMenu = document.querySelector(".burger-menu");
    const firsButton = document.querySelector(".first-btn");
    const secondButton = document.querySelector(".second-btn");
    const hiddenCards = document.querySelectorAll(".hidden-cards");
    const hiddenCardsSmall = document.querySelectorAll(".hidden-cards-small");
    const hiddenShapesUp = document.querySelectorAll(".shapes-up");
    const hiddenShapesDown = document.querySelectorAll(".shapes-down");

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

    function toggleCards(btn, cards, shapes) {
        if (btn.textContent === "view all ~~>") {
            btn.textContent = "hide ~~>";
            cards.forEach(card => card.style.display = "block");
            shapes.forEach(shape => shape.style.display = "block");
            btn.setAttribute("btn-clicked", "true");
            
        } else if (btn.textContent === "hide ~~>") {
            btn.textContent = "view all ~~>";
            cards.forEach(card => card.style.display = "none");
            shapes.forEach(shape => shape.style.display = "none");
            btn.setAttribute("btn-clicked", "false");
        }
    }

    function firsButtonHandler() {
        toggleCards(firsButton, hiddenCards, hiddenShapesUp);
    }

    function secondButtonHandler() {
        toggleCards(secondButton, hiddenCardsSmall, hiddenShapesDown);
    }

    function checkScreenWidth() {
        if (window.innerWidth <= 700) {
            firsButton.addEventListener("click", firsButtonHandler);
            secondButton.addEventListener("click", secondButtonHandler);

            // Restore previous state if buttons were clicked
            if (firsButton.getAttribute("btn-clicked") === "true") {
                hiddenCards.forEach(card => card.style.display = "block");
                hiddenShapesUp.forEach(shape => shape.style.display = "block");
                firsButton.textContent = "hide ~~>";
            } else {
                hiddenCards.forEach(card => card.style.display = "none");
                hiddenShapesUp.forEach(shape => shape.style.display = "none");
            }
            if (secondButton.getAttribute("btn-clicked") === "true") {
                hiddenCardsSmall.forEach(card => card.style.display = "block");
                hiddenShapesDown.forEach(shape => shape.style.display = "block");
                secondButton.textContent = "hide ~~>";
            } else {
                hiddenCardsSmall.forEach(card => card.style.display = "none");
                hiddenShapesDown.forEach(shape => shape.style.display = "none");
            }
        } else {
            firsButton.removeEventListener("click", firsButtonHandler);
            secondButton.removeEventListener("click", secondButtonHandler);

            hiddenCards.forEach(card => card.style.display = "block");
            hiddenCardsSmall.forEach(card => card.style.display = "block");
            hiddenShapesUp.forEach(shape => shape.style.display = "none");
            hiddenShapesDown.forEach(shape => shape.style.display = "none");
        }
    }

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
}

responsiveLayout();

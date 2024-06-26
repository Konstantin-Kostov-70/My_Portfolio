function hideDisplayCards() {
    const firsButton = document.querySelector(".first-btn");
    const secondButton = document.querySelector(".second-btn");
    const hiddenCards = document.querySelectorAll(".hidden-cards");
    const hiddenCardsSmall = document.querySelectorAll(".hidden-cards-small");
    const hiddenShapesUp = document.querySelectorAll(".shapes-up");
    const hiddenShapesDown = document.querySelectorAll(".shapes-down");

    function toggleCards(btn, cards, shapes, event) {
        event.preventDefault();
        if (btn.textContent === "view all ~~>") {
            btn.textContent = "hide ~~>";
            cards.forEach(card => card.style.display = "flex");
            shapes.forEach(shape => shape.style.display = "flex");
            btn.setAttribute("btn-clicked", "true");

        } else if (btn.textContent === "hide ~~>") {
            btn.textContent = "view all ~~>";
            cards.forEach(card => card.style.display = "none");
            shapes.forEach(shape => shape.style.display = "none");
            btn.setAttribute("btn-clicked", "false");
        }
    }

    function firsButtonHandler(event) {
        toggleCards(firsButton, hiddenCards, hiddenShapesUp, event);
    }

    function secondButtonHandler(event) {
        toggleCards(secondButton, hiddenCardsSmall, hiddenShapesDown, event);
    }

    function checkScreenWidth() {
        if (window.innerWidth <= 700) {
            firsButton.addEventListener("click", firsButtonHandler);
            secondButton.addEventListener("click", secondButtonHandler);

            // Restore previous state if buttons were clicked
            if (firsButton.getAttribute("btn-clicked") === "true") {
                hiddenCards.forEach(card => card.style.display = "flex");
                hiddenShapesUp.forEach(shape => shape.style.display = "flex");
                firsButton.textContent = "hide ~~>";
            } else {
                hiddenCards.forEach(card => card.style.display = "none");
                hiddenShapesUp.forEach(shape => shape.style.display = "none");
            }
            if (secondButton.getAttribute("btn-clicked") === "true") {
                hiddenCardsSmall.forEach(card => card.style.display = "flex");
                hiddenShapesDown.forEach(shape => shape.style.display = "flex");
                secondButton.textContent = "hide ~~>";
            } else {
                hiddenCardsSmall.forEach(card => card.style.display = "none");
                hiddenShapesDown.forEach(shape => shape.style.display = "none");
            }
        } else {
            firsButton.removeEventListener("click", firsButtonHandler);
            secondButton.removeEventListener("click", secondButtonHandler);

            hiddenCards.forEach(card => card.style.display = "flex");
            hiddenCardsSmall.forEach(card => card.style.display = "flex");
            hiddenShapesUp.forEach(shape => shape.style.display = "none");
            hiddenShapesDown.forEach(shape => shape.style.display = "none");
        }
    }

    checkScreenWidth();

    window.addEventListener("resize", checkScreenWidth);
    
}

hideDisplayCards()
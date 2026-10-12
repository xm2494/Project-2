const startButton = document.getElementById("startButton");
const continueButton = document.getElementById("continueButton");

const fallingPanel = document.getElementById("fallingPanel");
const sideScroll = document.getElementById("sideScroll");

const freeButton = document.getElementById("freeButton");
const freeMessage = document.getElementById("freeMessage");

const endingButton = document.getElementById("endingButton");
const endingReveal = document.getElementById("endingReveal");


startButton.addEventListener("click", function () {

    fallingPanel.scrollIntoView({
        behavior: "smooth"
    });

});


continueButton.addEventListener("click", function () {

    sideScroll.scrollIntoView({
        behavior: "smooth"
    });

});


sideScroll.addEventListener("wheel", function (event) {

    event.preventDefault();

    sideScroll.scrollLeft += event.deltaY;

}, { passive: false });


freeButton.addEventListener("click", function () {

    if (freeMessage.style.display === "block") {

        freeMessage.style.display = "none";

    } else {

        freeMessage.style.display = "block";

    }

});


endingButton.addEventListener("click", function () {

    endingReveal.style.display = "flex";

});


document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {

        sideScroll.scrollBy({
            left: window.innerWidth,
            behavior: "smooth"
        });

    }


    if (event.key === "ArrowLeft") {

        sideScroll.scrollBy({
            left: -window.innerWidth,
            behavior: "smooth"
        });

    }

});

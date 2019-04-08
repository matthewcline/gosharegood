var praisingHands = document.querySelectorAll(".praisingHands");

praisingHands.forEach(praisingHand => praisingHand.addEventListener("click", clickedPraisingHand));

function clickedPraisingHand(e) {
    this.classList.toggle("clickedPraisingHand");
}
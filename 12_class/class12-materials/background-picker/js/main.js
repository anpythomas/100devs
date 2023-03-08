document.querySelector("#purple").onclick = turnPurple
document.querySelector("#green").onclick = turnGreen
document.querySelector("#blue").onclick = turnBlue
document.querySelector("#orange").onclick = turnOrange

function turnPurple() {
    document.querySelector("body").style.background = "purple";
    document.querySelector("body").style.color = "white";
}

function turnGreen() {
    document.querySelector("body").style.background = "green";
    documnet.querySelector("body").style.color = "white";
}

function turnBlue() {
    document.querySelector("body").style.background = "blue";
    document.querySelector("body").style.color = "white";
}

function turnOrange() {
    document.querySelector("body").style.background = "orange";
    document.querySelector("body").style.color = "white";
}

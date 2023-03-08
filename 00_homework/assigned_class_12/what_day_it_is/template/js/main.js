document.querySelector("#check").addEventListener('click', check);

function check() {
    const day = document.querySelector("#day").value.toLowerCase();
    if (day === "monday") {
        console.log(day);
        document.querySelector("#placeToSee").innerText = `Yes, it's ${day}!`
    } else {
        document.querySelector("#placeToSee").innerHTML = `No, couldn't find ${day}`;
    }
}
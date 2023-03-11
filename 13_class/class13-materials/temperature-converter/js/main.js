//Write your pseduo code first! 
// obtain value, 

// multiply value times ratio, 

//find ratio, 

// print new value to screen

document.querySelector("button").addEventListener('click', converter)

function converter() {
    const tempInput = document.querySelector("#temp").value
    const tempConverted = tempInput * 1.8 + 32
    console.log(tempConverted)
    document.querySelector("h1").innerText = `${tempInput} celsius equals ${tempConverted} farenheit`
}
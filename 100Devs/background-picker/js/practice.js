let purpleLi = document.querySelector("#purple");
let greenLi = document.querySelector("#green");
let blueLi = document.querySelector("#blue");
let randomLi = document.querySelector("#randomize");
let randomGradientLi = document.querySelector("#randomGradient");
let randomGradient3Li = document.querySelector("#randomGradient3Way");

let colorDisplay = document.querySelector(".colorDisplay");

let bodyEl = document.querySelector("body");

purpleLi.addEventListener("click", partyPurple);
greenLi.addEventListener("click", partyGreen);
blueLi.addEventListener("click", partyBlue);
randomLi.addEventListener("click", randomize);
randomGradientLi.addEventListener("click", randomGradient);
randomGradient3Li.addEventListener("click", randomGradient3);

function partyPurple() {
    bodyEl.style.backgroundColor = 'rgba(241, 63, 247, 1)';
    colorDisplay.style.display = "none";
    colorDisplay.innerText = "";
}

function partyGreen() {
    bodyEl.style.backgroundColor = 'rgba(0,253,81,1)';
    colorDisplay.style.display = "none";
    colorDisplay.innerText = "";
}

function partyBlue() {
    bodyEl.style.backgroundColor = 'rgba(0,254,255)';
    colorDisplay.style.display = "none";
    colorDisplay.innerText = "";
}

function randomize() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    bodyEl.style.background = `rgb(${r}, ${g}, ${b})`;
    colorDisplay.innerText = `Color is: rgb(${r}, ${g}, ${b})`;
    colorDisplay.style.display = 'inline-block';
}

function pickRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function randomGradient() {
    let r1 = Math.floor(Math.random() * 256);
    let g1 = Math.floor(Math.random() * 256);
    let b1 = Math.floor(Math.random() * 256);

    let r2 = Math.floor(Math.random() * 256);
    let g2 = Math.floor(Math.random() * 256);
    let b2 = Math.floor(Math.random() * 256);

    // let firstColor = `rgb(${r1}, ${g1}, ${b1})`;
    // let secondColor = `rgb(${r2}, ${g2}, ${b2})`;

    let firstColor = pickRandomColor();
    let secondColor = pickRandomColor();

    bodyEl.style.background = `linear-gradient(90deg, ${firstColor}, ${secondColor})`;
    colorDisplay.innerText = `Color1 is: ${firstColor} \nColor2 is: ${secondColor}
    \nlinear-gradient(90deg, ${firstColor}, ${secondColor})`;
    colorDisplay.style.display = 'inline-block';
}

function randomGradient3() {
    let firstColor = pickRandomColor();
    let secondColor = pickRandomColor();
    let thirdColor = pickRandomColor();

    bodyEl.style.background = `linear-gradient(90deg, ${firstColor} 25%, ${secondColor} 28%, ${thirdColor})`;
    colorDisplay.innerText = `Color1 is: ${firstColor} \nColor2 is: ${secondColor} \nColor3 is: ${thirdColor}
    \nlinear-gradient(90deg, ${firstColor} 25%, ${secondColor} 28%, ${thirdColor})`;
    colorDisplay.style.display = 'inline-block';

}

/* Pretty colors:
    rgb(239, 2, 108) ---> vibrant pink
    linear-gradient(90deg, rgb(187, 48, 232), rgb(70, 211, 167)) --> light purple to an aqua green
    rgb(37, 129, 192) --> a nice, almost cornflower blue
    linear-gradient(90deg, rgb(15, 160, 158), rgb(189, 101, 92)) --> beachy blue to an almost sandy pink/orangey
linear-gradient(90deg, rgb(228, 196, 123) 25%, rgb(55, 219, 193) 35%, rgb(146, 101, 195)) --> super beachy vibes, starting sandy colored, to aqua green, to a light purple
*/

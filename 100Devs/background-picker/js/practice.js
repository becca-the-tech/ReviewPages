let purpleLi = document.querySelector("#purple");
let greenLi = document.querySelector("#green");
let blueLi = document.querySelector("#blue");
let randomLi = document.querySelector("#randomize");
let randomGradientLi = document.querySelector("#randomGradient");

let colorDisplay = document.querySelector(".colorDisplay");

let bodyEl = document.querySelector("body");

purpleLi.addEventListener("click", partyPurple);
greenLi.addEventListener("click", partyGreen);
blueLi.addEventListener("click", partyBlue);
randomLi.addEventListener("click", randomize);
randomGradientLi.addEventListener("click", randomGradient);

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

    bodyEl.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`;
    colorDisplay.innerText = `Color is: rgba(${r}, ${g}, ${b}, 1)`;
    colorDisplay.style.display = 'block';
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
    colorDisplay.innerText = `Color1 is: ${firstColor} \nColor2 is: ${secondColor}`;
    colorDisplay.style.display = 'block';
}

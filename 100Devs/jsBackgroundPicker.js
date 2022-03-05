let supportBtn = document.querySelector(".support");
let randomBtn = document.querySelector(".random");
let randomGradientBtn = document.querySelector(".randomGradient");
let radialBtn = document.querySelector(".radialGradient");
let surpriseBtn = document.querySelector(".surprise");

let bodyEl = document.querySelector("body");
let img = document.querySelector("img");

supportBtn.addEventListener("click", () => {
    bodyEl.style.background = `linear-gradient(180deg, blue, yellow)`;
});

function pickRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

randomBtn.addEventListener("click", () => {
    bodyEl.style.background = pickRandomColor();
});

randomGradientBtn.addEventListener("click", function() {
    let color1 = pickRandomColor();
    let color2 = pickRandomColor();

    bodyEl.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
});

radialBtn.addEventListener("click", function() {
    let color1 = pickRandomColor();
    let color2 = pickRandomColor();

    bodyEl.style.background = `radial-gradient(circle at center, ${color1}, ${color2})`;
});

surpriseBtn.addEventListener("click", function() {
    img.src = `https://images.unsplash.com/photo-1566233590969-d77010fc90f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHVrcmFpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60`;
    img.alt = 'blue and yellow doorway and outer part of house, along with a yellow sunflower design on the door';
});

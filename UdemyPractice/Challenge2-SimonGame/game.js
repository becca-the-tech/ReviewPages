const buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    let randomColor = buttonColors[randomNumber];

    gamePattern.push(randomColor);
}

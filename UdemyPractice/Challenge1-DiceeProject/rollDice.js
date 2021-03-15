let topPage = document.querySelector("h1");
let rollDiceText = document.querySelector("h2");
let playerDice1 = document.getElementsByTagName("img")[0];
let playerDice2 = document.getElementsByTagName("img")[1];
let body = document.getElementsByTagName("body")[0];

function rollDice() {
    let random1 = Math.floor(Math.random() * 6) + 1;
    let newSrc1 = "images/dice" + random1 + ".png";
    playerDice1.setAttribute("src", newSrc1);

    let random2 = Math.floor(Math.random() * 6) + 1;
    let newSrc2 = "images/dice" + random2 + ".png";
    playerDice2.setAttribute("src", newSrc2);

    if (random1 > random2) {
        topPage.innerText = "Player 1 Wins!";
        topPage.className = "player1";
        body.className = "player1Background";
    } else if (random2 > random1) {
        topPage.innerText = "Player 2 Wins!";
        topPage.className = "player2";
        body.className = "player2Background";
    } else {
        topPage.innerText = "Players Tie. :(";
        topPage.className = "";
        body.className = "";
    }
}

rollDiceText.addEventListener("click", rollDice);

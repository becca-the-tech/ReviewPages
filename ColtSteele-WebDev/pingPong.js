let player1Score = document.querySelector(".player1");
let player2Score = document.querySelector(".player2");
let selectScore = document.querySelector("#selectScore");

let player1Btn = document.querySelector(".player1-btn");
let player2Btn = document.querySelector(".player2-btn");
let resetBtn = document.querySelector(".reset");

let winner = document.querySelector("#winner");

let numRounds = document.querySelector(".numRounds");

selectScore.addEventListener("input", function() {
    numRounds.innerHTML = selectScore.value;
    let player1ScoreNum = player1Score.innerText;
    let player2ScoreNum = player2Score.innerText;

    if (5 == numRounds.innerHTML) {
        player1Btn.setAttribute("disabled");
        player2Btn.setAttribute("disabled");
    }
});

player1Btn.addEventListener("click", () => {
    let score = player1Score.innerText;
    score++;
    if (score < numRounds.innerText) {
        player1Score.innerText = score;
    } else if (score == numRounds.innerText) {
        player1Score.innerText = score;
        winner.innerText = "Player 1 Wins";
        player1Btn.style.display = "none";
        player2Btn.style.display = "none";
    }
});

player2Btn.addEventListener("click", () => {
    let score = player2Score.innerText;
    score++;
    if (score < numRounds.innerText) {
        player2Score.innerText = score;
    } else if (score == numRounds.innerText) {
        player2Score.innerText = score;
        winner.innerText = "Player 2 Wins";
        player1Btn.style.display = "none";
        player2Btn.style.display = "none";
    }
});

resetBtn.addEventListener("click", function() {
    player1Score.innerText = 0;
    player1Btn.style.display = "inline";
    player2Score.innerHTML = 0;
    player2Btn.style.display = "inline";
    winner.innerText = '';
});

const input = require("readline-sync");

let highNum = parseInt(input.question("What is the highest number for the game? "));
while (!highNum) {
    console.log("Please enter a valid number.");
    highNum = parseInt(input.question("What is the highest number for the game? "));
}

let random = Math.floor(Number(highNum) * Math.random()) + 1;

//console.log(`The randomly chosen number is: ${random}`);
let guess = (input.question("What is your guess? "));

let count = 1;

while (parseInt(guess) !== random) {
    if (guess.toLowerCase() === 'q') {
        break;
    }
    count++;
    if (guess > random) {
        console.log("Too high. Try again.");
        guess = input.question("What is your guess? ");
    } else if (guess < random) {
        console.log("Too low. Try again");
        guess = input.question("What is your guess? ");
    }
}

if (guess.toLowerCase() === 'q') {
    console.log("Quitting now.");
} else {
    console.log(`Congrats you win! It took you ${count} tries.`);
}

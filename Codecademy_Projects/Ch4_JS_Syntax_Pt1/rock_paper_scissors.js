//gets user choice, prints error if invalid input
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log("Error: Not a valid input");
    }
};

//function to get a random number for computer and assign that number to rock, paper, or scissors
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

function determineWinner(userChoice, computerChoice) {
    //if user choice is 'bomb', they win
    if (userChoice === 'bomb') {
        return 'User wins in an explosive match-up!';
    }
    //first checks if there's a tie
    if (userChoice === computerChoice) {
        return 'The game is tied! Play again for a winner.';
    }

    //if user is 'rock' checks if computer is 'paper' or 'scissors'
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
        //if user is 'paper' checks if computer is 'rock' or 'scissors'
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
        //if user is 'scissors', checks if computer is 'rock' or 'paper'
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!';
        } else {
            return 'The user won!';
        }
    } else {
        return 'User input is invalid. Match thrown out.';
    }
}


//shows user and computer choices, determines outcome
function playGame(choice) {
    let userChoice = getUserChoice(choice);
    const computerChoice = getComputerChoice();

    console.log('User choice: ' + userChoice);
    console.log('Computer choice: ' + computerChoice);

    console.log(determineWinner(userChoice, computerChoice));
}


playGame('scissors');

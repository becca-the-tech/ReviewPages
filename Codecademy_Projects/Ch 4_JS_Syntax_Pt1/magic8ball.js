let userName = 'Becca';

//checks if userName is given, greets user if so
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//question for the 8-ball
let userQuestion = 'Will I ever become a programmer?';

//8-ball intro speaking to user
console.log(`So I see you have a question for me, ${userName}... You asked for my wisdom on: \n${userQuestion}`);

//random number generator to choose phrase
//chooses 0 to 7
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

//sets 8ball replies based on random number generated
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy, try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
}

//8-Ball Reply to Question
console.log(eightBall);

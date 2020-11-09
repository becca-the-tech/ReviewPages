//myAge, able to be re-assigned for me to play with the code
let myAge = 28;

//earlyYears counts for 2 years
let earlyYears = 2;

earlyYears = earlyYears * 10.5;

//first two years have been counted already
laterYears = myAge - 2;
//number of dog years accounted by your later years
laterYears = laterYears * 4;

/*console.log(earlyYears);
console.log(laterYears);
*/

let myAgeInDogYears = earlyYears + laterYears;

//following instructions
let myName = 'Becca'.toLowerCase();

//using string interpolation to use my name and state my age in human and dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);

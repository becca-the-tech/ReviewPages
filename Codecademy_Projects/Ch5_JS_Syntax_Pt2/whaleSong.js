//input to convert into a whale song
let input = "Hi, Human";

//string of vowels, split into an array
let vowels = 'aeiou';
vowels = vowels.split('');
console.log(vowels);

let resultArray = [];

//checks each letter for vowers
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            resultArray.push(vowels[j]);
        }
    }
    //doubles the 'e' and 'u' letters from input
    if (input[i] === 'e') {
        resultArray.push(input[i]);
    } else if (input[i] === 'u') {
        resultArray.push(input[i]);
    }
}

//turns array into string and capitalizes the string
resultArray = resultArray.join('').toUpperCase();

//prints the whale song based on input
console.log(resultArray);

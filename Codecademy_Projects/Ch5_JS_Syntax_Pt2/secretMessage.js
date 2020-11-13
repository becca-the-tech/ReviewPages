//original Message
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last index
secretMessage.pop();
//add two strings to back of array
secretMessage.push('to', 'Program');

//find indexOf 'easily' and change it to 'right'
const wordToChange = secretMessage.indexOf('easily');
secretMessage[wordToChange] = 'right';

//remove first index, add 'Programming' to front of array
secretMessage.shift();
secretMessage.unshift('Programming');

//find the word 'get', replace the words 'get', 'right', 'the', 'first', 'time' which is 5 elements with the word 'know'
const get = secretMessage.indexOf('get');
secretMessage.splice(get, 5, 'know,');

//combine the array with spaces to make a sentence
console.log(secretMessage.join(' '));

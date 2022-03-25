//create a variable and assign it a number
let num = 20;
//minus 10 from that number
num -= 10;
//num = num - 10

//print that number to the console
console.log(num);


//create a variable that holds a value from the input
//let input = Number(prompt("What is your number? "));
//add 25 to that number
//input += 25;
//alert that number
//alert(input);

//create a variable that holds the h1
const h1 = document.querySelector("h1");
console.log(h1);

//add an event listener to that element that console logs the
//sum of the two previous variables
h1.addEventListener("click", function() {
    //console.log(input + num);
});


function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    console.log(fahrenheit);
    return fahrenheit;
}

// celsiusToFahrenheit(0);
// celsiusToFahrenheit(33);

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    console.log(celsius);
    return celsius;
}

//console.log("Celsius of 32 degrees, 100 degrees, and 0 degrees celsius");
//fahrenheitToCelsius(32);
//fahrenheitToCelsius(100);
//fahrenheitToCelsius(0);

function savage21() {
    for (let i = 0; i < 21; i++) {
        console.log(21);
    }
}

//savage21();

let n1 = 20;
n1 = n1 + 10;
alert(n1);

//function declaration
function subtract4(number) {
    alert(number - 4);
}

let divideAndRemainder = (num1, num2) => {
    return (num1 % num2);
};

//console.log(divideAndRemainder(13, 4));
// 13/4 should have a remainder of 1

function addAndCheckJumanji(num1, num2) {
    if (num1 + num2 > 50) {
        alert("Jumanji");
    } else {
        alert("Nope");
    }
}

let multiplyNumsAndCheckZebra = function(num1, num2, num3) {
    let product = num1 * num2 * num3;
    if (product % 3 === 0) {
        alert("ZEBRA");
    } else {
        alert("hippo");
    }
};

addAndCheckJumanji(25, 26);
addAndCheckJumanji(48, 0);

multiplyNumsAndCheckZebra(3, 9, 3);
multiplyNumsAndCheckZebra(2, 8, 2);

function printXTimes(word, number) {
    for (let i = 0; i < number; i++) {
        console.log(word);
    }
}

printXTimes("howdy ", 3);

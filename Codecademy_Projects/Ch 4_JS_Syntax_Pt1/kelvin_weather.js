//forecast today is 293 Kelvin
const kelvin = 293;

//celsius is kelvin - 273
let celsius = kelvin - 273;

//convert celsius to Newton scale
// Newton = Celsius * (33/100)
let newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature in Newtons is ${newton}`);

//change celsius to fahrenheit, this is the formula
let fahrenheit = celsius * (9 / 5) + 32;

//rounds down Fahrenheit temperature to an int
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

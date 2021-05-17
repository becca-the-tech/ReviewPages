/* --------------- Challenge 1 --------------*/

const age = 15;
if (age >= 16) {
    console.log("You are old enough to drive.");
} else {
    console.log("You are not old enough to drive.");
}
/* ----------- End of Challenge 1 -----------*/


/* --------------- Challenge 2 --------------*/

const drinkSize = "small";

switch (drinkSize) {
    case "small":
        console.log("A small drink is 10 ounces.");
        break;
    case "medium":
        console.log("A medium drink is 16 ounces.");
        break;
    case "large":
        console.log("A large drink is 22 ounces.");
        break;
    default:
        console.log("Unknown drink size.");
        break;
}

const input = require('readline-sync');

let weight = 142.4;
let caloriesPerPound = 3500;

let goalWeight = Number(input.question("What is your goal weight: "));
let changeInPounds = weight - goalWeight;

let totalCalsToLose = 3500 * changeInPounds;
let days = Number(input.question("How many days would you like to accomplish this by: "));

let dailyAvg = totalCalsToLose / days;
let weeklyAvg = dailyAvg * 7;

let actualWeeklyConsumedCalories = Number(input.question("How many calories on average did I eat last week: ")) * 7;
let totalCalsBurnedWeekly = Number(input.question("How many calories did I burn total last week: "));
let actualDifferenceWeekly = (totalCalsBurnedWeekly - actualWeeklyConsumedCalories) / caloriesPerPound;

console.log();
console.log(Math.round(dailyAvg), "is the number of leftover calories per day I should have");
console.log(Math.round(weeklyAvg), "is the number of leftover calories I should have weekly");

console.log(`I ate ${actualWeeklyConsumedCalories} calories in a week and burned ${totalCalsBurnedWeekly} calories.
This is roughly ${Math.round(actualDifferenceWeekly * 100) / 100} of a pound in difference.`);
console.log();

let calDeficit = Number(input.question("How many cals would I like to lose per day: "));
let numDays = (changeInPounds * 3500) / calDeficit;
let numWeeks = numDays / 7;
let numMonths = numWeeks / 4;

console.log(`It will take me ${numDays} days to lose ${changeInPounds} pounds with an avg calorie deficit of ${calDeficit}`);
console.log(`It will take me ${numWeeks} weeks to lose ${changeInPounds} pounds with an avg calorie deficit of ${calDeficit}`);
console.log(`It will take me ${numMonths} months to lose ${changeInPounds} pounds with an avg calorie deficit of ${calDeficit}`);

let studyHrs = 2.25;
let day = 30;
console.log(studyHrs * day, " is the number of hours spent studying in one month");

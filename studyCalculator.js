const input = require('readline-sync');

let choice = input.question("Do you want to choose daily minutes to study or overall goal time period? (please type either 'daily' or 'goal' or 'cancel' to exit) \n");
const options = ['daily', 'goal', 'cancel'];

while (!options.includes(choice)) {
    choice = input.question("Do you want to choose daily minutes to study or overall goal time period? (please type either 'daily' or 'goal' or 'cancel' to exit) \n");
}

//choice = daily
if (choice == options[0]) {
    let studyTopic = input.question("What do you want to study? ");
    let timeStudy = input.question("How long will you study daily (in minutes)? ");

    let timeInYear = Math.round(365 * Number(timeStudy) / 60 * 100) / 100;
    let timeInMonth = Math.round(30 * Number(timeStudy) / 60 * 100) / 100;
    let timeInWeek = Math.round(7 * Number(timeStudy) / 60 * 100) / 100;

    console.log();
    console.log(`\nIf you study ${timeStudy} minutes a day of ${studyTopic},
        you will study ${timeInWeek} hours per week
        ${timeInMonth} hours per month
        and ${timeInYear} hours per year.`);

    console.log();
    //choice = goal
} else if (choice == options[1]) {
    let studyTopic = input.question("What do you want to study? ");
    let goalStudy = input.question("How many hours do you want to study? ");
    let studyPeriod = input.question("Over how many days do you want to reach this goal? (week = 7, month = 30, year = 365) ");

    let calculatedStudyDaily = Math.round((Number(goalStudy) / Number(studyPeriod)) * 60 * 100) / 100;

    console.log();
    console.log("If you want to study " + goalStudy + " hours of " + studyTopic + " over " + studyPeriod + " days, it will take you " + calculatedStudyDaily + " minutes a day.");
}

/*let studyTopic = input.question("What do you want to study? ");
let timeStudy = input.question("How long will you study daily (in minutes)? ");

let timeInYear = 365 * Number(timeStudy) / 60;
let timeInMonth = 30 * Number(timeStudy) / 60;
let timeInWeek = 7 * Number(timeStudy) / 60;

console.log(`\nIf you study ${timeStudy} a day of ${studyTopic},
you will study ${timeInWeek} hours per week
${timeInMonth} hours per month
and ${timeInYear} hours per year.`);

console.log();

let goalStudy = input.question("How many hours do you want to study? ");
let studyPeriod = input.question("Over how many days do you want to reach this goal? (week = 7, month = 30, year = 365) ");
let calculatedStudyDaily = (Number(goalStudy) / Number(studyPeriod)) * 60;

console.log("If you want to study " + goalStudy + " hours of " + studyTopic + " over " + studyPeriod + " days, it will take you " + calculatedStudyDaily + " minutes a day.");
*/

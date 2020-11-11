//race number anything between 0-999
let raceNumber = Math.floor(Math.random() * 1000);

//if racer registered early or not
let registeredEarly = true;

let runnerAge = 18;

//adults who registered early have numbers over 1000
if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
}

//tells racers when they start based on age and early registration status
if (runnerAge > 18 && registeredEarly) {
    console.log(`Racer# ${raceNumber} will race at 9:30am`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`Racer #${raceNumber} will race at 11am`);
} else if (runnerAge < 18) {
    console.log(`Youth registrants run at 12:30pm, Racer #${raceNumber}`);
} else {
    console.log(`Please see the registration desk, Racer #${raceNumber}`);
}

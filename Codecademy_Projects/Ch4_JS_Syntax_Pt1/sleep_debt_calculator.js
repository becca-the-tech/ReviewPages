//checks day given to see how many hours of sleep gotten
function getSleepHours(day) {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return 8;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 6;
            break;
        case 'thursday':
            return 10;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 9;
            break;
        case 'sunday':
            return 9;
            break;
        default:
            return 'Invalid day chosen';
            break;
    }
}

//returns total sleep hours
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//returns ideal hours of sleep for a week
function getIdealSleepHours(idealHours) {
    return idealHours * 7;
}

//calculate sleep debt
function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(10);
    let sleepDebtAmount;

    //Perfect amount of sleep
    if (actualSleepHours === idealSleepHours) {
        console.log('Perfect amount of sleep attained!');
        //More Sleep than Necessary
    } else if (actualSleepHours > idealSleepHours) {
        sleepDebtAmount = actualSleepHours - idealSleepHours;
        console.log('Received even more sleep than necessary.');
        console.log('Received ' + sleepDebtAmount + ' hours more this week than needed.');
        //Not enough sleep
    } else {
        sleepDebtAmount = idealSleepHours - actualSleepHours;
        console.log('Need more sleep... zzz..');
        console.log('Short by ' + sleepDebtAmount + ' hours of sleep...');
    }
}


calculateSleepDebt();

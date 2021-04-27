function isBetween(min, max) {
    return function(num) {
        return num >= min && num <= max;
    };
}

let isChild = isBetween(0, 12);
let isTeen = isBetween(13, 19);
let isAdult = isBetween(20, 120);


console.log(isTeen(13));
console.log(isAdult(40));

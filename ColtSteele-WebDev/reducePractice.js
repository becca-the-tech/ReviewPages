let prices = [13.99, 15.99, 12.99, 12.99, 14.99];

let total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(total);


let lessonTimes = [60, 42, 128, 60, 110];

let totalTime = lessonTimes.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(`${Math.floor(totalTime / 60)} hours, ${Math.floor(totalTime % 60)} minutes`);


let movieList = [
    {
        title: "Jaws",
        score: 95
    },
    {
        title: "Jurassic Park",
        score: 100
    },
    {
        title: "A Week Away",
        score: 80
    },
    {
        title: "Frozen",
        score: 70
    }
];

let lowestRanking = movieList.reduce((lowRankMovie, movie) => {
    if (lowRankMovie.score < movie.score) {
        return lowRankMovie;
    } else {
        return movie;
    }
});

console.log(lowestRanking);

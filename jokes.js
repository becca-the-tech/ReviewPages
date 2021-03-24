let jokeBox = document.getElementById("joke");
let programmingJoke = jokeBox.firstElementChild;
let anyJoke = jokeBox.lastElementChild;

/*jokeBox.addEventListener("click", function() {
    jokeBox.innerHTML = "<a href='https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit' target='_blank'>Joke click</a>";
});
*/

anyJoke.addEventListener("click", function() {
    jokeBox.lastElementChild.innerHTML = "<a href='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit' target='_blank'>Any Joke click</a>";
});

programmingJoke.addEventListener("click", function() {
    jokeBox.firstElementChild.innerHTML = "<a href='https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit' target='_blank'>Programming Joke click</a>";
});


/*Another API website to play around is: https://openweathermap.org/forecast5 for other API usage.
I use OpenWeatherMap2019! */

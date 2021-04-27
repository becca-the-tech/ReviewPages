let footer = document.getElementById("bottom");
let btn = document.getElementById("btn");

let count = 25;
count *= 60;

let countInMins = Math.floor(count / 60);
let countInSeconds = count % 60;

function decreaseCount() {
    if (count == 0) {
        alert("Your timer is up. Go take a break");
        count--;
        if (count <= 0) {
            clearInterval(interval);
        }
    } else {
        count--;
        countInMins = Math.floor(count / 60);
        countInSeconds = count % 60;
        footer.innerText = countInMins + " minutes, " + countInSeconds + " seconds remaining";
    }
    return count;
}

let originalMins = countInMins;
let originalSecs = countInSeconds;
let originalCount = count;

function pause() {
    originalMins = countInMins;
    originalSecs = countInSeconds;
    originalCount = count;

    count = 0;
}

function unpause() {
    count = originalCount;
    countInMins = originalMins;
    countInSeconds = originalSecs;
}

let interval = setInterval(decreaseCount, 1000);
btn.addEventListener("click", function() {
    pause();
    btn.innerHTML = "Resume";
});

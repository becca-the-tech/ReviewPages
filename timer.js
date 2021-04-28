let timeLeft = document.getElementById("timeLeft");
let focus = document.getElementById("focus");
let learnReview = document.getElementById("learnReview");
let reviewInput = document.getElementById("reviewInput");
let addBtn = document.getElementById("addBtn");
let topicName = document.getElementById("topicName");


let count = 60;
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
        timeLeft.innerText = countInMins + " minutes, " + countInSeconds + " seconds remaining";
    }
    return count;
}


let interval = setInterval(decreaseCount, 1000);

addBtn.addEventListener("click", function() {
    topicName.innerText = focus.value;

    let newLearning = reviewInput.value;
    let newPara = document.createElement("p");
    let newText = document.createTextNode(newLearning);
    newPara.appendChild(newText);

    learnReview.appendChild(newPara);
    reviewInput.value = '';
});

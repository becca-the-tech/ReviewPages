let downButtons = document.getElementsByTagName("i");
let containers = document.getElementsByClassName("container");

for (let i = 0; i < downButtons.length; i++) {
    downButtons[i].addEventListener("click", function() {
        containers[i].classList.toggle("hidden");
        downButtons[i].classList.toggle("fa-arrow-circle-right");
        downButtons[i].classList.toggle("fa-arrow-circle-down");
    });
}

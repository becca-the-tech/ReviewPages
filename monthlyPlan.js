let listElements = document.querySelectorAll("li");

for (let i = 0; i < listElements.length; i++) {
    listElements[i].addEventListener("click", function() {
        listElements[i].classList.toggle("strike");
    });
}

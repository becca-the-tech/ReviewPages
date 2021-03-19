window.addEventListener("load", function() {
    let firstParagraph = document.getElementById("firstPara");

    firstParagraph.addEventListener("mouseover", function() {
        let start = document.getElementById("start");
        start.style.backgroundColor = "yellow";
        start.style.color = "blue";
    });


});

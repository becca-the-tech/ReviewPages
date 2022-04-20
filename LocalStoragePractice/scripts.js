let submitBtn = document.querySelector("#submit");
let h1 = document.querySelector("h1");
let templateTitle = document.querySelector("#templateTitle");
let templateContent = document.querySelector("#templateContent");
let getInfoBtn = document.querySelector("#getInfo");


getInfoBtn.addEventListener("click", () => {
    let title = localStorage.getItem("title") || "no title in storage";
    let content = localStorage.getItem("content") || "no content in storage";

    templateTitle.innerText = title;
    templateContent.innerText = content;
});

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let content = document.querySelector("#content").value;

    localStorage.setItem("title", title);
    localStorage.setItem("content", content);

    let newCard = `<div class="card col-lg-3">
        <div class="card-title">${localStorage.getItem("title")}</div>
        <div class="card-body">${localStorage.getItem("content")}</div>
        </div>`;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = newCard;
    h1.appendChild(newDiv);
});

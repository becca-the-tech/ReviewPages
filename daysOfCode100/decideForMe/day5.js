//get buttons from DOM
let addBtn = document.getElementById("addOption");
let decideBtn = document.getElementById("decide");

//get the input field and the hidden list
let inputField = document.getElementById("option");
let hiddenList = document.getElementById("hiddenList");

//create an empty array to store options
let options = [];

//event listener to add options
addBtn.addEventListener("click", (e) => {
    //prevents form from being submitted
    e.preventDefault();

    //checks that user entered value before clicking
    if (inputField.value) {
        //adds value to the options array
        options.push(inputField.value);

        //creates an li and populates it with data
        let li = document.createElement("li");
        li.innerText = inputField.value;
        hiddenList.appendChild(li);

        //resets input for user to type in another choice
        inputField.value = "";
    }
});

//when decide button is clicked
decideBtn.addEventListener("click", () => {
    //makes sure user has at least entered one item
    if (options.length > 0) {
        //randomly selects a number
        let randNum = Math.floor(Math.random() * options.length);
        //displays the choice in the h1
        document.querySelector("h1").innerText = options[randNum];

        //reset the hidden list to nothing & reset options
        hiddenList.innerHTML = "";
        options = [];
    }
});

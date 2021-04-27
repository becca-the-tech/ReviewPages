const input = require("readline-sync");

let todoList = [];

console.log("Welcome to  your todo list. What would you like to do? ");
console.log("Options are: \n1) Add new Todo to list\n 2) Delete a Todo \n3) View Todo List \n4) Quit");
let userOption = input.question("What is the option number you'd like to perform? ");

while (userOption !== "4") {
    if (userOption === "1") {
        let newTodo = input.question("What todo would you like to add to your list? ");
        todoList.push(newTodo);
        userOption = input.question("What is the option number you'd like to perform? ");
    } else if (userOption === "2") {
        let itemIndex = input.question("Which item would you like to remove from your todo list? ");
        todoList.splice(itemIndex - 1, 1);
        userOption = input.question("What is the option number you'd like to perform? ");
    } else if (userOption === "3") {
        console.log("*******");
        console.log("TODO LIST");
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i + 1}) ${todoList[i]}`);
        }
        console.log("*******");
        userOption = input.question("What is the option number you'd like to perform? ");
    } else {
        console.log("Invalid input.");

        userOption = input.question("What is the option number you'd like to perform? ");
    }
}

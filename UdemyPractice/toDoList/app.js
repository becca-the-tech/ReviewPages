const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

let todos = [];
let workItems = [];

app.get("/", function(req, res) {
    let day = date();

    res.render("list", {
        listTitle: day,
        kindOfDay: day,
        newListItems: todos
    });
});

app.post("/", function(req, res) {

    let todo = req.body.newTodo;

    if (req.body.list === "Work List") {
        workItems.push(todo);
        res.redirect("/work");
    } else {
        todos.push(todo);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.get("/about", function(req, res) {
    res.render("about", {});
});

/*app.post("/work", function(req, res) {
    let todo = req.body.newTodo;
    workItems.push(todo);

    res.redirect("/work");
}); */

app.listen(3000, function() {
    console.log("App is listening on port 3000.");
});

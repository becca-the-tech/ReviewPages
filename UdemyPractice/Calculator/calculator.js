const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let result = Number(num1) + Number(num2);

    res.send("The sum of the two numbers is: " + result);
});

//For /bmiCalculator routes
app.get("/bmiCalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res) {
    let weight = req.body.weight;
    let height = req.body.height;

    let bmi = Math.round((weight) / (height * height));

    res.send("Your bmi is: " + bmi);
});

app.listen(3000, function() {
    console.log("Server has started on port 3000");
});

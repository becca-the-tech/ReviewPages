const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("<h1 style='color: blue;'>Hello World</h1>");
});

app.get("/contact", function(req, res) {
    res.send("<p>Contact me at: becca@email.com</p>");
});

app.get("/about", function(req, res) {
    res.send("<p>Hi, I'm a twenty-something woman who loves to code, read, and be in nature. If I'm not at my computer, you can find me chilling with a book or on my porch watching nature.</p>");
});

app.listen(3000, function() {
    console.log("Server has started.");
});

// get /quotes
// post /quotes

// get /quotes/:id
// put /quotes/:id
// patch /quotes/:id
// delete /quotes/:id

//quoteSchema { quoteContent, author, book, userNotes, tags [], likes }

const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Quote = require("./models/quote");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

mongoose.connect("mongodb://localhost:27017/quotesDB", { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/quotes", async (req, res) => {
    const quotes = await Quote.find({});
    res.render("home", { quotes });
});

app.post("/quotes", (req, res) => {
    const { quoteContent, author, book, userNotes, tags } = req.body;
    const quote = new Quote({
        quoteContent: quoteContent,
        author: author,
        book: book,
        userNotes: userNotes,
        tags: tags
    });
    quote.save().then(() => console.log("Saved new quote"));
    res.redirect("/quotes");
});

app.get("/quotes/new", (req, res) => {
    res.render("new");
});


app.get("/quotes/:id", async (req, res) => {
    const { id } = req.params;
    const quote = await Quote.findById(id);
    res.render("show", { quote });
});

app.get("/quotes/:id/edit", async (req, res) => {
    const { id } = req.params;
    const quote = await Quote.findById(id);
    res.render("edit", { quote });
});

app.put("/quotes/:id", async (req, res) => {
    const { id } = req.params;
    const quote = await Quote.findByIdAndUpdate(id, req.body, { new: true });
    res.redirect(`/quotes/${quote._id}`);
});

app.delete("/quotes/:id", async (req, res) => {
    const { id } = req.params;
    await Quote.findByIdAndDelete(id);
    res.redirect("/quotes");
});

app.listen(3000, () => {
    console.log("App is listening on port 3000");
});

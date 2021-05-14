const mongoose = require("mongoose");

//quoteSchema { quoteContent, author, book, userNotes, tags [], likes }
const quoteSchema = new mongoose.Schema(
    {
        quoteContent: {
            type: String,
            required: true
        },
        author: String,
        book: String,
        tags: {
            type: [String],
            default: []
        },
        userNotes: String,
        likes: {
            type: Number,
            default: 0
        }
    }
);

module.exports = mongoose.model("Quote", quoteSchema);

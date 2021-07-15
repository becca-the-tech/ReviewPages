const fs = require('fs');

// Reading data in utf-8 format
// which is a type of character set.
// Instead of 'utf-8' it can be
// other character set also like 'ascii'
fs.readFile('OldKindleMyClippings.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    highlightList = data.split("==========");
    const quotesList = [];
    //highlight is each individual quote part of the array.. array[0] =>
    let justQuotesList = highlightList.map(highlight => {
        let quoteInParts = highlight.split("\r\n");
        // console.log("Book: " + quoteInParts[1]);
        // console.log("Quote: " + quoteInParts[4]);
        // console.log("----\n");
        const newQuote = {
            book: quoteInParts[1],
            quote: quoteInParts[4]
        };
        quotesList.push(newQuote);
    });

    // console.log(quotesList.length);


    //choosing a random quote from the list of quotes and printing to the console
    let randomNum = Math.floor(Math.random() * quotesList.length);
    console.log(`---------\n${quotesList[randomNum].quote} \n
    -${quotesList[randomNum].book}\n---------`);
});;

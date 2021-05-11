const franc = require("franc");
const langs = require("langs");
// const input = require("readline-sync");
const colors = require("colors");


// let sample = input.question("What is the sample text? ".gray);
let sample = process.argv[2];

let identifier = franc(sample);

if (identifier == "und") {
    console.log("Couldn't detect the language properly.".red);
} else {
    let language = langs.where("3", identifier);
    if (language != 'undefined') {
        console.log(`Our best guess of the language is: ${language.name.green}.`);
    } else {
        console.log("Language was not detected. Please try again with a longer sample".red);
    }

    // language = language.name;
    // let coloredText = language.green;
    // console.log(coloredText);
};

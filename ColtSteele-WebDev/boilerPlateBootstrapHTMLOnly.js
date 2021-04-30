//File System is part of Node, but does have to be required to be used
const fs = require("fs");

//is run by "node boilerPlateBootstrapHTMLOnly.js File_Name" and creates a file called File_Name
//if no file_Name is specified it defaults to "fileName.html"
const fileName = process.argv[2] || "fileName.html";


//using this as the starter info for HTML that includes the JS and CSS already attached
//also already includes Bootstrap CDN stylesheets
let html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>

<body>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>

</html>`;


try {
    fs.writeFileSync(`${fileName}.html`, html);
} catch (e) {
    console.log("Something went wrong.");
    console.log(e);
}

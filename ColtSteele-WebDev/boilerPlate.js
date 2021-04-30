//File System is part of Node, but does have to be required to be used
const fs = require("fs");

//is run by "node boilerPlate.js Project_Name" and creates a dir called Project_Name
//if no Project_Name is specified it defaults to "Project"

//first two elements in the process.argv array are the node command and name_of_file
const folderName = process.argv[2] || "Project";

//mkdir asynchronously, so if you have multiple arguments they may not be one after the other
//includes err catching within the callback function

// fs.mkrdir("NewFolder", {recursive: true}, (err) => {
//     console.log("In the callback function");
//     if(err) throw err;
// } )

//using this as the starter info for HTML that includes the JS and CSS already attached
let html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <script src="app.js"></script>
</body>

</html>`;


try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, html);
    fs.writeFileSync(`${folderName}/app.js`, '');
    fs.writeFileSync(`${folderName}/styles.css`, '');
} catch (e) {
    console.log("Something went wrong.");
    console.log(e);
}

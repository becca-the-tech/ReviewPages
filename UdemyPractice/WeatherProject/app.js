const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Tampa&appid=fb490fe5c4bf14e08a4881b51a327b5c";
    https.get(url, function(response) {
        console.log(response.statusCode);
    });

    res.send("Server is up and running on port 3000.");
});



app.listen(3000, function() {
    console.log("Server is running");
});

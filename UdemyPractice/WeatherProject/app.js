const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const dotenv = require('dotenv');
dotenv.config();
//console.log(`Your port is ${process.env.PORT}`); // 8626 -- confirming env file is working

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    const query = req.body.cityName;
    const apiKey = process.env.API_KEY;
    const unit = "imperial";

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=" + unit;
    https.get(url, function(response) {
        //console.log(response.statusCode);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;

            const weatherDescription = weatherData.weather[0].description;

            //multiple res.write()'s can be used, unlike res.send()
            const header = "<h1>Weather in " + query + "</h1>";
            const displayTemp = "<p>The  temperature in " + query + " is " + temp + " degrees Fahrenheit. </p>";
            const displayDescription = "<p>The weather in " + query + " is currently " + weatherDescription + ".<p>";

            //when trying to displayIcon above header, it kept breaking the processing of the html so keep images below h1
            const icon = weatherData.weather[0].icon;
            const iconLocation = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            const displayIcon = "<img src=\"" + iconLocation + "\" alt=\"weather-img\" style='background: blue;'>";

            //            res.write("<img src='" + iconLocation + "' alt='weather-img'>");
            res.write(header);
            res.write(displayIcon);
            res.write(displayTemp);
            res.write(displayDescription);

            res.send();
        });
    });
});
//There can only be one res.send() per file, more than one causes the app to crash with the error code: "ERR_HTTP_HEADERS_SENT"
//    res.send("Server is up and running on port 3000.");





app.listen(3000, function() {
    console.log("Server is running");
});

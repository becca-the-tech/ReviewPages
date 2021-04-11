const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const request = require("request");
const client = require("@mailchimp/mailchimp_marketing");

// server.js
const dotenv = require('dotenv');
dotenv.config();
//console.log(`Your port is ${process.env.PORT_EXAMPLE}`); // 8626 -- confirmed its setup properly

const app = express();

client.setConfig({ apiKey: process.env.API_KEY, server: process.env.SERVER });

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const subscribingUser = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    //const jsonDATA = JSON.stringify(data)
    // const url = "something";
    // https.request(url, options, function(response){

    // })

    const run = async () => {
        try {
            const response = await client.lists.addListMember(process.env.LIST, {
                email_address: subscribingUser.email,
                status: "subscribed",
                merge_fields: {
                    FNAME: subscribingUser.firstName,
                    LNAME: subscribingUser.lastName
                }
            });
            res.sendFile(__dirname + "/success.html");
        } catch (err) {
            console.log(err.status);
            res.sendFile(__dirname + "/failure.html");
        }
        //console.log(response); // (optional)
    };

    run();
    //    res.send("Your name is: " + firstName + " " + lastName + ". \nYour email is: " + email);
});

app.post("/failure", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.listen(process.env.PORT || 3000, function() {
    console.log("Server is running on port 3000.");
});

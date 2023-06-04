const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html") 
})

app.listen(3000, function() {
    console.log("Server started on port 3000")
})

app.post("/", function(req, res){

    let height = Number(req.body.height);
    let weight = Number(req.body.weight);
    let bmi = Math.round(weight / (height * height));

    res.send("Your BMI is " + bmi + ".");
})


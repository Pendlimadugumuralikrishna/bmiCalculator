const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
})

app.post("/",function(req,res){
    let height = req.body.height;
    let weight = req.body.weight;
    let bmi = parseFloat(weight/(height*height)).toFixed(2);

    res.send(`you BMI is : ${bmi}`);

})



app.listen(8080,function(req,res){
    console.log("Server is running on port 8080");
})